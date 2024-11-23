import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="flex items-center text-3xl font-bold gap-3">
                    <Image src="/image/warehouse-hero.svg" width={80} height={80} alt="Warehouse Logo" />
                    Stok Barang.co.id
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex items-center gap-2 text-base font-semibold">
                    <li className="flex flex-row ">
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
        </div>
    );
};

export default Navbar;
