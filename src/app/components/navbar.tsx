"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbar bg-base-100 px-6 md:px-[2cm] fixed">
            <div className="flex-1">
                <a className="flex items-center text-2xl md:text-3xl font-bold gap-3">
                    <Image src="/image/warehouse.jpg" className="" width={50} height={50} alt="Warehouse Logo" />
                    StokBarang.id
                </a>
            </div>

            <div className="flex-none lg:flex hidden">
                <ul className="menu menu-horizontal px-1 flex items-center gap-2 text-base font-semibold">
                    <li className="flex flex-row">
                        <motion.a className="hover:text-[#0092BD]" onClick={() => scrollToSection("beranda")}>Beranda</motion.a>
                        <motion.a className="hover:text-[#0092BD]" onClick={() => scrollToSection("fitur")}>Fitur</motion.a>
                        <motion.a className="hover:text-[#0092BD]" onClick={() => scrollToSection("tentang")}>Tentang</motion.a>
                        <motion.a className="hover:text-[#0092BD]" onClick={() => scrollToSection("cara-kerja")}>Cara Kerja</motion.a>
                    </li>
                    <li className="flex flex-row gap-4 font-semibold">
                        <Link className="btn btn-bg border-none  btn-bgs transition duration-200" href="/auth/masuk">Masuk</Link>
                        <Link className="btn btn-bgk border-none custom-bg transition duration-200" href="/auth/daftar">Daftar</Link>
                    </li>
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
                <ul className="menu menu-compact p-4 text-base font-semibold">
                    <li><motion.a className="hover:text-[#0092BD]" onClick={() => scrollToSection("beranda")}>Beranda</motion.a></li>
                    <li><motion.a className="hover:text-[#0092BD]" onClick={() => scrollToSection("fitur")}>Fitur</motion.a></li>
                    <li><motion.a className="hover:text-[#0092BD]" onClick={() => scrollToSection("tentang")}>Tentang</motion.a></li>
                    <li><motion.a className="hover:text-[#0092BD]" onClick={() => scrollToSection("cara-kerja")}>Cara Kerja</motion.a></li>
                    <li className="flex flex-row gap-4 font-semibold mt-5 justify-end">
                        <Link className="btn btn-bg border-none btn-bgs transition duration-200" href="/auth/masuk">Masuk</Link>
                        <Link className="btn btn-bgk border-none custom-bg transition duration-200" href="/auth/daftar">Daftar</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
