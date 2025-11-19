"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, X } from "lucide-react";

/**
 * TransaksiPage (updated)
 *
 * Changes:
 * - Replaced select dropdowns with plain buttons that open centered modals.
 * - Search input + Search button + Jenis button aligned in one line with input rounded-left and jenis rounded-right.
 * - Modal component (centered overlay) used for Jenis, Date, Range.
 * - Frontend-only filtering of daftarTransaksi & tabelRefund for demonstration.
 *
 * No backend included.
 */

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

type Trx = {
  id: string;
  nama: string;
  tanggal: string;
  jumlah: number;
  total: string;
};

export default function TransaksiPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Modal states
  const [jenisOpen, setJenisOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [rangeOpen, setRangeOpen] = useState(false);

  // Filter states
  const [searchText, setSearchText] = useState("");
  const [selectedJenis, setSelectedJenis] = useState("Nama");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState("Hari Ini");

  // Dummy data
  const transaksiTerakhir: Trx[] = [
    { id: "TS000005", nama: "Farhan", tanggal: "2025-10-11", jumlah: 12, total: "200000" },
    { id: "TS000004", nama: "Angga", tanggal: "2025-10-11", jumlah: 5, total: "45000" },
    { id: "TS000003", nama: "Riyanto", tanggal: "2025-10-10", jumlah: 2, total: "12000" },
    { id: "TS000002", nama: "-", tanggal: "2025-10-09", jumlah: 1, total: "4000" },
    { id: "TS000001", nama: "Nina", tanggal: "2025-10-01", jumlah: 20, total: "200000" },
  ];

  const daftarTransaksi: Trx[] = [
    { id: "TS000005", nama: "Farhan", tanggal: "2025-10-11", jumlah: 12, total: "200000" },
    { id: "TS000004", nama: "Angga", tanggal: "2025-10-11", jumlah: 5, total: "45000" },
    { id: "TS000003", nama: "Riyanto", tanggal: "2025-10-10", jumlah: 2, total: "12000" },
    { id: "TS000002", nama: "-", tanggal: "2025-10-09", jumlah: 1, total: "4000" },
    { id: "TS000001", nama: "Nina", tanggal: "2025-10-01", jumlah: 20, total: "200000" },
    { id: "TS000006", nama: "Sari", tanggal: "2025-09-20", jumlah: 7, total: "70000" },
    { id: "TS000007", nama: "Budi", tanggal: "2025-08-15", jumlah: 3, total: "30000" },
  ];

  const tabelRefund: Trx[] = [
    { id: "RF00003", nama: "Farhan", tanggal: "2025-10-05", jumlah: 1, total: "20000" },
    { id: "RF00002", nama: "Angga", tanggal: "2025-09-11", jumlah: 2, total: "40000" },
    { id: "RF00001", nama: "Nina", tanggal: "2025-08-01", jumlah: 1, total: "10000" },
  ];

  // Jenis options
  const jenisOptions = [
    "Nama",
    "id transaksi",
    "jumlah =",
    "jumlah >",
    "jumlah <",
    "total harga =",
    "total harga >",
    "total harga <",
  ];

  const rangeOptions = ["Hari Ini", "Minggu Ini", "Bulan Ini"];

  // Helper to parse currency like "Rp 200.000" => 200000
  function parseCurrencyNumber(s: string) {
    const digits = s.replace(/[^\d]/g, "");
    return digits ? parseInt(digits, 10) : 0;
  }

  // Basic frontend filter function (no backend)
  function applyFilter(list: Trx[]) {
    const q = searchText.trim();
    if (!q && !selectedDate && !selectedRange && selectedJenis === "Nama") return list;

    return list.filter((row) => {
      // Filter by Date if set: simple equality (you can expand as needed)
      if (selectedDate) {
        // normalize to YYYY-MM-DD compare
        if (row.tanggal !== selectedDate) return false;
      }

      // Range filtering (demonstrative; not exact -- just example)
      if (selectedRange === "Hari Ini") {
        // no-op for demo, you'd implement actual range by date compare
      }

      // Search by selected jenis
      if (!q) return true;

      const qLower = q.toLowerCase();
      switch (selectedJenis) {
        case "Nama":
          return row.nama.toLowerCase().includes(qLower);
        case "id transaksi":
          return row.id.toLowerCase().includes(qLower);
        case "jumlah =":
          return Number(row.jumlah) === Number(q);
        case "jumlah >":
          return Number(row.jumlah) > Number(q);
        case "jumlah <":
          return Number(row.jumlah) < Number(q);
        case "total harga =":
          return parseCurrencyNumber(row.total) === Number(q.replace(/[^\d]/g, ""));
        case "total harga >":
          return parseCurrencyNumber(row.total) > Number(q.replace(/[^\d]/g, ""));
        case "total harga <":
          return parseCurrencyNumber(row.total) < Number(q.replace(/[^\d]/g, ""));
        default:
          return true;
      }
    });
  }

  const filteredDaftar = useMemo(() => applyFilter(daftarTransaksi), [searchText, selectedJenis, selectedDate, selectedRange]);
  const filteredRefund = useMemo(() => applyFilter(tabelRefund), [searchText, selectedJenis, selectedDate, selectedRange]);

  // Modal component (centered)
  function Modal({
    open,
    onClose,
    title,
    children,
  }: {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
  }) {
    if (!open) return null;
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto p-4 z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="text-lg font-semibold">{title}</div>
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }

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
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Hamburger Mobile */}
      <div className="fixed md:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={28} />
        </button>
        <h1 className="ml-4 text-lg font-semibold">Transaksi</h1>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 p-4 md:p-6">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg space-y-8">
          {/* TRANSAKSI TERAKHIR */}
          <div className="flex sm:flex-row justify-between items-center gap-3 mb-4">

              <p className="font-semibold text-lg">Transaksi Terakhir</p>

              <button className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] w-50 sm:w-auto">
                Tambah Transaksi
              </button>
            </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            

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
                      <button className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg">Detail</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* DAFTAR TRANSAKSI */}
          <p className="font-semibold text-lg mb-4">Daftar Transaksi</p>

            {/* Search & Filter */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
              {/* Single-line search group */}
              <div className="w-full max-w-2xl flex flex-col gap-2 md:flex-row md:gap-0">

            {/* Row 1 (Input + Cari) tetap sejajar di mobile */}
            <div className="flex w-full">
              <input
                type="text"
                placeholder={`Ketik di sini... (cari by ${selectedJenis})`}
                className="
                  flex-1 bg-white border border-gray-200 px-4 py-3 
                  rounded-l-xl md:rounded-l-xl
                  outline-none focus:ring-1 focus:ring-[#5D33DA]
                "
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button
                className="
                  bg-[#5D33DA] text-white px-6 py-3 
                  border-y border-r border-[#5D33DA]
                  rounded-r-xl md:rounded-none
                  hover:bg-[#4A28B5]
                "
                onClick={() => {}}
              >
                Cari
              </button>
            </div>

            {/* Row 2 (Jenis) menjadi w-full di mobile */}
            <button
              className="
                bg-[#5D33DA] text-white px-6 py-3 
                rounded-xl md:rounded-r-xl md:rounded-l-none
                flex items-center justify-center hover:bg-[#4A28B5]
                w-full md:w-auto
              "
              onClick={() => setJenisOpen(true)}
            >
              <span className="capitalize">{selectedJenis}</span>
              {ARROW_SVG}
            </button>

          </div>


              {/* Other filter buttons */}
              <div className="flex gap-2">
                <button
                  className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center"
                  onClick={() => setDateOpen(true)}
                >
                  {selectedDate ? `Date: ${selectedDate}` : "Tanggal"}
                  {ARROW_SVG}
                </button>

                <button
                  className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center"
                  onClick={() => setRangeOpen(true)}
                >
                  {selectedRange}
                  {ARROW_SVG}
                </button>
              </div>
            </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            

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
                {filteredDaftar.map((trx, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4">{trx.tanggal}</td>
                    <td className="py-3 px-4">{trx.jumlah}</td>
                    <td className="py-3 px-4">{trx.total}</td>
                    <td className="py-3 text-center">
                      <button className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg">Detail</button>
                    </td>
                  </tr>
                ))}

                {filteredDaftar.length === 0 && (
                  <tr>
                    <td className="py-4 px-4 text-center" colSpan={6}>
                      Tidak ada data.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* TABEL REFUND */}
          <div className="bg-gray-50 p-4 rounded-xl shadow overflow-x-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <p className="font-semibold text-lg">Tabel Refund</p>

              <button className="bg-[#5D33DA] text-white px-6 py-3 rounded-lg">Tambah Refund</button>
            </div>

            {/* Search Refund (same controls) */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
              <div className="flex w-full max-w-2xl">
                <input
                  type="text"
                  placeholder={`Ketik di sini... (cari by ${selectedJenis})`}
                  className="flex-1 bg-white border border-gray-200 px-4 py-3 rounded-l-xl outline-none focus:ring-1 focus:ring-[#5D33DA]"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="bg-[#5D33DA] text-white px-6 py-3 border-y border-l border-[#5D33DA] hover:bg-[#4A28B5]">
                  Cari
                </button>
                <button
                  className="bg-[#5D33DA] text-white px-6 py-3 rounded-r-xl flex items-center justify-center hover:bg-[#4A28B5]"
                  onClick={() => setJenisOpen(true)}
                >
                  <span className="capitalize">{selectedJenis}</span>
                  {ARROW_SVG}
                </button>
              </div>

              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center" onClick={() => setDateOpen(true)}>
                  {selectedDate ? `Date: ${selectedDate}` : "Tanggal"} {ARROW_SVG}
                </button>
                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center" onClick={() => setRangeOpen(true)}>
                  {selectedRange} {ARROW_SVG}
                </button>
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
                {filteredRefund.map((trx, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4">{trx.tanggal}</td>
                    <td className="py-3 px-4">{trx.jumlah}</td>
                    <td className="py-3 px-4">{trx.total}</td>
                    <td className="py-3 text-center">
                      <button className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg">Detail</button>
                    </td>
                  </tr>
                ))}
                {filteredRefund.length === 0 && (
                  <tr>
                    <td className="py-4 px-4 text-center" colSpan={6}>
                      Tidak ada data.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ==== Jenis Modal ==== */}
      <Modal open={jenisOpen} onClose={() => setJenisOpen(false)} title="Pilih Jenis">
        <div className="grid gap-2">
          {jenisOptions.map((j) => (
            <button
              key={j}
              className={`text-left px-4 py-2 rounded-lg hover:bg-gray-100 ${selectedJenis === j ? "bg-[#F2ECFF] border border-[#D0C0FF]" : ""}`}
              onClick={() => {
                setSelectedJenis(j);
                setJenisOpen(false);
              }}
            >
              {j}
            </button>
          ))}
        </div>
      </Modal>

      {/* ==== Date Modal ==== */}
      <Modal open={dateOpen} onClose={() => setDateOpen(false)} title="Pilih Tanggal">
        <div className="space-y-3">
          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2"
            value={selectedDate ?? ""}
            onChange={(e) => setSelectedDate(e.target.value || null)}
          />
          <div className="flex justify-between">
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
      </Modal>

      {/* ==== Range Modal ==== */}
      <Modal open={rangeOpen} onClose={() => setRangeOpen(false)} title="Pilih Range">
        <div className="grid gap-2">
          {rangeOptions.map((r) => (
            <button
              key={r}
              className={`text-left px-4 py-2 rounded-lg hover:bg-gray-100 ${selectedRange === r ? "bg-[#F2ECFF] border border-[#D0C0FF]" : ""}`}
              onClick={() => {
                setSelectedRange(r);
                setRangeOpen(false);
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}
