"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { data: session, status } = useSession();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' });
    };

    // Mengubah AuthButtons agar tidak menggunakan li
    const AuthButtons = () => {
        if (status === "loading") {
            return <div>Loading...</div>;
        }

        if (session) {
            return (
                <div className="flex flex-row gap-4 font-semibold items-center">
                    <span className="text-[#0092BD]">Hi, {session.user?.name}</span>
                    <button 
                        onClick={handleLogout}
                        className="btn btn-error text-white border-none transition duration-200"
                    >
                        Keluar
                    </button>
                </div>
            );
        }

        return (
            <div className="flex flex-row gap-4 font-semibold">
                <Link className="btn btn-bg border-none btn-bgs transition duration-200" href="/auth/masuk">
                    Masuk
                </Link>
                <Link className="btn btn-bgk border-none custom-bg transition duration-200" href="/auth/daftar">
                    Daftar
                </Link>
            </div>
        );
    };

    return (
        <div className="navbar bg-base-100 px-6 md:px-[2cm] fixed">
            <div className="flex-1">
                <a className="flex items-center text-2xl md:text-3xl font-bold gap-3">
                    <Image src="/image/warehouse.jpg" className="" width={50} height={50} alt="Warehouse Logo" />
                    StokBarang.id
                </a>
            </div>

            {/* Desktop Menu */}
            <div className="flex-none lg:flex hidden">
                <ul className="menu menu-horizontal px-1 flex items-center gap-2 text-base font-semibold">
                    <div className="flex flex-row">
                        <motion.a className="hover:text-[#0092BD] px-4 py-2 cursor-pointer" onClick={() => scrollToSection("beranda")}>Beranda</motion.a>
                        <motion.a className="hover:text-[#0092BD] px-4 py-2 cursor-pointer" onClick={() => scrollToSection("fitur")}>Fitur</motion.a>
                        <motion.a className="hover:text-[#0092BD] px-4 py-2 cursor-pointer" onClick={() => scrollToSection("tentang")}>Tentang</motion.a>
                        <motion.a className="hover:text-[#0092BD] px-4 py-2 cursor-pointer" onClick={() => scrollToSection("cara-kerja")}>Cara Kerja</motion.a>
                    </div>
                    <div className="ml-4">
                        <AuthButtons />
                    </div>
                </ul>
            </div>

            {/* Hamburger Menu untuk Mobile */}
            <div className="lg:hidden flex items-center">
                <button className="btn btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Menu Dropdown untuk Mobile */}
            <div className={`lg:hidden ${menuOpen ? "block" : "hidden"} absolute top-[4rem] right-0 w-full bg-white shadow-md`}>
                <div className="p-4 space-y-4">
                    <motion.a className="block hover:text-[#0092BD] py-2" onClick={() => scrollToSection("beranda")}>Beranda</motion.a>
                    <motion.a className="block hover:text-[#0092BD] py-2" onClick={() => scrollToSection("fitur")}>Fitur</motion.a>
                    <motion.a className="block hover:text-[#0092BD] py-2" onClick={() => scrollToSection("tentang")}>Tentang</motion.a>
                    <motion.a className="block hover:text-[#0092BD] py-2" onClick={() => scrollToSection("cara-kerja")}>Cara Kerja</motion.a>
                    <div className="mt-5">
                        <AuthButtons />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;