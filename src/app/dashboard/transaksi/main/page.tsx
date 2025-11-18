"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";

export default function TransaksiPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy data
  const transaksiTerakhir = [
    { id: "TS000005", nama: "Farhan", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000004", nama: "Angga", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000003", nama: "Riyanto", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000002", nama: "-", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000001", nama: "Nina", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
  ];

  const daftarTransaksi = [
    { id: "TS000005", nama: "Farhan", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000004", nama: "Angga", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000003", nama: "Riyanto", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000002", nama: "-", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000001", nama: "Nina", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000001", nama: "Nina", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000001", nama: "Nina", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
  ];

  const tabelRefund = [
    { id: "TS000005", nama: "Farhan", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000004", nama: "Angga", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000003", nama: "Riyanto", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000002", nama: "-", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000001", nama: "Nina", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
  ];

  return (
    <div className="relative min-h-screen text-[#1D172F]">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      {/* Sidebar Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Tombol Hamburger Mobile */}
      <div className="md:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={28} />
        </button>
        <h1 className="ml-4 text-lg font-semibold">Transaksi</h1>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 p-4 md:p-6">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg space-y-8">

          {/* =========================== */}
          {/*        TRANSAKSI TERAKHIR   */}
          {/* =========================== */}
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <p className="font-semibold text-lg">Transaksi Terakhir</p>

              <button className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] w-full sm:w-auto">
                Tambah Transaksi
              </button>
            </div>

            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30">
                  <th className="py-3 px-4 rounded-tl-lg">ID Transaksi</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Tanggal</th>
                  <th className="py-3 px-4">Jumlah</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">Detail</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {transaksiTerakhir.map((trx, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4">{trx.tanggal}</td>
                    <td className="py-3 px-4">{trx.jumlah}</td>
                    <td className="py-3 px-4">{trx.total}</td>
                    <td className="py-3 text-center">
                      <button className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* =========================== */}
          {/*        DAFTAR TRANSAKSI     */}
          {/* =========================== */}
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            <p className="font-semibold text-lg mb-4">Daftar Transaksi</p>

            {/* Search & Filter */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Ketik di sini……"
                  className="bg-gray-100 px-4 py-3 rounded-xl outline-none"
                />
                <button className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg">
                  Cari
                </button>
                <select className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  <option>Nama</option>
                </select>
              </div>

              <div className="flex gap-2">
                <select className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  <option>Tanggal</option>
                </select>
                <select className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  <option>Hari Ini</option>
                </select>
              </div>
            </div>

            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30">
                  <th className="py-3 px-4 rounded-tl-lg">ID Transaksi</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Tanggal</th>
                  <th className="py-3 px-4">Jumlah</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">Detail</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {daftarTransaksi.map((trx, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4">{trx.tanggal}</td>
                    <td className="py-3 px-4">{trx.jumlah}</td>
                    <td className="py-3 px-4">{trx.total}</td>
                    <td className="py-3 text-center">
                      <button className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* =========================== */}
          {/*        TABEL REFUND         */}
          {/* =========================== */}
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <p className="font-semibold text-lg">Tabel Refund</p>

              <button className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg">
                Tambah Refund
              </button>
            </div>

            {/* Search Refund */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Ketik di sini……"
                  className="bg-gray-100 px-4 py-3 rounded-xl outline-none"
                />
                <button className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg">
                  Cari
                </button>
                <select className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  <option>Nama</option>
                </select>
              </div>

              <div className="flex gap-2">
                <select className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  <option>Tanggal</option>
                </select>
                <select className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  <option>Hari Ini</option>
                </select>
              </div>
            </div>

            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30">
                  <th className="py-3 px-4 rounded-tl-lg">ID Transaksi</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Tanggal Refund</th>
                  <th className="py-3 px-4">Jumlah</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">Detail</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tabelRefund.map((trx, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4">{trx.tanggal}</td>
                    <td className="py-3 px-4">{trx.jumlah}</td>
                    <td className="py-3 px-4">{trx.total}</td>
                    <td className="py-3 text-center">
                      <button className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}
