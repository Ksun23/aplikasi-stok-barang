import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
    const steps = [
        {
            title: "1. Daftar Akun",
            description: "Buat akun dengan mudah hanya dalam beberapa langkah sederhana.",
            icon: "👤",
        },
        {
            title: "2. Input Data Barang",
            description: "Masukkan data barang Anda, termasuk nama, jumlah, dan detail lainnya.",
            icon: "📋",
        },
        {
            title: "3. Pantau Stok",
            description: "Lacak stok barang Anda secara real-time dengan laporan yang jelas.",
            icon: "📈",
        },
        {
            title: "4. Analisis & Optimalkan",
            description: "Gunakan laporan analitik untuk meningkatkan efisiensi dan keuntungan.",
            icon: "💡",
        },
    ];

    return (
        <>
            <div className="w-screen h-screen ">
                <Navbar />
                <div id="beranda" className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 px-[2cm] py-[2cm]">
                    <div className="cols-span-1 pt-[2cm] md:pt-[5cm] text-center md:text-left">
                        <div className="max-w-4xl mx-auto md:mx-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0092BD]">
                                Kelola Stok Barang Anda dengan Mudah
                            </h1>
                            <p className="text-lg md:text-xl mb-8 text-gray-600">
                                Aplikasi manajemen stok barang modern yang membantu Anda melacak, mengelola,
                                dan mengoptimalkan inventaris dengan cepat dan efisien.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button className="bg-[#FAB420] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                                    Mulai Sekarang
                                </button>
                                <button className="border-2 border-[#0092BD] text-[#0092BD] px-6 py-3 rounded-lg font-semibold hover:bg-[#0092BD] hover:text-white transition">
                                    Lihat Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cols-span-1 pl-[2cm] pt-[3.5cm] hidden md:block ">
                        <Image
                            src={"/image/warehouse-hero.svg"}
                            width={800}
                            height={800}
                            alt="Warehouse Illustration"
                        />
                    </div>
                </div>

                <div id="fitur" className="bg-white py-16 mt-[2.9cm] px-6 md:px-12 text-gray-800">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-5xl font-bold mb-8 text-[#0092BD]">
                            Fitur Unggulan
                        </h2>
                        <p className="text-lg mb-12 text-gray-600">
                            Nikmati berbagai fitur canggih yang dirancang untuk mempermudah pengelolaan stok barang Anda.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                            <div className="w-full h-[9cm] mt-[2cm] flex flex-col items-center">
                                <Image src={'/image/packing-list.png'} width={200} height={250} alt="Box Feature" />
                                <h1 className="text-2xl font-bold mt-4">Pemrosesan Barang Masuk</h1>
                                <p className="text-lg text-center">Catat dan proses barang masuk dengan cepat untuk memastikan stok selalu terupdate.</p>
                            </div>
                            <div className="w-full h-[9cm] flex flex-col items-center">
                                <Image src={'/image/inventory.png'} width={200} height={250} alt="Box Feature" />
                                <h1 className="text-2xl font-bold mt-4">Manajemen Stok Efisien</h1>
                                <p className="text-lg text-center">Atur dan pantau stok secara akurat, termasuk barang yang perlu diisi ulang.</p>
                            </div>
                            <div className="w-full h-[9cm] mt-[2cm] flex flex-col items-center">
                                <Image src={'/image/barcode-scanner.png'} width={200} height={250} alt="Box Feature" />
                                <h1 className="text-2xl font-bold mt-4">Pemindai Barcode Otomatis</h1>
                                <p className="text-lg text-center">Pindai barcode untuk memperbarui stok secara instan dan menghindari kesalahan manual.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tentang" className="bg-gray-50 py-16 mt-[4cm] px-6 md:px-12 text-gray-800">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-[#0092BD]">
                            Tentang Kami
                        </h2>
                        <p className="text-lg mb-8 text-gray-600">
                            Kami adalah tim yang berdedikasi untuk memberikan solusi manajemen stok barang
                            yang efisien, modern, dan mudah digunakan. Dengan aplikasi ini, kami membantu
                            bisnis Anda untuk melacak inventaris, meningkatkan produktivitas, dan mengoptimalkan
                            operasional sehari-hari.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-[#FAB420] mb-4">
                                    Misi Kami
                                </h3>
                                <p className="text-gray-600">
                                    Memberikan solusi teknologi terbaik untuk membantu bisnis Anda
                                    berkembang dengan manajemen inventaris yang efisien dan transparan.
                                </p>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-[#FAB420] mb-4">
                                    Visi Kami
                                </h3>
                                <p className="text-gray-600">
                                    Menjadi platform terdepan dalam membantu bisnis kecil hingga besar mengelola stok
                                    barang secara profesional di era digital.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="cara-kerja" className="bg-white py-16 px-6 md:px-12 text-gray-800 mt-[2cm]">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8 text-[#0092BD]">
                            Bagaimana Cara Kerjanya?
                        </h2>
                        <p className="text-lg mb-12 text-gray-600">
                            Ikuti langkah-langkah sederhana berikut untuk mulai menggunakan aplikasi kami.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                                >
                                    <div className="text-4xl mb-4 text-[#FAB420]">{step.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#0092BD] py-16 px-6 md:px-12 mt-[4cm] text-white text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">
                            Siap Meningkatkan Produktivitas Anda?
                        </h2>
                        <p className="text-lg mb-8 text-white/90">
                            Bergabunglah bersama ribuan pengguna lainnya yang telah merasakan kemudahan
                            dalam mengelola stok barang mereka. Coba aplikasi kami sekarang dan rasakan
                            perbedaannya!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="#"
                                className="bg-[#FAB420] text-gray-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#fab420]/90 transition"
                            >
                                Coba Gratis Sekarang
                            </a>
                            <a
                                href="#"
                                className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-[#0092BD] transition"
                            >
                                Pelajari Lebih Lanjut
                            </a>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
