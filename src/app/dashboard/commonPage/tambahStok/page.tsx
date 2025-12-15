"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, Search, ArrowLeft } from "lucide-react";

// Interface Produk
interface Produk {
  id: number;
  nama: string;
  harga: number;
  stok: number;
  jenis?: string;
}

// ICON ARROW
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export default function ProdukPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Search & filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJenis, setSelectedJenis] = useState("Default");
  const [showJenisModal, setShowJenisModal] = useState(false);

  // 🔥 STATE MODAL TAMBAH STOK
  const [selectedProduct, setSelectedProduct] = useState<Produk | null>(null);
  const [quantity, setQuantity] = useState(1);

  // DATA PRODUK
  const [produkList, setProdukList] = useState<Produk[]>([
    { id: 1, nama: "NASI PADANG", harga: 25000, stok: 15, jenis: "makanan" },
    { id: 2, nama: "AYAM GEPREK", harga: 20000, stok: 20, jenis: "makanan" },
    { id: 3, nama: "NASI AYAM GEPREK", harga: 28000, stok: 10, jenis: "makanan" },
    { id: 4, nama: "ES TEH MANIS", harga: 5000, stok: 40, jenis: "minuman" },
    { id: 5, nama: "ES JERUK", harga: 7000, stok: 35, jenis: "minuman" },
    { id: 6, nama: "ES BUAH", harga: 10000, stok: 25, jenis: "minuman" },
    { id: 7, nama: "SOTO AYAM", harga: 23000, stok: 12, jenis: "makanan" },
    { id: 8, nama: "BAKSO SAPI", harga: 22000, stok: 18, jenis: "makanan" },
    { id: 9, nama: "MIE AYAM", harga: 20000, stok: 16, jenis: "makanan" },
    { id: 10, nama: "NASI GORENG SPESIAL", harga: 27000, stok: 14, jenis: "makanan" },
    { id: 11, nama: "SATE AYAM", harga: 25000, stok: 20, jenis: "makanan" },
    { id: 12, nama: "GADO-GADO", harga: 20000, stok: 10, jenis: "makanan" },
    { id: 13, nama: "RENDANG SAPI", harga: 30000, stok: 8, jenis: "makanan" },
    { id: 14, nama: "TEMPE MENDOAN", harga: 10000, stok: 22, jenis: "jajanan" },
    { id: 15, nama: "PISANG GORENG", harga: 8000, stok: 30, jenis: "jajanan" },
    { id: 16, nama: "TAHU CRISPY", harga: 9000, stok: 28, jenis: "jajanan" },
    { id: 17, nama: "SOP BUNTUT", harga: 35000, stok: 6, jenis: "makanan" },
    { id: 18, nama: "TEH HANGAT", harga: 4000, stok: 50, jenis: "minuman" },
    { id: 19, nama: "KOPI HITAM", harga: 8000, stok: 25, jenis: "minuman" },
    { id: 20, nama: "AIR MINERAL", harga: 3000, stok: 60, jenis: "minuman" },
  ]);

  // FILTER PRODUK
  const filteredProduk = produkList.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase());
    const matchJenis =
      selectedJenis === "Default"
        ? true
        : item.jenis === selectedJenis.toLowerCase();

    return matchSearch && matchJenis;
  });

  // 🔥 OPEN MODAL
  const openModal = (product: Produk) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  // 🔥 CLOSE MODAL
  const closeModal = () => {
    setSelectedProduct(null);
    setQuantity(1);
  };

  // 🔥 HANDLE TAMBAH STOK
  const handleTambah = () => {
    if (!selectedProduct) return;

    const updated = produkList.map((p) =>
      p.id === selectedProduct.id
        ? { ...p, stok: p.stok + quantity }
        : p
    );

    setProdukList(updated);
    closeModal();
  };

  return (
    <div className="relative min-h-screen text-gray-800">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      {/* Sidebar Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Button Hamburger */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-800 focus:outline-none"
        >
          <Menu size={28} />
        </button>
        <h1 className="ml-4 font-semibold text-lg text-gray-800">Tambah Stok Produk</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 p-0 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">
          {/* Tombol Kembali */}
          <button
            onClick={() => router.back()}
            className="hidden lg:inline-flex flex items-center gap-2 bg-[#367AFF] text-white px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={20} /> Kembali
          </button>

          <p className="hidden lg:flex font-semibold text-lg mt-4">Tambah Stok Produk</p>

          {/* SEARCH */}
          <div className=" py-4 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">

              {/* SEARCH */}
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Ketik nama produk..."
                  className="w-10 lg:w-auto flex-1 px-4 py-3 text-black rounded-l-md bg-gray-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                  onClick={() => {}}
                  className="bg-[#5D33DA] hover:bg-[#4A28B5] text-white px-6 py-3 rounded-r-md flex items-center gap-2"
                >
                  <Search size={18} /> Cari
                </button>
              </div>

              {/* JENIS */}
              <button
                onClick={() => setShowJenisModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full lg:w-50 flex items-center justify-center"
              >
                {selectedJenis} {ARROW_SVG}
              </button>

            </div>
          </div>

          {/* LIST PRODUK */}
          <div className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-4 
            bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30
            p-4 rounded-xl overflow-y-auto max-h-166 lg:max-h-120
          ">
            {filteredProduk.length > 0 ? (
              filteredProduk.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openModal(item)}   // 🔥 Tambah ini
                  className="cursor-pointer bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition"
                >
                  <div className="bg-gray-200 rounded-md h-28 lg:h-36 flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md" />
                  </div>

                  <div className="flex flex-col justify-between mt-3 text-sm">
                    <p className={`font-bold text-black leading-tight ${
                      item.nama.length > 17 ? "text-xs md:text-sm" : "text-sm"
                    }`}>
                      {item.nama}
                    </p>

                    <div className="flex justify-between text-xs md:text-sm mt-1">
                      <p className="text-black font-semibold">Stok: {item.stok}</p>
                      <p className="text-black">
                        Rp {item.harga.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full py-10">
                Produk tidak ditemukan
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 🔥 MODAL TAMBAH STOK */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 md:p-10 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

              {/* LEFT */}
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-gray-200 rounded-md w-40 h-32 md:w-52 md:h-38 flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-md" />
                </div>

                <p className="font-bold text-lg text-black">
                  {selectedProduct.nama}
                </p>

                <div className="flex justify-between w-full">
                  <p className="text-gray-700">Stok: {selectedProduct.stok}</p>
                  <p className="text-gray-700">
                    Rp {selectedProduct.harga.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-between gap-5 w-full md:w-52">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-md text-lg font-bold"
                  >
                    -
                  </button>

                  <span className="text-2xl font-semibold text-black">{quantity}</span>

                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-md text-lg font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleTambah}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold"
                  >
                    Tambahkan
                  </button>
                  <button
                    onClick={closeModal}
                    className="w-full bg-[#5D33DA] hover:bg-[#4A28B5] text-white py-3 rounded-md font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* MODAL PILIH JENIS */}
      {showJenisModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Pilih Jenis Produk
            </h2>

            {["Default", "makanan", "minuman", "jajanan", "satuan"].map((jenis) => (
              <button
                key={jenis}
                onClick={() => {
                  setSelectedJenis(jenis);
                  setShowJenisModal(false);
                }}
                className="w-full text-left p-3 rounded-md hover:bg-gray-100 text-gray-800 mb-2 capitalize"
              >
                {jenis}
              </button>
            ))}

            <button
              onClick={() => setShowJenisModal(false)}
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
