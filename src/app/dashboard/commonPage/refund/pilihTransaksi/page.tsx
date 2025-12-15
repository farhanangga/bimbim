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

  // Modal Refund
  const [jenisOpenRefund, setJenisOpenRefund] = useState(false);
  const [dateOpenRefund, setDateOpenRefund] = useState(false);
  const [rangeOpenRefund, setRangeOpenRefund] = useState(false);

  // Filter Refund
  const [searchTextRefund, setSearchTextRefund] = useState("");
  const [selectedJenisRefund, setSelectedJenisRefund] = useState("Nama");
  const [selectedDateRefund, setSelectedDateRefund] = useState<string | null>(null);
  const [selectedRangeRefund, setSelectedRangeRefund] = useState("Hari Ini");

  // Dummy Refund Data
  const tabelRefund: Trx[] = [
    { id: "RF00003", nama: "Farhan", tanggal: "2025-10-05", jumlah: 1, total: "20000" },
    { id: "RF00002", nama: "Angga", tanggal: "2025-09-11", jumlah: 2, total: "40000" },
    { id: "RF00001", nama: "Nina", tanggal: "2025-08-01", jumlah: 1, total: "10000" },
  ];

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

  function parseCurrencyNumber(s: string) {
    const digits = s.replace(/[^\d]/g, "");
    return digits ? parseInt(digits, 10) : 0;
  }

  function applyFilter(
    list: Trx[],
    search: string | number | null | undefined,
    jenis: string | null | undefined,
    date: string | null | undefined,
    range: unknown
  ) {
    const q = String(search ?? "").trim();

    return list.filter((row) => {
      if (date && row.tanggal !== date) return false;
      if (q) {
        const qLower = q.toLowerCase();
        switch (jenis) {
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
      }
      return true;
    });
  }

  const filteredRefund = useMemo(() => {
    return applyFilter(
      tabelRefund,
      searchTextRefund,
      selectedJenisRefund,
      selectedDateRefund,
      selectedRangeRefund
    );
  }, [searchTextRefund, selectedJenisRefund, selectedDateRefund, selectedRangeRefund]);

  function Modal({ open, onClose, title, children }: any) {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-auto p-4 z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="text-lg font-semibold">{title}</div>
            <button className="p-2 rounded-lg hover:bg-gray-100" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-[#1D172F]">

      {/* Background */}
      <div className="fixed inset-0 bg-white lg:bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

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

      {/* Mobile Header */}
      <div className="fixed lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={28} />
        </button>
        <h1 className="ml-4 text-lg font-semibold">Pilih Transaksi</h1>
      </div>

      {/* MAIN — hanya REFUND yang tersisa */}
      <div className="lg:ml-64 p-0 lg:p-6">
        <div className="bg-white p-4 lg:p-6 rounded-none lg:rounded-2xl space-y-8 lg:min-h-165">

          {/* HEADER */}
          <div className="flex sm:flex-row justify-between items-center gap-3 mb-4">
            <p className="hidden lg:flex font-semibold text-lg">Pilih Transaksi</p>
          </div>

          {/* Search Refund */}
          <div className="gap-3 mb-4 flex justify-between flex-col xl:flex-row">
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

          {/* Table Refund */}
          <div className="bg-gray-50 p-0 lg:p-4 rounded-xl overflow-x-auto lg:h-110">
            <table className="w-full lg:min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30">
                  <th className="py-3 px-4 rounded-tl-lg">ID Transaksi</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4 hidden lg:table-cell">Tanggal Refund</th>
                  <th className="py-3 px-4 hidden lg:table-cell">Jumlah</th>
                  <th className="py-3 px-4 hidden lg:table-cell">Total</th>
                  <th className="py-3 px-4 text-center rounded-tr-lg">Pilih</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {filteredRefund.map((trx, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4">{trx.id}</td>
                    <td className="py-3 px-4">{trx.nama}</td>
                    <td className="py-3 px-4 hidden lg:table-cell">{trx.tanggal}</td>
                    <td className="py-3 px-4 hidden lg:table-cell">{trx.jumlah}</td>
                    <td className="py-3 px-4 hidden lg:table-cell">{trx.total}</td>
                    <td className="py-3 text-center">
                      <button
                        onClick={() => router.push("/dashboard/commonPage/refund/detailTransaksi")}
                        className="bg-[#5D33DA] text-white px-6 py-2 rounded-lg"
                      >
                        Pilih
                      </button>
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

      {/* MODAL JENIS REFUND */}
      <Modal open={jenisOpenRefund} onClose={() => setJenisOpenRefund(false)} title="Pilih Jenis (Refund)">
        <div className="grid gap-2">
          {jenisOptions.map((j) => (
            <button
              key={j}
              className={`text-left px-4 py-2 rounded-lg hover:bg-gray-100 ${
                selectedJenisRefund === j ? "bg-[#F2ECFF] border border-[#D0C0FF]" : ""
              }`}
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

      {/* MODAL DATE REFUND */}
      <Modal open={dateOpenRefund} onClose={() => setDateOpenRefund(false)} title="Pilih Tanggal (Refund)">
        <div className="space-y-3">
          <input
            type="date"
            className="w-full border px-3 py-2 rounded-lg"
            onChange={(e) => setSelectedDateRefund(e.target.value)}
          />
          <button
            className="w-full bg-[#5D33DA] text-white py-2 rounded-lg"
            onClick={() => setDateOpenRefund(false)}
          >
            Terapkan
          </button>
        </div>
      </Modal>

      {/* MODAL RANGE REFUND */}
      <Modal open={rangeOpenRefund} onClose={() => setRangeOpenRefund(false)} title="Rentang Waktu (Refund)">
        <div className="grid gap-2">
          {rangeOptions.map((r) => (
            <button
              key={r}
              className={`text-left px-4 py-2 rounded-lg hover:bg-gray-100 ${
                selectedRangeRefund === r ? "bg-[#F2ECFF] border border-[#D0C0FF]" : ""
              }`}
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
