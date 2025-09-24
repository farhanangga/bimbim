"use client";

import { useState } from "react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-40 py-6">
          <h1 className="text-2xl font-bold text-blue-700">Bimbim</h1>
          <ul className="hidden md:flex gap-8 font-black text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer ">Fitur</li>
            <li className="hover:text-blue-600 cursor-pointer ">Harga</li>
            <li className="hover:text-blue-600 cursor-pointer ">Ulasan</li>
            <li className="hover:text-blue-600 cursor-pointer ">FAQ</li>
          </ul>
            <ul  className="hidden md:flex gap-8 font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer font-black">Sign In</li>
          </ul>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center px-40">
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
      <section className="relative w-full overflow-hidden">
        <img
          src="/img/assets/bg-white.png"
          alt="Background wave"
          className="w-full h-auto block"
        />

        {/* konten di atas gambar */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-40">
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
      <section className=" px-8 md:px-20 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Bryan Brando",
              text: "Sejak pakai Bimbim, transaksi di toko jadi lebih cepat dan laporan keuangan langsung otomatis. Sangat membantu untuk usaha kecil seperti saya.",
            },
            {
              name: "Anny August",
              text: "Aplikasi kasir terbaik! Mudah digunakan, fiturnya lengkap, dan harga sangat terjangkau untuk bisnis kami.",
            },
            {
              name: "Meliana Jane",
              text: "Aplikasi ini mudah sekali untuk digunakan, saya sangat menyukainya karena bisa membantu saya mengelola bisnis dengan baik.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <p className="mb-4 text-gray-700 leading-relaxed">"{t.text}"</p>
              <h4 className="font-semibold text-blue-700">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="px-8 md:px-20 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">
          KENAPA HARUS PAKAI <span className="text-blue-600">Bimbim?</span>
        </h2>
        <div className="grid gap-4 max-w-2xl mx-auto">
          {[
            "Hemat waktu dengan pencatatan transaksi otomatis",
            "Data tersimpan aman di cloud, tidak takut hilang",
            "Mudah digunakan tanpa perlu pelatihan khusus",
            "Membantu bisnis lebih teratur dan profesional",
            "Mendukung pertumbuhan usaha dengan analisis penjualan",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-4 rounded-lg shadow-sm text-gray-700 font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 md:px-20 py-20">
        <div className="max-w-3xl mx-auto space-y-6">
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
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <p className="font-semibold mb-2">{item.q}</p>
              <p className="bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-lg px-4 py-2 inline-block">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-tr from-[#88AEFF] to-[#A88FFF] text-white px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-2xl font-bold mb-6 md:mb-0">Bimbim</h3>
          <div className="space-y-1 text-sm">
            <p>support@bimbim.id</p>
            <p>+62 812 3456 7890</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">
          © 2025 Bimbim Kasir. All Rights Reserved.
        </p>
        <img
          src="/img/assets/footer.png"
          alt="footer wave"
          className="absolute bottom-0 left-0 w-full"
        />
      </footer>
    </div>
  );
}
