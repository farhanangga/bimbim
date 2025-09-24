"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-30 py-6">
        <h1 className="text-2xl font-bold text-blue-700">Bimbim</h1>
        <ul className="hidden md:flex gap-8 font-bld text-gray-700">
          <li>
            <a href="#fitur" className="hover:text-blue-600 cursor-pointer">Fitur</a>
          </li>
          <li>
            <a href="#harga" className="hover:text-blue-600 cursor-pointer">Harga</a>
          </li>
          <li>
            <a href="#ulasan" className="hover:text-blue-600 cursor-pointer">Ulasan</a>
          </li>
          <li>
            <a href="#faq" className="hover:text-blue-600 cursor-pointer">FAQ</a>
          </li>
        </ul>
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li 
            onClick={() => router.push("/signIn")} 
            className="hover:text-blue-600 cursor-pointer font-bld"
          >
            Sign In
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center px-30">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Kelola Bisnis Lebih Mudah dengan Kasir Digital{" "}
            <span className="text-blue-600">Bimbim</span>
          </h2>
          <p className="mb-8 text-lg text-gray-700 max-w-lg">
            Sistem kasir modern yang membantu Anda mencatat transaksi,
            mengelola stok, dan memantau laporan penjualan dengan cepat &
            akurat.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">
            Mulai
          </button>
        </div>
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src="/img/assets/model.png"
            alt="Kasir Digital"
            className="max-w-sm md:max-w-xl drop-shadow-xl"
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="harga" className="relative w-full overflow-hidden">
        <img
          src="/img/assets/bg-white.png"
          alt="Background wave"
          className="w-full h-auto block"
        />

        {/* konten di atas gambar */}
        <div  className="absolute inset-0 flex flex-col items-center justify-center px-40">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pilih Paket yang Tepat untuk Bisnismu
          </h2>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 flex flex-col justify-between">
            {/* FREE PLAN */}
            <div className=" bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">FREE PLAN</h3>
              <p className="text-gray-700 font-semibold">Rp0 / selamanya</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Maksimal 20 barang</li>
                <li>1 Pengguna (kasir)</li>
                <li>Pencatatan transaksi dasar</li>
                <li>Laporan penjualan harian sederhana</li>
                <li>Akses cloud & sinkronisasi otomatis</li>
              </ul>
              <button className="mt-6 bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] text-white px-6 py-2 rounded-xl">
                Mulai Dengan FREE PLAN
              </button>
            </div>

            {/* BASIC PLAN */}
            <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-2xl shadow-lg p-6 text-center flex flex-col justify-between">
              <h3 className="text-xl font-bold text-gray-800">BASIC PLAN</h3>
              <p className="text-gray-700 font-semibold">Rp49.000 / Bulan</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Tanpa batas barang</li>
                <li>Hingga 2 pengguna (kasir & pegawai)</li>
                <li>Laporan penjualan harian & mingguan</li>
                <li>Manajemen stok otomatis</li>
                <li>Ekspor laporan ke Excel & PDF</li>
              </ul>
              <button className="mt-6 bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] text-white px-6 py-2 rounded-xl">
                Mulai Dengan BASIC PLAN
              </button>
            </div>

            {/* PRO PLAN */}
            <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-2xl shadow-lg p-6 text-center  flex flex-col justify-between">
              <h3 className="text-xl font-bold text-gray-800">PRO PLAN</h3>
              <p className="text-gray-700 font-semibold">Rp199.000 / Bulan</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Semua fitur Basic</li>
                <li>Pengguna tak terbatas</li>
                <li>Laporan penjualan lengkap (harian, mingguan, bulanan)</li>
                <li>Multi perangkat (HP, tablet, PC)</li>
                <li>Notifikasi stok menipis</li>
              </ul>
              <button className="mt-6 bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] text-white px-6 py-2 rounded-xl">
                Mulai Dengan PRO PLAN
              </button>
            </div>

            {/* ENTERPRIZE PLAN */}
            <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-2xl shadow-lg p-6 text-center flex flex-col justify-between">
              <h3 className="text-xl font-bold text-gray-800">ENTERPRIZE PLAN</h3>
              <p className="text-gray-700 font-semibold">Rp599.000 / Tahun</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Semua fitur Basic</li>
                <li>Pengguna tak terbatas</li>
                <li>Laporan penjualan lengkap</li>
                <li>Multi perangkat</li>
                <li>Dukungan pelanggan prioritas</li>
              </ul>
              <button className="mt-6 bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] text-white px-6 py-2 rounded-xl">
                Mulai Dengan ENTERPRIZE PLAN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="ulasan" className="px-30 py-20">
        <div className="flex flex-col gap-8">
          {[
            {
              name: "Bryan Brando",
              text: "Sejak pakai Bimbim, transaksi di toko jadi lebih cepat dan laporan keuangan langsung otomatis. Sangat membantu untuk usaha kecil seperti saya.",
              img: "/img/assets/profil/profil-1.png",
            },
            {
              name: "Amy August",
              text: "Aplikasi kasir terbaik! Mudah digunakan, fiturnya lengkap, dan harga sangat terjangkau untuk bisnis kamii.",
              img: "/img/assets/profil/profil-2.png",
            },
            {
              name: "Meliana Jane",
              text: "Aplikasi ini mudah sekali untuk digunakan, saya sangat menyukainya karena in dapat membantu saya mengelola bisnis saya dengan baik.",
              img: "/img/assets/profil/profil-3.png",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4"
            >
              {/* Foto Profil */}
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              {/* Konten Testimoni */}
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>

                {/* Rating bintang */}
                <div className="flex text-yellow-400 mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>

                <p className="text-gray-700 leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* benefit */}
      <section id="fitur" className="relative w-full overflow-hidden">
        <img
          src="/img/assets/bg-white.png"
          alt="Background wave"
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 grid md:grid-cols-2 gap-12 items-center px-30">
          {/* Judul */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-left">
            KENAPA HARUS <br /> PAKAI{" "}
            <span className="text-blue-600">Bimbim?</span>
          </h2>

          {/* Daftar Benefit */}
          <div className="flex flex-col gap-4">
            {[
              "Hemat waktu dengan pencatatan transaksi otomatis",
              "Data tersimpan aman di cloud, tidak takut hilang",
              "Mudah digunakan tanpa perlu pelatihan khusus",
              "Membantu bisnis lebih teratur dan profesional",
              "Mendukung pertumbuhan usaha dengan analisis penjualan",
            ].map((item, i) => (
              <div
                key={i}
                className="px-8 py-8 rounded-xl text-gray-900 font-medium shadow-md bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-8 md:px-20 py-20">
        <div className="max-w-5xl mx-auto space-y-6">
        {[
          {
            q: "Apakah Bimbim bisa digunakan offline?",
            a: "Bisa, namun data akan otomatis sinkron saat online.",
          },
          {
            q: "Apakah aman menyimpan data di Bimbim?",
            a: "Sangat aman, semua data tersimpan di cloud dengan enkripsi tingkat tinggi.",
          },
          {
            q: "Apakah saya bisa ekspor laporan ke Excel?",
            a: "Bisa, semua laporan bisa diunduh ke format Excel & PDF.",
          },
          {
            q: "Apakah ada dukungan pelanggan?",
            a: "Ya, kami menyediakan support via WhatsApp & Email 24/7.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`w-4/5 bg-white rounded-2xl shadow-md p-6 
              ${i % 2 === 0 ? "mr-auto" : "ml-auto"}`}
          >
            <p className="font-semibold mb-2">{item.q}</p>
            <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 text-black w-full rounded-lg px-4 py-2 inline-block">
              <p className="font-semibold">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Footer */}
      <footer className="relative w-full overflow-hidden">
        {/* Background wave */}
        <img
          src="/img/assets/bg-footer.png"
          alt="Background wave"
          className="w-full h-auto block"
        />

        {/* Konten di atas gambar */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-130 text-black">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 md:mb-0">Bimbim</h3>
            <div className="space-y-1 text-sm text-center md:text-left">
              <p>support@bimbim.id</p>
              <p>+62 812 3456 7890</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
          <p className="text-center mt-8 text-sm">
            © 2025 Bimbim Kasir. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
