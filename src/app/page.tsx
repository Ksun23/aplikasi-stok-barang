import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen px-[2cm]">
        <Navbar />
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="cols-span-1 pt-[4cm]">
            <div className="max-w-4xl ">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0092BD]">
                Kelola Stok Barang Anda dengan Mudah
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600">
                Aplikasi manajemen stok barang modern yang membantu Anda melacak, mengelola,
                dan mengoptimalkan inventaris dengan cepat dan efisien.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-[#FAB420] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                  Mulai Sekarang
                </button>
                <button className="border-2 border-[#0092BD] text-[#0092BD] px-6 py-3 rounded-lg font-semibold hover:bg-[#0092BD] hover:text-white transition">
                  Lihat Demo
                </button>
              </div>
            </div>
          </div>
          <div className="cols-span-1 pl-[2cm] pt-[3.5cm]">
            <Image src={"/image/warehouse-hero.svg"} width={800} height={800} alt=""></Image>
          </div>
        </div>
        <div className="bg-white py-16 mt-[2.9cm] px-6 md:px-12 text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#0092BD]">
              Fitur Unggulan
            </h2>
            <p className="text-lg mb-12 text-gray-600">
              Nikmati berbagai fitur canggih yang dirancang untuk mempermudah pengelolaan stok barang Anda.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="w-[100%] h-[9cm] mt-[2cm] flex flex-col items-center">
                <Image src={'/image/box-feature.png'} width={250} height={300} alt="Box Feature"></Image>
                <p className="">jhagdhjvasjhfjhasfjka</p>
              </div>
              <div className="w-[100%] h-[9cm] bg-black flex flex-col items-center">

              </div>
              <div className="w-[100%] h-[9cm] mt-[2cm] bg-black flex flex-col items-center">

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
