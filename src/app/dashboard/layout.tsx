import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Stokbarang.id | Dasbor",
    description: "Masuk ke aplikasi Stok Barang",
};


const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <main>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;