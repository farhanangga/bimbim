"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">

      {/* MAIN CONTENT */}
      <div className="px-6 py-14 lg:py-24 flex justify-center">
        <div className="max-w-6xl w-full text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#4A28B5] tracking-wide">
            Berlangganan
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-[#1D172F]">

            {/* ================= FREE PLAN ================= */}
            <div
              className="rounded-2xl p-6 text-center flex flex-col justify-between border border-[#E5E7EE]
              transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "#F6F7FF", boxShadow: "0 3px 6px rgba(0,0,0,0.08)" }}
            >
              <h3 className="text-xl font-bold">FREE PLAN</h3>
              <p className="font-semibold mt-2">Rp0 / selamanya</p>

              <ul className="mt-4 text-sm space-y-2">
                <li>Maksimal 20 barang</li>
                <li>1 Pengguna (kasir)</li>
                <li>Pencatatan transaksi dasar</li>
                <li>Laporan penjualan harian sederhana</li>
                <li>Akses cloud & sinkronisasi otomatis</li>
              </ul>

              <button className="bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] mt-6 py-3 rounded-lg text-sm text-white font-semibold ">
                Berlangganan
              </button>
            </div>

            {/* ================= BASIC PLAN ================= */}
            <div
              className="rounded-2xl p-6 text-center flex flex-col justify-between border border-[#E5E7EE]
              transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "#F6F7FF", boxShadow: "0 3px 6px rgba(0,0,0,0.08)" }}
            >
              <h3 className="text-xl font-bold">BASIC PLAN</h3>
              <p className="font-semibold mt-2">Rp49.000 / Bulan</p>

              <ul className="mt-4 text-sm space-y-2">
                <li>Tanpa batas barang</li>
                <li>Hingga 2 pengguna (kasir & pegawai)</li>
                <li>Laporan penjualan harian & mingguan</li>
                <li>Manajemen stok otomatis</li>
                <li>Ekspor laporan ke Excel & PDF</li>
              </ul>

              <button className="bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] mt-6 py-3 rounded-lg text-sm text-white font-semibold ">
                Berlangganan
              </button>
            </div>

            {/* ================= PRO PLAN ================= */}
            <div
              className="rounded-2xl p-6 text-center flex flex-col justify-between border border-[#E5E7EE]
              transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "#F6F7FF", boxShadow: "0 3px 6px rgba(0,0,0,0.08)" }}
            >
              <h3 className="text-xl font-bold">PRO PLAN</h3>
              <p className="font-semibold mt-2">Rp199.000 / Bulan</p>

              <ul className="mt-4 text-sm space-y-2">
                <li>Semua fitur Basic</li>
                <li>Pengguna tak terbatas</li>
                <li>Laporan penjualan lengkap (harian, mingguan, bulanan)</li>
                <li>Multi perangkat (HP, tablet, PC)</li>
                <li>Notifikasi stok menipis</li>
              </ul>

              <button className="bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] mt-6 py-3 rounded-lg text-sm text-white font-semibold ">
                Berlangganan
              </button>
            </div>

            {/* ================= ENTERPRISE PLAN ================= */}
            <div
              className="rounded-2xl p-6 text-center flex flex-col justify-between border border-[#E5E7EE]
              transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "#F6F7FF", boxShadow: "0 3px 6px rgba(0,0,0,0.08)" }}
            >
              <h3 className="text-xl font-bold">ENTERPRISE PLAN</h3>
              <p className="font-semibold mt-2">Rp599.000 / Tahun</p>

              <ul className="mt-4 text-sm space-y-2">
                <li>Semua fitur Basic</li>
                <li>Pengguna tak terbatas</li>
                <li>Laporan penjualan lengkap</li>
                <li>Multi perangkat</li>
                <li>Dukungan pelanggan prioritas</li>
              </ul>

              <button className="bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] mt-6 py-3 rounded-lg text-sm text-white font-semibold ">
                Berlangganan
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER IMAGE */}
      <div className="w-full hidden md:flex">
        <img
          src="/img/assets/footer.png"
          alt="footer"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
