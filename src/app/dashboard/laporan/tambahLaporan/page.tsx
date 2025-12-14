"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, ArrowLeft, ChevronDown } from "lucide-react";

export default function TambahProdukPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // modal jenis laporan
  const [jenisOpen, setJenisOpen] = useState(false);
  const [jenis, setJenis] = useState("Harian");

  const jenisLaporan = ["Harian", "Mingguan", "Bulanan", "Tahunan"];

  return (
    <div className="relative min-h-screen text-[#1D172F]">

      {/* Background Gradient */}
      <div className="fixed inset-0 bg-white lg:bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      {/* Desktop Sidebar */}
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

      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={28} />
        </button>
        <h1 className="ml-4 font-semibold text-lg">
          Tambah Laporan Baru
        </h1>
      </div>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="lg:ml-[260px] p-0 lg:px-4 lg:py-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-148">

          {/* Tombol Kembali */}
          <button
            onClick={() => router.back()}
            className="hidden lg:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={20} /> Kembali
          </button>

          <p className="mt-4 hidden lg:flex font-semibold text-lg">
            Tambah Laporan Baru
          </p>

          {/* Form Card */}
          <div className="mt-4 bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-6 rounded-xl">

            {/* Jenis Laporan */}
            <label className="font-semibold block mb-2">
              Jenis Laporan
            </label>

            <button
              onClick={() => setJenisOpen(true)}
              className="
                w-full
                bg-[#3478F6]
                text-white
                flex justify-between items-center
                px-4 py-3
                rounded-lg
              "
            >
              {jenis}
              <ChevronDown />
            </button>
          </div>

          {/* Tombol Submit*/}
          <div className="hidden lg:flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
             Tambah Laporan Baru
             </button>
          </div>
        </div>
      </div>

      {/* ===================== MODAL JENIS LAPORAN ===================== */}
      {jenisOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">

            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Pilih Jenis Laporan
            </h2>

            {jenisLaporan.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setJenis(item);
                  setJenisOpen(false);
                }}
                className="
                  w-full text-left
                  p-3 rounded-md
                  hover:bg-gray-100
                  text-gray-800
                  mb-2
                "
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => setJenisOpen(false)}
              className="mt-4 w-full py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      {/* ===================== MOBILE BOTTOM BAR ===================== */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-white shadow p-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                Tambah Laporan Baru
            </button>
        </div>
    </div>
  );
}
