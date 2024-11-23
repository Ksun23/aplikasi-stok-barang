"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar bg-base-100 px-6 md:px-[2cm]">
            <div className="flex-1">
                <a className="flex items-center  text-2xl md:text-3xl font-bold gap-3">
                    <Image src="/image/warehouse.jpg" className="hidden md:block" width={50} height={50} alt="Warehouse Logo" />
                    StokBarang.co.id
                </a>
            </div>

            <div className="flex-none lg:flex hidden">
                <ul className="menu menu-horizontal px-1 flex items-center gap-2 text-base font-semibold">
                    <li className="flex flex-row">
                        <Link className="hover:text-[#0092BD]" href="/">Beranda</Link>
                        <Link className="hover:text-[#0092BD]" href="/kontak">Kontak</Link>
                        <Link className="hover:text-[#0092BD]" href="/tentang">Tentang</Link>
                    </li>
                    <li>
                        <details>
                            <summary className="hover:text-[#0092BD]">Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li className="custom-dropdown rounded-md">
                                    <a>Link 1</a>
                                </li>
                                <li className="custom-dropdown rounded-md">
                                    <a>Link 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className="flex flex-row gap-4 font-semibold">
                        <Link className="btn btn-bg h-black border-none" href="/masuk">Masuk</Link>
                        <Link className="btn btn-bgs h-white border-none" href="/daftar">Daftar</Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger Menu untuk Mobile */}
            <div className="lg:hidden flex items-center">
                <button className="btn btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Menu Dropdown untuk Mobile */}
            <div className={`lg:hidden ${menuOpen ? "block" : "hidden"} absolute top-[4rem] right-0 w-full bg-white shadow-md`}>
                <ul className="menu menu-compact p-4 text-base font-semibold">
                    <li><Link className="hover:text-[#0092BD]" href="/">Beranda</Link></li>
                    <li><Link className="hover:text-[#0092BD]" href="/kontak">Kontak</Link></li>
                    <li><Link className="hover:text-[#0092BD]" href="/tentang">Tentang</Link></li>
                    <li>
                        <details>
                            <summary className="hover:text-[#0092BD]">Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li className="custom-dropdown rounded-md">
                                    <a>Link 1</a>
                                </li>
                                <li className="custom-dropdown rounded-md">
                                    <a>Link 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className="flex flex-row mt-[1cm] gap-4 font-semibold">
                        <Link className="btn btn-bg h-black border-none" href="/masuk">Masuk</Link>
                        <Link className="btn btn-bgs h-white border-none" href="/daftar">Daftar</Link>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;
