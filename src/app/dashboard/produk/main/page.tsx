"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, Search, ChevronDown } from "lucide-react";

export default function ProdukPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const produkList = [
    { nama: "ES TEH MANIS", harga: 5000, stok: 40 },
    { nama: "NASI PADANG", harga: 15000, stok: 12 },
    { nama: "AIR MINERAL", harga: 5000, stok: 60 },
    { nama: "NASI AYAM GORENG", harga: 15000, stok: 9 },
    { nama: "NASI AYAM GEPREK", harga: 15000, stok: 14 },
    { nama: "NASI GORENG", harga: 10000, stok: 20 },
    { nama: "ES JERUK", harga: 5000, stok: 35 },
    { nama: "ES BUAH", harga: 25000, hargaJual: 25 },
  ];

  return (
    <div className="relative min-h-screen text-gray-800">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      {/* Sidebar Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Tombol Hamburger */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-800 focus:outline-none"
        >
          <Menu size={28} />
        </button>
        <h1 className="ml-4 font-semibold text-lg text-gray-800">Produk</h1>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="lg:ml-64 p-0 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-lg space-y-10">

          {/* TOP STAT CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Terlaris", "Kurang Laris", "Teruntung", "Stok Terbanyak"].map(
              (label, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#E9EDFF] to-[#D4CFFE] rounded-xl p-4 flex flex-col items-center shadow"
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                  <p className="mt-2 text-center text-sm font-semibold text-gray-800">
                    ES TEH MANIS <br /> 1967 Terjual
                  </p>
                  <span className="mt-2 font-bold text-gray-800">{label}</span>
                </div>
              )
            )}
          </div>

          {/* STATISTIK JUMLAH */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-xl p-4 text-center font-bold text-3xl text-gray-800">
              10
              <p className="text-sm font-semibold text-gray-800">JENIS PRODUK</p>
            </div>
            <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-xl p-4 text-center font-bold text-3xl text-gray-800">
              67
              <p className="text-sm font-semibold text-gray-800">PRODUK</p>
            </div>
          </div>

          {/* BUTTON TAMBAH PRODUK */}
          <div className="flex justify-end">
            <button onClick={() => router.push("/dashboard/commonPage/produkBaru")} className="px-6 py-3 bg-[#5D33DA] hover:bg-[#4A28B5] text-white rounded-xl shadow">
              Tambah Produk Baru
            </button>
          </div>

          {/* ============================ */}
          {/* SEARCH + FILTER (PILIH PRODUK STYLE) */}
          {/* ============================ */}
          <div className="bg-gradient-to-br from-[#E9EDFF] to-[#D4CFFE] p-4 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">

              {/* SEARCH INPUT + BUTTON CARI */}
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Ketik nama produk..."
                  className="flex-1 px-4 py-3 text-black rounded-l-md bg-gray-100 focus:outline-none"
                />

                <button className="bg-[#5D33DA] hover:bg-[#4A28B5] text-white px-6 py-3 rounded-r-md flex items-center gap-2">
                  <Search size={18} /> Cari
                </button>
              </div>

              {/* JENIS PRODUK BUTTON (SAMA PERSIS) */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full md:w-auto">
                Jenis Produk
              </button>

            </div>
          </div>

          {/* GRID PRODUK */}
          <div
            className="
              grid 
              grid-cols-2 
              sm:grid-cols-3 
              md:grid-cols-4 
              lg:grid-cols-5 
              gap-4 
              bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30
              p-4 rounded-xl overflow-y-auto max-h-[70vh]
            "
          >
            {produkList.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition h-auto"
              >
                <div className="bg-gray-200 rounded-md h-28 md:h-36 flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-md" />
                </div>

                <div className="flex flex-col justify-between mt-3 text-sm text-gray-800">
                  <p className="font-bold text-black leading-tight">
                    {item.nama}
                  </p>

                  <div className="flex justify-between text-xs md:text-sm">
                    <p className="text-black font-semibold">Stok: {item.stok ?? 0}</p>
                    <p className="text-black">
                      Rp {item.harga.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INVENTORIS */}
          <div>
            <h2 className="font-bold text-lg text-gray-800 mb-3">INVENTORIS SINGKAT</h2>

            <div className="flex justify-end mb-3">
              <button className="px-6 py-3 bg-[#7A29FF] text-white rounded-xl shadow">
                Tambah Stok
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#E9EDFF] to-[#D4CFFE] p-4 rounded-xl shadow">
                <p className="font-bold text-gray-800 mb-3">Stok kurang dari limit</p>
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-white p-3 rounded-lg border-l-8 border-red-500 mb-2 text-gray-800"
                  >
                    <span>Ice Cream Vanilla</span>
                    <span>5</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#E9EDFF] to-[#D4CFFE] p-4 rounded-xl shadow">
                <p className="font-bold text-gray-800 mb-3">Stok Baru Ditambahkan</p>
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-white p-3 rounded-lg border-l-8 border-green-400 mb-2 text-gray-800"
                  >
                    <span>Ice Cream Vanilla</span>
                    <span>5</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
