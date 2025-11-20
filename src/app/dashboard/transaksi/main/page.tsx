"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, X } from "lucide-react";

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

  // Modal states - dipisah antara Transaksi & Refund (Pilihan A)
  const [jenisOpenTrx, setJenisOpenTrx] = useState(false);
  const [dateOpenTrx, setDateOpenTrx] = useState(false);
  const [rangeOpenTrx, setRangeOpenTrx] = useState(false);

  const [jenisOpenRefund, setJenisOpenRefund] = useState(false);
  const [dateOpenRefund, setDateOpenRefund] = useState(false);
  const [rangeOpenRefund, setRangeOpenRefund] = useState(false);

  // Filter states Transaksi
  const [searchTextTrx, setSearchTextTrx] = useState("");
  const [selectedJenisTrx, setSelectedJenisTrx] = useState("Nama");
  const [selectedDateTrx, setSelectedDateTrx] = useState<string | null>(null);
  const [selectedRangeTrx, setSelectedRangeTrx] = useState("Hari Ini");

  // Filter states Refund
  const [searchTextRefund, setSearchTextRefund] = useState("");
  const [selectedJenisRefund, setSelectedJenisRefund] = useState("Nama");
  const [selectedDateRefund, setSelectedDateRefund] = useState<string | null>(null);
  const [selectedRangeRefund, setSelectedRangeRefund] = useState("Hari Ini");

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
  type Trx = {
    id: string;
    nama: string;
    tanggal: string;
    jumlah: number;
    total: string;
  };

  function applyFilter(
    list: Trx[],
    search: string,
    jenis: string | null,
    date: string | null,
    range: string | null
  ): Trx[] {

    const q = String(search).trim().toLowerCase();

    // ==== Range Date Filter ====
    const today = new Date();
    let startRange: Date | null = null;

    if (range === "Hari Ini") {
      startRange = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    } 
    else if (range === "Minggu Ini") {
      const day = today.getDay();
      const diff = today.getDate() - day + (day === 0 ? -6 : 1);
      startRange = new Date(today.setDate(diff));
    } 
    else if (range === "Bulan Ini") {
      startRange = new Date(today.getFullYear(), today.getMonth(), 1);
    }

    return list.filter((row: Trx) => {
      const rowDate = new Date(row.tanggal);

      // === Filter by date picker ===
      if (date && row.tanggal !== date) return false;

      // === Filter by range ===
      if (startRange) {
        if (rowDate < startRange) return false;
      }

      // === Search filter ===
      if (q) {
        switch (jenis) {
          case "Nama":
            return row.nama.toLowerCase().includes(q);

          case "id transaksi":
            return row.id.toLowerCase().includes(q);

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
      }

      return true;
    });
  }


  const filteredDaftar = useMemo(() => {
    return applyFilter(daftarTransaksi, searchTextTrx, selectedJenisTrx, selectedDateTrx, selectedRangeTrx);
  }, [searchTextTrx, selectedJenisTrx, selectedDateTrx, selectedRangeTrx]);

  const filteredRefund = useMemo(() => {
    return applyFilter(tabelRefund, searchTextRefund, selectedJenisRefund, selectedDateRefund, selectedRangeRefund);
  }, [searchTextRefund, selectedJenisRefund, selectedDateRefund, selectedRangeRefund]);

  // Modal component (centered)
  function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title?: string; children: React.ReactNode; }) {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4" role="dialog" aria-modal="true">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-auto p-4 z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="text-lg font-semibold">{title}</div>
            <button className="p-2 rounded-lg hover:bg-gray-100" onClick={onClose} aria-label="Close modal">
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
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Hamburger Mobile */}
      <div className="fixed lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={28} />
        </button>
        <h1 className="ml-4 text-lg font-semibold">Transaksi</h1>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-0 lg:p-6 ">
        <div className="bg-white p-4 lg:p-6 rounded-none lg:rounded-2xl shadow-lg space-y-8">
          {/* TRANSAKSI TERAKHIR */}
          <div className="flex sm:flex-row justify-between items-center gap-3 mb-4">
            <p className="font-semibold text-lg">Transaksi Terakhir</p>
            <button className="hidden sm:inline-flex items-center bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] sm:w-auto">
              Tambah Transaksi
            </button>
            <button className="inline-flex sm:hidden items-center justify-center p-2 rounded-lg bg-[#5D33DA] text-white hover:bg-[#4A28B5]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
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

          {/* Search & Filter Transaksi */}
          <div className=" gap-3 mb-4 flex justify-between flex-col xl:flex-row">
            {/* Single-line search group */}
            <div className="flex w-auto flex-col sm:flex-row">

              {/* Row 1 (Input + Cari) tetap sejajar di mobile */}
              <div className="flex w-full mb-3 sm:mb-0">
                <input
                  type="text"
                  placeholder={`Ketik di sini... (cari by ${selectedJenisTrx})`}
                  className="
                      flex-1 bg-white border border-gray-200 px-4 py-3 w-full
                      rounded-l-lg lg:rounded-l-lg
                      outline-none focus:ring-1 focus:ring-[#5D33DA]
                      lg:w-92
                    "
                  value={searchTextTrx}
                  onChange={(e) => setSearchTextTrx(e.target.value)}
                />

                <button
                  className="
                      bg-[#5D33DA] text-white px-6 py-3 
                      border-y border-r border-[#5D33DA]
                      lg:rounded-none rounded-r-lg sm:rounded-r-none
                      hover:bg-[#4A28B5] 
                    "
                  onClick={() => {}}
                >
                  Cari
                </button>
              </div>

              {/* Row 2 (Jenis) menjadi w-full di mobile */}
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 w-75 flex justify-center w-full sm:max-w-50  rounded-l-lg sm:rounded-l-none"
                onClick={() => setJenisOpenTrx(true)}
              >
                <span className="capitalize">{selectedJenisTrx}</span>
                {ARROW_SVG}
              </button>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto"
                onClick={() => setDateOpenTrx(true)}
              >
                {selectedDateTrx ? `Date: ${selectedDateTrx}` : "Tanggal"}
                {ARROW_SVG}
              </button>

              <button
                className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto"
                onClick={() => setRangeOpenTrx(true)}
              >
                {selectedRangeTrx}
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
          <div className="flex sm:flex-row justify-between items-center gap-3 mb-4">
            <p className="font-semibold text-lg">Tabel Refund</p>

            <button className="hidden sm:inline-flex items-center bg-[#5D33DA] text-white px-6 py-3 rounded-lg hover:bg-[#4A28B5] sm:w-auto">
              Tambah Refund
            </button>
            <button className="inline-flex sm:hidden items-center justify-center p-2 rounded-lg bg-[#5D33DA] text-white hover:bg-[#4A28B5]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
            {/* Search Refund (same controls but separate state) */}
            <div className=" gap-3 mb-4 flex justify-between flex-col xl:flex-row">
              {/* Single-line search group */}
              <div className="flex w-auto flex-col sm:flex-row">

                {/* Row 1 (Input + Cari) tetap sejajar di mobile */}
                <div className="flex w-full mb-3 sm:mb-0">
                  <input
                    type="text"
                    placeholder={`Ketik di sini... (cari by ${selectedJenisRefund})`}
                    className="
                      flex-1 bg-white border border-gray-200 px-4 py-3 w-full
                      rounded-l-lg lg:rounded-l-lg
                      outline-none focus:ring-1 focus:ring-[#5D33DA]
                      lg:w-92
                    "
                    value={searchTextRefund}
                    onChange={(e) => setSearchTextRefund(e.target.value)}
                  />

                  <button
                    className="
                      bg-[#5D33DA] text-white px-6 py-3 
                      border-y border-r border-[#5D33DA]
                      lg:rounded-none rounded-r-lg sm:rounded-r-none
                      hover:bg-[#4A28B5] 
                    "
                    onClick={() => {}}
                  >
                    Cari
                  </button>
                </div>

                {/* Row 2 (Jenis) menjadi w-full di mobile */}
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 w-75 flex justify-center w-full sm:max-w-50  rounded-l-lg sm:rounded-l-none"
                  onClick={() => setJenisOpenRefund(true)}
                >
                  <span className="capitalize">{selectedJenisRefund}</span>
                  {ARROW_SVG}
                </button>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto"
                  onClick={() => setDateOpenRefund(true)}
                >
                  {selectedDateRefund ? `Date: ${selectedDateRefund}` : "Tanggal"}
                  {ARROW_SVG}
                </button>

                <button
                  className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto"
                  onClick={() => setRangeOpenRefund(true)}
                >
                  {selectedRangeRefund}
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

      {/* ==== Jenis Modal Transaksi ==== */}
      <Modal open={jenisOpenTrx} onClose={() => setJenisOpenTrx(false)} title="Pilih Jenis (Transaksi)">
        <div className="grid gap-2">
          {jenisOptions.map((j) => (
            <button
              key={j}
              className={`text-left px-4 py-2 rounded-lg hover:bg-gray-100 ${selectedJenisTrx === j ? "bg-[#F2ECFF] border border-[#D0C0FF]" : ""}`}
              onClick={() => {
                setSelectedJenisTrx(j);
                setJenisOpenTrx(false);
              }}
            >
              {j}
            </button>
          ))}
        </div>
      </Modal>

      {/* ==== Jenis Modal Refund ==== */}
      <Modal open={jenisOpenRefund} onClose={() => setJenisOpenRefund(false)} title="Pilih Jenis (Refund)">
        <div className="grid gap-2">
          {jenisOptions.map((j) => (
            <button
              key={j}
              className={`text-left px-4 py-2 rounded-lg hover:bg-gray-100 ${selectedJenisRefund === j ? "bg-[#F2ECFF] border border-[#D0C0FF]" : ""}`}
              onClick={() => {
                setSelectedJenisRefund(j);
                setJenisOpenRefund(false);
              }}
            >
              {j}
            </button>
          ))}
        </div>
      </Modal>

      {/* ==== Date Modal Transaksi ==== */}
      <Modal open={dateOpenTrx} onClose={() => setDateOpenTrx(false)} title="Pilih Tanggal (Transaksi)">
        <div className="space-y-3">
          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2"
            value={selectedDateTrx ?? ""}
            onChange={(e) => setSelectedDateTrx(e.target.value || null)}
          />
          <div className="flex justify-between">
            <button
              className="px-4 py-2 rounded-lg border"
              onClick={() => {
                setSelectedDateTrx(null);
                setDateOpenTrx(false);
              }}
            >
              Reset
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-[#5D33DA] text-white"
              onClick={() => setDateOpenTrx(false)}
            >
              Terapkan
            </button>
          </div>
        </div>
      </Modal>

      {/* ==== Date Modal Refund ==== */}
      <Modal open={dateOpenRefund} onClose={() => setDateOpenRefund(false)} title="Pilih Tanggal (Refund)">
        <div className="space-y-3">
          <input
            type="date"
            className="w-full border rounded-lg px-3 py-2"
            value={selectedDateRefund ?? ""}
            onChange={(e) => setSelectedDateRefund(e.target.value || null)}
          />
          <div className="flex justify-between">
            <button
              className="px-4 py-2 rounded-lg border"
              onClick={() => {
                setSelectedDateRefund(null);
                setDateOpenRefund(false);
              }}
            >
              Reset
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-[#5D33DA] text-white"
              onClick={() => setDateOpenRefund(false)}
            >
              Terapkan
            </button>
          </div>
        </div>
      </Modal>

      {/* ==== Range Modal Transaksi ==== */}
      <Modal open={rangeOpenTrx} onClose={() => setRangeOpenTrx(false)} title="Pilih Range (Transaksi)">
        <div className="grid gap-2">
          {rangeOptions.map((r) => (
            <button
              key={r}
              className={`text-left px-4 py-2 rounded-lg hover:bg-gray-100 ${selectedRangeTrx === r ? "bg-[#F2ECFF] border border-[#D0C0FF]" : ""}`}
              onClick={() => {
                setSelectedRangeTrx(r);
                setRangeOpenTrx(false);
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </Modal>

      {/* ==== Range Modal Refund ==== */}
      <Modal open={rangeOpenRefund} onClose={() => setRangeOpenRefund(false)} title="Pilih Range (Refund)">
        <div className="grid gap-2">
          {rangeOptions.map((r) => (
            <button
              key={r}
              className={`text-left px-4 py-2 rounded-lg hover:bg-gray-100 ${selectedRangeRefund === r ? "bg-[#F2ECFF] border border-[#D0C0FF]" : ""}`}
              onClick={() => {
                setSelectedRangeRefund(r);
                setRangeOpenRefund(false);
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
