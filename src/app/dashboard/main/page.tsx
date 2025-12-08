"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react"; // ikon hamburger

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy data
  const chartData = [
    { day: "1 Sept", value: 130 },
    { day: "2 Sept", value: 420 },
    { day: "3 Sept", value: 280 },
    { day: "4 Sept", value: 205 },
    { day: "5 Sept", value: 265 },
    { day: "6 Sept", value: 85 },
    { day: "7 Sept", value: 395 },
    { day: "8 Sept", value: 310 },
    { day: "9 Sept", value: 150 },
    { day: "10 Sept", value: 270 },
    { day: "11 Sept", value: 340 },
    { day: "12 Sept", value: 190 },
    { day: "13 Sept", value: 410 },
    { day: "14 Sept", value: 220 },
    { day: "15 Sept", value: 360 },
    { day: "16 Sept", value: 175 },
    { day: "17 Sept", value: 295 },
    { day: "18 Sept", value: 405 },
    { day: "19 Sept", value: 260 },
    { day: "20 Sept", value: 330 },
    { day: "21 Sept", value: 180 },
    { day: "22 Sept", value: 390 },
    { day: "23 Sept", value: 240 },
    { day: "24 Sept", value: 310 },
    { day: "25 Sept", value: 200 },
    { day: "26 Sept", value: 420 },
    { day: "27 Sept", value: 280 },
    { day: "28 Sept", value: 370 },
    { day: "29 Sept", value: 150 },
    { day: "30 Sept", value: 400 },
  ];

  const transactions = [
    { id: "TS000005", nama: "Farhan", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000004", nama: "Angga", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000003", nama: "Riyanto", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000002", nama: "-", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
    { id: "TS000001", nama: "Nina", tanggal: "11/10/2025", jumlah: 12, total: "Rp 200.000" },
  ];

  const mostItems = [
    { namaBarang: "Es Teh Manis", total: 100 },
    { namaBarang: "Nasi Padang", total: 98 },
    { namaBarang: "Nasi Goreng", total: 75 },
    { namaBarang: "Es Buah", total: 85 },
    { namaBarang: "Es Jeruk", total: 20 },
  ];
  const sortedItems = [...mostItems].sort((a, b) => b.total - a.total);

  const rankColors = ["bg-yellow-300", "bg-gray-300", "bg-amber-600"];

  const stokKurang = [
    { nama: "Ice Cream Vanilla", qty: 5 },
    { nama: "Ice Cream Cokelat", qty: 3 },
    { nama: "Keripik Kentang", qty: 8 },
    { nama: "Susu UHT", qty: 2 },
    { nama: "Teh Botol", qty: 6 },
  ];

  const stokBaru = [
    { nama: "Roti Manis", qty: 20 },
    { nama: "Air Mineral", qty: 50 },
    { nama: "Mi Instan", qty: 30 },
    { nama: "Kopi Sachet", qty: 15 },
    { nama: "Cokelat Batang", qty: 25 },
  ];

  return (
    <div className="relative min-h-screen text-[#1D172F]">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      {/* Sidebar Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile (Overlay) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Tombol Hamburger */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-[#1D172F] focus:outline-none"
        >
          <Menu size={28} />
        </button>
        <h1 className="ml-4 font-semibold text-lg text-[#1D172F]">Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-0 lg:p-6">
        <div className="bg-white p-4 lg:p-6 rounded-none lg:rounded-2xl shadow-lg space-y-8">
          {/* Header Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Total Penjualan", value: "Rp 5.734.000", sub: "Transaksi" },
              { title: "Total Transaksi", value: "100", sub: "Transaksi" },
              { title: "Total Keuntungan", value: "Rp 1.210.000", sub: "Transaksi" },
              { title: "Total Produk Terjual", value: "231", sub: "Barang" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-4 rounded-xl shadow text-center lg:text-left"
              >
                <p className="text-sm">{item.title}</p>
                <h2 className="text-2xl font-bold">{item.value}</h2>
                <p className="text-xs">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Best Seller */}
          <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-4 text-center rounded-xl shadow w-full sm:w-1/2 md:w-1/3">
            <p className="text-sm">Best Seller</p>
            <h2 className="text-lg font-semibold">Es Teh Manis</h2>
            <p className="text-xs">Total Penjualan 100</p>
          </div>

          {/* Tombol Cepat */}
          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => router.push("/dashboard/commonPage/produkBaru")}
              className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] transition w-full sm:w-auto"
            >
              Tambah Produk
            </button>

            <button
              className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] transition w-full sm:w-auto"
              onClick={() => router.push("/dashboard/commonPage/editProduk/pilihProduk")}
            >
              Edit Produk
            </button>

            <button
              className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] transition w-full sm:w-auto"
              onClick={() => router.push("/dashboard/commonPage/tambahStok")}
            >
              Tambah Stok Produk
            </button>

          </div>


          {/* Grafik */}
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            <p className="font-semibold mb-4">Grafik Transaksi 30 Hari Terakhir</p>
            <div className="grid grid-cols-30 gap-2 h-64 min-w-[800px]">
              {chartData.map((item, i) => {
                const maxValue = Math.max(...chartData.map((d) => d.value));
                const barHeight = (item.value / maxValue) * 200;
                return (
                  <div key={i} className="flex flex-col items-center justify-end">
                    <span className="text-xs mb-1 text-[#1D172F]">{item.value}</span>
                    <div
                      className="w-full bg-blue-500 rounded"
                      style={{ height: `${barHeight}px` }}
                    />
                    <span className="text-[10px] mt-1 text-[#1D172F]/70">{item.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transaksi Terakhir */}
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            <p className="font-semibold mb-4">Transaksi Terakhir</p>
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 text-sm text-[#1D172F]">
                  <th className="py-3 px-4 rounded-tl-lg">ID Transaksi</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Tanggal</th>
                  <th className="py-3 px-4">Jumlah</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">Detail</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {transactions.map((trx, i) => (
                  <tr
                    key={trx.id}
                    className={`transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100`}
                  >
                    <td className="py-3 px-4 font-medium">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4">{trx.tanggal}</td>
                    <td className="py-3 px-4">{trx.jumlah}</td>
                    <td className="py-3 px-4">{trx.total}</td>
                    <td className="py-3 text-center">
                      <button onClick={() => router.push("/dashboard/commonPage/detailTransaksi")} className="text-white bg-[#5D33DA] px-6 py-2 rounded-lg hover:bg-[#4A28B5] transition">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Leaderboard */}
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            <p className="font-semibold mb-4">Pembelian Tertinggi</p>
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 text-sm text-[#1D172F]">
                  <th className="py-3 px-4 text-center rounded-tl-lg">No</th>
                  <th className="py-3 px-4">Nama Barang</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">Detail</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {sortedItems.map((item, i) => (
                  <tr
                    key={i}
                    className={`transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100`}
                  >
                    <td
                      className={`py-3 w-10 font-medium text-center ${
                        i < 3 ? rankColors[i] : "bg-transparent"
                      }`}
                    >
                      {i + 1}
                    </td>
                    <td className="py-3 px-4">{item.namaBarang}</td>
                    <td className="py-3 px-4">{item.total}</td>
                    <td className="py-3 text-center">
                      <button onClick={() => router.push("/dashboard/commonPage/detailTransaksi")} className="text-white bg-[#5D33DA] px-6 py-2 rounded-lg hover:bg-[#4A28B5] transition">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Inventori */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-4 rounded-xl shadow">
              <p className="font-semibold mb-4">Stok Kurang dari Limit</p>
              <div className="space-y-2">
                {stokKurang.map((item, i) => (
                  <div
                    key={i}
                    className="py-4 px-4 flex justify-between items-center border-l-4 border-red-500 bg-white p-2 rounded"
                  >
                    <span>{item.nama}</span>
                    <span className="font-bold">{item.qty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-4 rounded-xl shadow">
              <p className="font-semibold mb-4">Stok Baru Ditambahkan</p>
              <div className="space-y-2">
                {stokBaru.map((item, i) => (
                  <div
                    key={i}
                    className="py-4 px-4 flex justify-between items-center border-l-4 border-green-500 bg-white p-2 rounded"
                  >
                    <span>{item.nama}</span>
                    <span className="font-bold">{item.qty}</span>
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
