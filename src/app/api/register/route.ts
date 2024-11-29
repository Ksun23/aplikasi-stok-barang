/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { registerSchema } from '../../../utils/validations';
import { z } from 'zod';


const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();  // Parse JSON body

    // Validasi menggunakan Zod
    registerSchema.parse({ name, email, password });

    //cek apakah name sudah teradaftar
    const existingName = await prisma.user.findUnique({
      where: { name },
    });

    if (existingName) {
      return NextResponse.json({ message: 'Name already registered' }, { status: 400 });
    }

    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 400 });
    }

    // Hash password menggunakan bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru ke database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Respons berhasil
    return NextResponse.json({ message: 'User registered' }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      // Jika ada error validasi Zod
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    // Respons jika ada error lain
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
