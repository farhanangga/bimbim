"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, ArrowLeft, ChevronDown, Plus, Minus, Camera } from "lucide-react";

export default function TambahProdukPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stock, setStock] = useState(99);
  const [jenisOpen, setJenisOpen] = useState(false);
  const [jenis, setJenis] = useState("Makanan");

  const jenisProduk = ["Makanan", "Minuman", "Lainnya"];

  return (
    <div className="relative min-h-screen text-[#1D172F]">

      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button onClick={() => setSidebarOpen(true)} className="text-[#1D172F]">
          <Menu size={28} />
        </button>
        <h1 className="ml-4 font-semibold text-lg text-[#1D172F]">Tambah Produk</h1>
      </div>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="lg:ml-[260px] p-0 lg:px-4 lg:py-6">
        <div className="
          bg-white rounded-none lg:rounded-2xl shadow-lg
          p-6 md:p-8 
          max-w-[1000px]
          mx-auto
          min-h-[650px]
        ">
          
          {/* Tombol Kembali */}
          <button
            onClick={() => router.back()}
            className="hidden lg:inline-flex flex items-center gap-2 bg-[#367AFF] text-white px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={20} /> Kembali
          </button>

          {/* Form Card */}
          <div className="mt-0 lg:mt-6 bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-6 rounded-xl">

            {/* Nama Produk */}
            <label className="font-semibold">Nama Produk</label>
            <input
              className="w-full mt-1 mb-4 px-4 py-3 bg-white rounded-lg outline-none"
              placeholder="klik di sini……….."
            />

            {/* Harga Modal */}
            <label className="font-semibold">Harga Modal Produk</label>
            <input
              className="w-full mt-1 mb-4 px-4 py-3 bg-white rounded-lg outline-none"
              placeholder="klik di sini……….."
            />

            {/* Harga Jual */}
            <label className="font-semibold">Harga Jual Produk</label>
            <input
              className="w-full mt-1 mb-4 px-4 py-3 bg-white rounded-lg outline-none"
              placeholder="klik di sini……….."
            />

            {/* Stok */}
            <label className="font-semibold">Stok Produk</label>
            <div className="flex items-center gap-4 mt-2 mb-4">
              <button
                onClick={() => setStock(stock > 0 ? stock - 1 : 0)}
                className="bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow"
              >
                <Minus />
              </button>
              <span className="text-2xl font-bold">{stock}</span>
              <button
                onClick={() => setStock(stock + 1)}
                className="bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow"
              >
                <Plus />
              </button>
            </div>

            {/* Jenis Produk */}
            <label className="font-semibold">Jenis Produk</label>
            <div className="relative mb-4">
              <button
                onClick={() => setJenisOpen(!jenisOpen)}
                className="w-full bg-[#3478F6] text-white flex justify-between items-center px-4 py-3 rounded-lg"
              >
                {jenis} <ChevronDown />
              </button>

              {jenisOpen && (
                <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg z-20">
                  {jenisProduk.map((item) => (
                    <div
                      key={item}
                      onClick={() => { setJenis(item); setJenisOpen(false); }}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Diskon */}
            <label className="font-semibold">Diskon</label>
            <input
              className="w-full mt-1 mb-4 px-4 py-3 bg-white rounded-lg outline-none"
              placeholder="klik di sini……….."
            />

            {/* Supplier ID */}
            <label className="font-semibold">Supplier ID</label>
            <input
              className="w-full mt-1 mb-4 px-4 py-3 bg-white rounded-lg outline-none"
              placeholder="klik di sini……….."
            />

            {/* Upload Gambar */}
            <label className="font-semibold">Gambar Produk</label>
            <div
              className="mt-2 bg-white border border-gray-300 rounded-xl h-48 flex flex-col justify-center items-center cursor-pointer"
            >
              <Camera size={40} />
              <p className="mt-2 text-sm">Klik di sini untuk mengupload gambar</p>
            </div>

          </div>

          {/* Tombol Submit */}
          <div className="flex justify-end mt-6">
            <button className="bg-[#3478F6] text-white px-6 py-3 rounded-lg">
              Tambah Produk
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
