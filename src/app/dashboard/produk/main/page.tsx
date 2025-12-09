"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, Search } from "lucide-react";

// Tambahkan interface Produk supaya tidak error
interface Produk {
  id: number;
  nama: string;
  harga: number;
  stok: number;
  jenis?: string;
}

// Arrow SVG dari user
const ARROW_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5 ml-2"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function ProdukPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Search dan Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJenis, setSelectedJenis] = useState("Default");
  const [showJenisModal, setShowJenisModal] = useState(false);

  // DATA PRODUK + JENIS
  const produkList: Produk[] = [
    { id: 1, nama: "NASI PADANG", harga: 25000, stok: 15, jenis: "makanan" },
    { id: 2, nama: "AYAM GEPREK", harga: 20000, stok: 20, jenis: "makanan" },
    { id: 3, nama: "NASI AYAM GEPREK", harga: 28000, stok: 10, jenis: "makanan" },
    { id: 4, nama: "ES TEH MANIS", harga: 5000, stok: 40, jenis: "minuman" },
    { id: 5, nama: "ES JERUK", harga: 7000, stok: 35, jenis: "minuman" },
    { id: 6, nama: "ES BUAH", harga: 10000, stok: 25, jenis: "minuman" },
    { id: 7, nama: "SOTO AYAM", harga: 23000, stok: 12, jenis: "makanan" },
    { id: 8, nama: "BAKSO SAPI", harga: 22000, stok: 18, jenis: "makanan" },
    { id: 9, nama: "MIE AYAM", harga: 20000, stok: 16, jenis: "makanan" },
    { id: 10, nama: "NASI GORENG SPESIAL", harga: 27000, stok: 14, jenis: "makanan" },
    { id: 11, nama: "SATE AYAM", harga: 25000, stok: 20, jenis: "makanan" },
    { id: 12, nama: "GADO-GADO", harga: 20000, stok: 10, jenis: "makanan" },
    { id: 13, nama: "RENDANG SAPI", harga: 30000, stok: 8, jenis: "makanan" },
    { id: 14, nama: "TEMPE MENDOAN", harga: 10000, stok: 22, jenis: "jajanan" },
    { id: 15, nama: "PISANG GORENG", harga: 8000, stok: 30, jenis: "jajanan" },
    { id: 16, nama: "TAHU CRISPY", harga: 9000, stok: 28, jenis: "jajanan" },
    { id: 17, nama: "SOP BUNTUT", harga: 35000, stok: 6, jenis: "makanan" },
    { id: 18, nama: "TEH HANGAT", harga: 4000, stok: 50, jenis: "minuman" },
    { id: 19, nama: "KOPI HITAM", harga: 8000, stok: 25, jenis: "minuman" },
    { id: 20, nama: "AIR MINERAL", harga: 3000, stok: 60, jenis: "minuman" },
  ];

  // FILTER PRODUK
  const filteredProduk = produkList.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase());
    const matchJenis =
      selectedJenis === "Default" ? true : item.jenis === selectedJenis.toLowerCase();

    return matchSearch && matchJenis;
  });

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

      {/* MAIN */}
      <div className="lg:ml-64 p-0 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-lg space-y-10">

          {/* TOP CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Terlaris", "Kurang Laris", "Teruntung", "Stok Terbanyak"].map(
              (label, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#E9EDFF] to-[#D4CFFE] rounded-xl p-4 flex flex-col items-center shadow"
                >
                  <div className="bg-white rounded-md h-28 md:h-36 flex items-center justify-center w-full">
                    <div className="w-10 h-10 bg-gray-200 rounded-md" />
                  </div>
                  <p className="mt-2 text-center text-sm font-semibold text-gray-800">
                    ES TEH MANIS <br /> 1967 Terjual
                  </p>
                  <span className="mt-2 font-bold text-gray-800">{label}</span>
                </div>
              )
            )}
          </div>

          {/* STATISTIK */}
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
            <button
              onClick={() => router.push("/dashboard/commonPage/produkBaru")}
              className="px-6 py-3 bg-[#5D33DA] hover:bg-[#4A28B5] text-white rounded-xl shadow"
            >
              Tambah Produk Baru
            </button>
          </div>

          {/* SEARCH + FILTER */}
          <div className="bg-gradient-to-br from-[#E9EDFF] to-[#D4CFFE] p-4 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">

              {/* SEARCH INPUT */}
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Ketik nama produk..."
                  className="w-10 lg:w-auto flex-1 px-4 py-3 text-black rounded-l-md bg-gray-100 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button className="bg-[#5D33DA] hover:bg-[#4A28B5] text-white px-6 py-3 rounded-r-md flex items-center gap-2">
                  <Search size={18} /> Cari
                </button>
              </div>

              {/* JENIS PRODUK BUTTON */}
              <button
                onClick={() => setShowJenisModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full lg:w-50 flex items-center justify-center"
              >
                {selectedJenis} {ARROW_SVG}
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
              p-4 rounded-xl overflow-y-auto max-h-123.5
            "
          >
            {filteredProduk.length > 0 ? (
              filteredProduk.map((item) => (
                <div
                  key={item.id}
                  
                  className="cursor-pointer bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition max-h-57"
                >
                  <div className="bg-gray-200 rounded-md h-28 lg:h-36 flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md" />
                  </div>

                  <div className="flex flex-col justify-between mt-3">
                    <p className="font-bold text-black leading-tight text-sm">{item.nama}</p>
                    <div className="flex justify-between text-xs md:text-sm">
                      <p className="text-black font-semibold">Stok: {item.stok}</p>
                      <p className="text-black">Rp {item.harga.toLocaleString("id-ID")}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full py-10">
                Produk tidak ditemukan
              </p>
            )}
          </div>

          {/* INVENTORIS */}
          <div>
            <div className=" flex sm:flex-row justify-between items-center gap-3 mb-4">
              <p className="font-semibold text-lg">Inventori Singkat</p>
              <button className="hidden sm:inline-flex items-center bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] sm:w-auto">
                Tambah Stok Produk
              </button>
              <button className="inline-flex sm:hidden items-center justify-center p-2 rounded-lg bg-[#5D33DA] text-white hover:bg-[#4A28B5]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
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

      {/* MODAL PILIH JENIS */}
      {showJenisModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">

            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Pilih Jenis Produk
            </h2>

            {["Default", "makanan", "minuman", "jajanan", "satuan"].map((jenis) => (
              <button
                key={jenis}
                onClick={() => {
                  setSelectedJenis(jenis);
                  setShowJenisModal(false);
                }}
                className="w-full text-left p-3 rounded-md hover:bg-gray-100 text-gray-800 mb-2 capitalize"
              >
                {jenis}
              </button>
            ))}

            <button
              onClick={() => setShowJenisModal(false)}
              className="mt-4 w-full py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Tutup
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
