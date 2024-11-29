import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo dan Deskripsi */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 flex gap-2"><Image src={"/image/warehouse.jpg"} alt="" width={30} height={30}></Image>StokBarang.id</h2>
                    <p className="text-gray-400">
                        Solusi terbaik untuk pengelolaan stok barang Anda. Kami membantu
                        bisnis Anda menjadi lebih efisien dan terorganisir.
                    </p>
                </div>

                {/* Navigasi Cepat */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Navigasi Cepat</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-[#FAB420] transition">Fitur</a></li>
                        <li><a href="#" className="hover:text-[#FAB420] transition">cara kerja</a></li>
                        <li><a href="#" className="hover:text-[#FAB420] transition">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-[#FAB420] transition"></a></li>
                    </ul>
                </div>

                {/* Kontak */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
                    <ul className="space-y-2">
                        <li>Email: <a href="mailto:info@stockmanager.com" className="hover:text-[#FAB420] transition">info@stokbarang.id</a></li>
                        <li>Telepon: <a href="tel:+6281234567890" className="hover:text-[#FAB420] transition">+62 812 3456 7890</a></li>
                        <li>Alamat: Jakarta, Indonesia</li>
                    </ul>
                </div>

                {/* Media Sosial */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-[#FAB420] transition">Instagram</a>
                        <a href="#" className="hover:text-[#FAB420] transition">Facebook</a>
                        <a href="#" className="hover:text-[#FAB420] transition">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Hak Cipta */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
                © {new Date().getFullYear()} StokBarang.id Semua Hak Dilindungi.
            </div>
        </footer>
    )
}

export default Footer