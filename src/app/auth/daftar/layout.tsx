import React from 'react';
import { Metadata } from 'next';
import Footer from '@/app/components/footer';

export const metadata: Metadata = {
    title: "Stokbarang.id | Daftar",
    description: "Masuk ke aplikasi Stok Barang",
};


const DaftarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="daftar-layout">
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default DaftarLayout;