"use client";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function TransaksiPage() {
  const router = useRouter();

  // Dummy data Transaksi
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
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-8">

          {/* Transaksi Terakhir */}
          <div className="bg-gray-50 p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Transaksi Terakhir</p>
              <button className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg hover:bg-[#4A28B5]">
                Tambah Transaksi
              </button>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 text-sm text-[#1D172F]">
                  <th className="py-3 px-4 rounded-tl-lg">Id Transaksi</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Tanggal</th>
                  <th className="py-3 px-4">Jumlah</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">Detail</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {transaksiTerakhir.map((trx, i) => (
                  <tr key={trx.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4">{trx.tanggal}</td>
                    <td className="py-3 px-4">{trx.jumlah}</td>
                    <td className="py-3 px-4">{trx.total}</td>
                    <td className="py-3 px-4 w-30 text-center">
                      <button className="text-white bg-[#5D33DA] px-8 py-3 rounded-lg hover:bg-[#4A28B5] transition">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

            {/* Daftar Transaksi */}
            <div className="bg-gray-50 p-4 rounded-xl shadow">
                <div className="mb-4">
                    <p className="font-semibold mb-2">Daftar Transaksi</p>
                    <div className="gap-2 flex justify-between">
                        <div className="flex items-center">
                            {/* Search Input */}
                            <input
                            type="text"
                            placeholder="Ketik di sini…………"
                            className="bg-gray-100 px-4 py-3 w-[60vh] rounded-l-xl text-sm w-64 outline-none"
                            />
                            {/* Tombol Cari */}
                            <button className="bg-[#5D33DA] hover:bg-[#4A28B5] text-white px-8 py-3 text-sm font-semibold">
                            Cari
                            </button>

                            {/* Dropdown Nama */}
                            <select className="bg-blue-600 text-white px-8 py-3 rounded-r-lg text-sm font-semibold">
                            <option>Nama</option>
                            </select>

                        </div>
                        {/* Dropdown Tanggal */}
                        <select className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-semibold">
                            <option>Tanggal</option>
                        </select>
                        
                        {/* Dropdown Hari Ini */}
                        <select className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-semibold">
                            <option>Hari Ini</option>
                        </select>
                    </div>
                </div>

                <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 text-sm text-[#1D172F]">
                    <th className="py-3 px-4 rounded-tl-lg">Id Transaksi</th>
                    <th className="py-3 px-4">Nama</th>
                    <th className="py-3 px-4">Tanggal</th>
                    <th className="py-3 px-4">Jumlah</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4 text-center rounded-tr-lg">Detail</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-800">
                    {daftarTransaksi.map((trx, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-4">{trx.id}</td>
                        <td className="py-3 px-4">{trx.nama}</td>
                        <td className="py-3 px-4">{trx.tanggal}</td>
                        <td className="py-3 px-4">{trx.jumlah}</td>
                        <td className="py-3 px-4">{trx.total}</td>
                        <td className="py-3 px-4 w-30 text-center">
                        <button className="text-white bg-[#5D33DA] px-8 py-3 rounded-lg hover:bg-[#4A28B5] transition">
                            Detail
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

          {/* Tabel Refund */}
          <div className="bg-gray-50 p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Tabel Refund</p>
              <button className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg hover:bg-[#4A28B5]">
                Tambah Refund
              </button>
            </div>
            <div className="mb-4">
                    <div className="gap-2 flex justify-between">
                        <div className="flex items-center">
                            {/* Search Input */}
                            <input
                            type="text"
                            placeholder="Ketik di sini…………"
                            className="bg-gray-100 px-4 py-3 w-[60vh] rounded-l-xl text-sm w-64 outline-none"
                            />
                            {/* Tombol Cari */}
                            <button className="bg-[#5D33DA] hover:bg-[#4A28B5] text-white px-8 py-3 text-sm font-semibold">
                            Cari
                            </button>

                            {/* Dropdown Nama */}
                            <select className="bg-blue-600 text-white px-8 py-3 rounded-r-lg text-sm font-semibold">
                            <option>Nama</option>
                            </select>

                        </div>
                        {/* Dropdown Tanggal */}
                        <select className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-semibold">
                            <option>Tanggal</option>
                        </select>
                        
                        {/* Dropdown Hari Ini */}
                        <select className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-semibold">
                            <option>Hari Ini</option>
                        </select>
                    </div>
                </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 text-sm text-[#1D172F]">
                  <th className="py-3 px-4 rounded-tl-lg">Id Transaksi</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Tanggal Refund</th>
                  <th className="py-3 px-4">Jumlah</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">Detail</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {tabelRefund.map((trx, i) => (
                  <tr key={trx.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4">{trx.tanggal}</td>
                    <td className="py-3 px-4">{trx.jumlah}</td>
                    <td className="py-3 px-4">{trx.total}</td>
                    <td className="py-3 px-4 w-30 text-center">
                      <button className="text-white bg-[#5D33DA] px-8 py-3 rounded-lg hover:bg-[#4A28B5] transition">
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
