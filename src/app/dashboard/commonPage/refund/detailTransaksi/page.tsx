"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, ArrowLeft } from "lucide-react";

export default function DetailTransaksiPage() {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ====== Data Dummy (Samakan Dengan Gambar) ======
  const items = [
    { id: 1, nama: "ES TEH MANIS", harga: 5000, jumlah: 5 },
    { id: 2, nama: "NASI PADANG", harga: 15000, jumlah: 10 },
    { id: 3, nama: "AIR MINERAL", harga: 5000, jumlah: 10 },
    { id: 4, nama: "GEPREK SPESIAL", harga: 25000, jumlah: 1 },
  ];

  const totalHarga = items.reduce((s, i) => s + i.harga * i.jumlah, 0);
  const totalJumlah = items.reduce((s, i) => s + i.jumlah, 0);

  return (
    <div className="relative min-h-screen text-[#1D172F] ">

      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      {/* Sidebar Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile Overlay */}
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

      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-[#1D172F] focus:outline-none"
        >
          <Menu size={28} />
        </button>
        <h1 className="ml-4 font-semibold text-lg text-[#1D172F]">Detail Transaksi</h1>
      </div>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="lg:ml-[260px] p-0 lg:px-4 lg:py-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165 pb-20 lg:pb-8">
          {/* Tombol Kembali */}
          <button
            onClick={() => router.back()}
            className="hidden lg:inline-flex flex items-center gap-2 bg-[#2B68FF] hover:bg-[#1f4fcc] text-white px-4 py-2 rounded-lg w-fit"
          >
            <ArrowLeft size={20} />
            Kembali
          </button>
        
          <p className="hidden lg:flex font-semibold text-lg my-5">Detail Transaksi</p>

          <div className="flex flex-col md:flex-row gap-6 flex-1">

            {/* ==================== LEFT: DETAIL ==================== */}
            <div
              className="
                w-full md:w-[360px]
                bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30
                p-6 rounded-xl 
                flex flex-col justify-between
              "
            >
              <div className="space-y-2">
                <div>
                  <p className="font-bold">Nama</p>
                  <p>Farhan</p>
                </div>

                <div className="mt-3">
                  <p className="font-bold">Tanggal Transaksi</p>
                  <p>11/10/2025</p>
                </div>

                <div className="mt-3">
                  <p className="font-bold">Jumlah</p>
                  <p>{totalJumlah}</p>
                </div>

                <div className="mt-3">
                  <p className="font-bold">Metode Pembayaran</p>
                  <p>Qris</p>
                </div>

                <div className="mt-3">
                  <p className="font-bold">Total</p>
                  <p>Rp {totalHarga.toLocaleString("id-ID")}</p>
                </div>

                <div className="mt-3">
                  <p className="font-bold">Uang Masuk</p>
                  <p>Rp 200.000</p>
                </div>

                <div className="mt-3">
                  <p className="font-bold">Kembalian</p>
                  <p>Rp 0</p>
                </div>

                <div className="mt-3">
                  <p className="font-bold">Status</p>
                  <p className="text-green-700 font-semibold">Berhasil</p>
                </div>
              </div>

              <button
                className="
                  hidden lg:block w-full mt-6 bg-red-600 hover:bg-red-700
                  text-white py-3 rounded-lg
                "
              >
                Refund
              </button>
            </div>

            {/* ==================== RIGHT: LIST BARANG ==================== */}
            <div
              className="
                flex-1 
                bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30
                p-6 rounded-xl 
                flex flex-col
              "
            >
              <h3 className="font-semibold text-gray-800 mb-4">
                Detail Barang yang dibeli
              </h3>

              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="
                      flex items-center justify-between 
                      bg-white/80 shadow rounded-lg p-4
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          bg-blue-200 text-blue-900 
                          w-7 h-7 rounded-full 
                          flex items-center justify-center font-semibold
                        "
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{item.nama}</p>
                        <p className="text-sm text-gray-600">
                          Rp {item.harga.toLocaleString("id-ID")} ×{" "}
                          {item.jumlah}
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold">
                      Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-white shadow p-4">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold">
            Refund
        </button>
      </div>
    </div>
  );
}
