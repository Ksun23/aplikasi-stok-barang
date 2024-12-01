"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const DashboardWithSidebar = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Barang A", quantity: 50, category: "Elektronik", damaged: 2, price: 100000 },
        { id: 2, name: "Barang B", quantity: 20, category: "Peralatan", damaged: 0, price: 50000 },
        { id: 3, name: "Barang C", quantity: 75, category: "Kantor", damaged: 1, price: 20000 },
    ]);


    const totalProduk = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalKategori = new Set(items.map((item) => item.category)).size;
    const totalRusak = items.reduce((sum, item) => sum + item.damaged, 0);
    const totalValue = items.reduce((sum, item) => sum + item.quantity * item.price, 0);


    const { data: session } = useSession();

    const handleAddItem = () => {
        alert("Tambah barang belum diimplementasikan.");
    };

    const handleEditItem = (id: number) => {
        alert(`Edit barang dengan ID: ${id}`);
    };

    const handleDeleteItem = (id: number) => {
        setItems(items.filter((item) => item.id !== id));
    };


    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-72 bg-white shadow-lg hidden lg:block ">
                <div className="p-6 text-center border-b">
                    <h2 className="text-2xl font-bold text-[#0092BD] flex items-center gap-3">
                        <Image src={"/image/warehouse.jpg"} alt="" width={"50"} height={"50"}></Image>
                        StokBarang.id
                    </h2>
                </div>
                <nav className="p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link
                                href="/dashboard"
                                className="flex items-center px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-lg gap-3"
                            >
                                <Image src={"/image/packing-list.png"} alt="" width={"30"} height={"30"}></Image>
                                Dasbor
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/barang"
                                className="flex items-center px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-lg gap-3"
                            >
                                <Image src={"/image/conveyor.png"} alt="" width={"30"} height={"30"}></Image>
                                Kategori
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pengaturan"
                                className="flex items-center px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded-lg gap-3"
                            >
                                <Image src={"/image/setting.png"} alt="" width={"30"} height={"30"}></Image>
                                Pengaturan
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Logout Button */}
                <div className="flex justify-between mb-4">
                    {session && <p className="font-bold text-lg text-[#0092BD]">Hi, {session.user?.name}</p>}
                    <Link
                        href={"/"}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 flex items-center gap-2"
                    >
                        <Image src={"/image/arrow.png"} alt="" width={"20"} height={"20"} />
                        Keluar Dashboard
                    </Link>
                </div>
                <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
                    {/* Statistik */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                        <div className="bg-[#FAB420] text-white p-4 rounded-lg shadow flex items-center gap-4">
                            <div>
                                <Image src={"/image/boxes.png"} alt="" width={"50"} height={"50"}></Image>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Total Produk</h3>
                                <p className="text-2xl font-bold">{totalProduk}</p>
                            </div>
                        </div>
                        <div className="bg-green-500 text-white p-4 rounded-lg shadow flex items-center gap-4">
                            <div>
                                <Image src={"/image/cashier.png"} alt="" width={"50"} height={"50"} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Total Nilai Barang</h3>
                                <p className="text-2xl font-bold">IDR {totalValue.toLocaleString()}</p>
                            </div>
                        </div>

                        <div className="bg-[#0092BD] text-white p-4 rounded-lg shadow flex items-center gap-4">
                            <div>
                                <Image src={"/image/conveyor.png"} alt="" width={"50"} height={"50"}></Image>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Total Kategori</h3>
                                <p className="text-2xl font-bold">{totalKategori}</p>
                            </div>
                        </div>
                        <div className="bg-red-500 text-white p-4 rounded-lg shadow flex items-center gap-4">
                            <div>
                                <Image src={"/image/fragile.png"} alt="" width={"50"} height={"50"}></Image>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Barang Rusak</h3>
                                <p className="text-2xl font-bold">{totalRusak}</p>
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-[#0092BD]">Dashboard Stok Barang</h1>
                        <button
                            onClick={handleAddItem}
                            className="bg-[#FAB420] text-white px-4 py-4 rounded-lg font-semibold hover:bg-opacity-90 flex items-center gap-2"
                        >
                            <Image src={"/image/plus.png"} alt="" width={"20"} height={"20"}></Image>
                            Tambah Barang
                        </button>
                    </div>

                    {/* Tabel Barang */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-[#0092BD] text-white">
                                    <th className="px-4 py-2 border">No</th>
                                    <th className="px-4 py-2 border">Nama Barang</th>
                                    <th className="px-4 py-2 border">Kategori</th>
                                    <th className="px-4 py-2 border">Jumlah</th>
                                    <th className="px-4 py-2 border">Harga (IDR)</th>
                                    <th className="px-4 py-2 border">Barang Rusak</th>
                                    <th className="px-4 py-2 border">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border text-center">{index + 1}</td>
                                        <td className="px-4 py-2 border">{item.name}</td>
                                        <td className="px-4 py-2 border">{item.category}</td>
                                        <td className="px-4 py-2 border text-center">{item.quantity}</td>
                                        <td className="px-4 py-2 border text-right">{item.price.toLocaleString()}</td>
                                        <td className="px-4 py-2 border text-center">{item.damaged}</td>
                                        <td className="px-4 py-2 border flex justify-center gap-2">
                                            <button
                                                onClick={() => handleEditItem(item.id)}
                                                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
                                            >
                                                <Image src={"/image/pencil.png"} alt="" width={20} height={20} />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteItem(item.id)}
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center gap-1"
                                            >
                                                <Image src={"/image/bin.png"} alt="" width={20} height={20} />
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardWithSidebar;
