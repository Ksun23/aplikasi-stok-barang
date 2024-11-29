import React from 'react';
import { Metadata } from 'next';
import Footer from '@/app/components/footer';

export const metadata: Metadata = {
    title: "Stokbarang.id | Masuk",
    description: "Masuk ke aplikasi Stok Barang",
};


const MasukLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="masuk-layout">
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MasukLayout;