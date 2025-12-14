"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, Download } from "lucide-react";

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
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function DashboardPage() {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [dateOpen, setDateOpen] = useState(false);

  const [selectedRange, setSelectedRange] = useState("Default");
  const [rangeOpen, setRangeOpen] = useState(false);

  // 🔥 Data dummy bervariasi tanggal
  const laporanList = [
    { jenis: "Harian", tanggal: "2025-12-01" },
    { jenis: "Mingguan", tanggal: "2025-12-03" },
    { jenis: "Bulanan", tanggal: "2025-12-05" },
    { jenis: "Tahunan", tanggal: "2025-12-08" },
    { jenis: "Harian", tanggal: "2025-12-10" },
    { jenis: "Mingguan", tanggal: "2025-12-12" },
    { jenis: "Bulanan", tanggal: "2025-12-15" },
    { jenis: "Tahunan", tanggal: "2025-12-20" },
    { jenis: "Harian", tanggal: "2025-12-25" },
  ];

  const filteredList = laporanList.filter((item) => {
    const matchRange =
      selectedRange === "Default" ||
      item.jenis.toLowerCase() === selectedRange.toLowerCase();

    const matchDate = !selectedDate || item.tanggal === selectedDate;

    return matchRange && matchDate;
  });

  return (
    <div className="relative min-h-screen text-[#1D172F]">

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

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center p-4 bg-white sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-[#1D172F] focus:outline-none"
        >
          <Menu size={28} />
        </button>
        <h1 className="ml-4 font-semibold text-lg text-[#1D172F]">Laporan</h1>
      </div>

      {/* ✔ NAVBAR FILTER KHUSUS MOBILE (sm) */}
      <div className="block sm:hidden bg-white shadow px-4 py-3 flex gap-3 w-full fixed top-[58px] z-20">
        <button
          className="bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center w-full"
          onClick={() => setDateOpen(true)}
        >
          {selectedDate ? `Date: ${selectedDate}` : "Tanggal"}
          {ARROW_SVG}
        </button>

        <button
          className="bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center w-full"
          onClick={() => setRangeOpen(true)}
        >
          {selectedRange}
          {ARROW_SVG}
        </button>
        <button onClick={() => router.push("/dashboard/modeKasir/main")} className="inline-flex sm:hidden items-center justify-center p-3 rounded-lg bg-[#5D33DA] text-white hover:bg-[#4A28B5]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-lg space-y-8 min-h-[660px] mt-15 sm:mt-0">

          {/* Header */}
          <div className="flex sm:flex-row justify-between items-center gap-3 mb-4">
            <p className="hidden lg:block font-semibold text-lg">Laporan</p>
          </div>

          {/* Search Filter - Desktop only */}
          <div className="gap-3 mb-4 hidden sm:flex justify-between flex xl:flex-row">
            <div className="flex gap-2 w-full sm:w-auto">

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center justify-center"
                onClick={() => setDateOpen(true)}
              >
                {selectedDate ? `Date: ${selectedDate}` : "Tanggal"}
                {ARROW_SVG}
              </button>

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center justify-center"
                onClick={() => setRangeOpen(true)}
              >
                {selectedRange}
                {ARROW_SVG}
              </button>

            </div>
            <button 
              onClick={() => router.push("/dashboard/laporan/tambahLaporan")}
              className=" items-center bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] sm:w-auto"
            >
              Tambah Laporan Baru
            </button>
          </div>

          {/* GRID / NO DATA */}
          {filteredList.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <p className="text-gray-600 text-center text-lg">
                Tidak ada laporan yang sesuai dengan pencarian.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-6 pt-4">
              {filteredList.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-xl p-3 shadow hover:shadow-lg transition"
                >
                  <div className="bg-white rounded-lg overflow-hidden h-100 lg:h-76 flex items-center justify-center border">
                    <img
                      src="/img/assets/laporanpdf.png"
                      alt="Laporan"
                      className="w-full h-full object-contain p-3"
                    />
                  </div>

                  <div className="mt-3">
                    <p className="font-semibold text-sm">{item.jenis}</p>
                    <p className="text-xs text-gray-600">{item.tanggal}</p>

                    <div className="mt-3 flex items-center gap-2">
                      <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-3 py-3 rounded-lg text-white text-xs">
                        <Download size={18} />
                      </button>

                      <button className="bg-[#5D33DA] text-white hover:bg-[#4A28B5] px-3 py-3 rounded-lg text-sm w-full">
                        Lihat Laporan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* MODAL DATE */}
      {dateOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Pilih Tanggal</h2>

            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2"
              value={selectedDate ?? ""}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 rounded-lg border"
                onClick={() => {
                  setSelectedDate(null);
                  setDateOpen(false);
                }}
              >
                Reset
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-[#5D33DA] text-white"
                onClick={() => setDateOpen(false)}
              >
                Terapkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL RANGE */}
      {rangeOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Pilih Rentang Waktu</h2>

            {["Default", "Harian", "Mingguan", "Bulanan", "Tahunan"].map((jenis) => (
              <button
                key={jenis}
                onClick={() => {
                  setSelectedRange(jenis);
                  setRangeOpen(false);
                }}
                className="w-full text-left p-3 rounded-md hover:bg-gray-100 text-gray-800 mb-2 capitalize"
              >
                {jenis}
              </button>
            ))}

            <button
              onClick={() => setRangeOpen(false)}
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
