/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Image from 'next/image'
import Link from 'next/link'

import { useState } from "react"
import { signIn } from "next-auth/react"
import { LoginSchema } from "@/utils/validations"
import { useRouter } from "next/navigation"


const page = () => {

    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.currentTarget)
            const email = formData.get("email") as string
            const password = formData.get("password") as string

            const validatedFields = LoginSchema.safeParse({ email, password })

            if (!validatedFields.success) {
                return setError("Invalid fields")
            }

            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            })

            if (result?.error) {
                setError("Invalid credentials")
            } else {
                router.push("/")
            }
        } catch (error) {
            setError("Something went wrong")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative">
            {/* Back to Home Button */}
            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center text-[#0092BD] hover:fill-[#FAB420] transition duration-200 fill-[#0092BD] font-semibold hover:underline hover:text-[#FAB420]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                </svg>
                Beranda
            </Link>

            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                {/* Header */}
                <div className="text-center flex items-center flex-col mb-6">
                    <Image src="/image/warehouse.jpg" alt="Logo" width={80} height={80} />
                    <h2 className="text-3xl font-bold text-[#0092BD] mt-4">Masuk ke Akun Anda</h2>
                    <p className="text-gray-600 mt-2">Selamat datang kembali! Silakan login untuk melanjutkan.</p>
                </div>

                {/* Form */}
                <form onSubmit={onSubmit}>
                {error && <div className="text-red-500">{error}</div>}
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#0092BD] focus:border-[#0092BD]"
                            placeholder="Masukkan email Anda"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Kata Sandi
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#0092BD] focus:border-[#0092BD]"
                            placeholder="Masukkan kata sandi Anda"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-[#FAB420] text-white py-2 px-4 rounded-lg font-semibold duration-200 hover:bg-[#0092BD] focus:outline-none focus:ring-2 focus:ring-[#FAB420] focus:ring-offset-2"
                        >
                            Masuk
                        </button>
                    </div>

                    {/* Additional Links */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Belum punya akun?{' '}
                            <a href="/auth/daftar" className="text-[#0092BD] font-semibold hover:underline">
                                Daftar di sini
                            </a>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            <a href="/reset-password" className="text-[#0092BD] font-semibold hover:underline">
                                Lupa kata sandi?
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default page