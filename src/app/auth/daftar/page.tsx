import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center text-[#0092BD] hover:fill-[#FAB420] transition duration-200 fill-[#0092BD] font-semibold hover:underline hover:text-[#FAB420]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
        </svg>
        Beranda
      </Link>


      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="text-center mb-6 flex flex-col items-center">
          <Image src="/image/warehouse.jpg" alt="Logo" width={80} height={80} />
          <h2 className="text-3xl font-bold text-[#0092BD] mt-4">Daftar Akun Baru</h2>
          <p className="text-gray-600 mt-2">
            Buat akun baru dan mulai kelola stok barang Anda dengan mudah.
          </p>
        </div>

        {/* Form */}
        <form>
          {/* Nama Lengkap */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#0092BD] focus:border-[#0092BD]"
              placeholder="Masukkan nama lengkap Anda"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#0092BD] focus:border-[#0092BD]"
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          {/* Kata Sandi */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#0092BD] focus:border-[#0092BD]"
              placeholder="Masukkan kata sandi"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#FAB420] text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#FAB420] focus:ring-offset-2"
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Additional Links */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{' '}
              <a href="/auth/masuk" className="text-[#0092BD] font-semibold hover:underline">
                Masuk di sini
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>

  )
}

export default page