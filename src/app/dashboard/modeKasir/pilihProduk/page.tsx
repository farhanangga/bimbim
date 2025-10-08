"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Produk {
  id: number;
  nama: string;
  harga: number;
  stok: number;
}

export default function PilihProdukPage() {
  const router = useRouter();

  // Data produk
  const produkList: Produk[] = [
    { id: 1, nama: "NASI PADANG", harga: 25000, stok: 15 },
    { id: 2, nama: "AYAM GEPREK", harga: 20000, stok: 20 },
    { id: 3, nama: "NASI AYAM GEPREK", harga: 28000, stok: 10 },
    { id: 4, nama: "ES TEH MANIS", harga: 5000, stok: 40 },
    { id: 5, nama: "ES JERUK", harga: 7000, stok: 35 },
    { id: 6, nama: "ES BUAH", harga: 10000, stok: 25 },
    { id: 7, nama: "SOTO AYAM", harga: 23000, stok: 12 },
    { id: 8, nama: "BAKSO SAPI", harga: 22000, stok: 18 },
    { id: 9, nama: "MIE AYAM", harga: 20000, stok: 16 },
    { id: 10, nama: "NASI GORENG SPESIAL", harga: 27000, stok: 14 },
    { id: 11, nama: "SATE AYAM", harga: 25000, stok: 20 },
    { id: 12, nama: "GADO-GADO", harga: 20000, stok: 10 },
    { id: 13, nama: "RENDANG SAPI", harga: 30000, stok: 8 },
    { id: 14, nama: "TEMPE MENDOAN", harga: 10000, stok: 22 },
    { id: 15, nama: "PISANG GORENG", harga: 8000, stok: 30 },
    { id: 16, nama: "TAHU CRISPY", harga: 9000, stok: 28 },
    { id: 17, nama: "SOP BUNTUT", harga: 35000, stok: 6 },
    { id: 18, nama: "TEH HANGAT", harga: 4000, stok: 50 },
    { id: 19, nama: "KOPI HITAM", harga: 8000, stok: 25 },
    { id: 20, nama: "AIR MINERAL", harga: 3000, stok: 60 },
  ];

  const [selectedProduct, setSelectedProduct] = useState<Produk | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProduk, setFilteredProduk] = useState<Produk[]>(produkList);

  // 🔒 Kunci scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  // 🔍 Fungsi pencarian
  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    if (term === "") {
      setFilteredProduk(produkList);
    } else {
      const hasil = produkList.filter((p) =>
        p.nama.toLowerCase().includes(term)
      );
      setFilteredProduk(hasil);
    }
  };

  const openModal = (product: Produk) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeModal = () => setSelectedProduct(null);

  const handleTambah = () => {
    router.push("/dashboard/modeKasir/detailPembelian1");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="relative flex flex-col bg-white p-6 rounded-xl w-[1200px] h-[700px] shadow-lg my-5 overflow-hidden">
          <TopBar />

          <p className="font-semibold mb-3 text-gray-800 text-lg">Pilih Produk</p>

          {/* 🔍 Input Pencarian */}
          <div className="flex justify-between items-center gap-3 mb-6 w-full">
            <div className="flex justify-between w-full">
              <input
                type="text"
                placeholder="Ketik nama produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 text-black rounded-l-md bg-gray-100 focus:outline-none w-full"
              />
              <button
                onClick={handleSearch}
                className="bg-[#5D33DA] hover:bg-[#4A28B5] text-white px-6 py-3 rounded-r-md"
              >
                Cari
              </button>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-50">
              Jenis Produk
            </button>
          </div>

          {/* Grid Produk */}
          <div className="grid grid-cols-5 gap-4 bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-4 rounded-xl overflow-y-auto h-125">
            {filteredProduk.length > 0 ? (
              filteredProduk.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openModal(item)}
                  className="cursor-pointer bg-white rounded-lg p-3 h-55 shadow-sm hover:shadow-md transition"
                >
                  <div className="bg-gray-200 rounded-md h-36 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-md" />
                  </div>
                  <div className="flex flex-col justify-between mt-3 text-sm">
                    <p className="font-bold text-black">{item.nama}</p>
                    <div className="flex justify-between">
                      <p className="text-black font-semibold">Stok: {item.stok}</p>
                      <p className="text-black">
                        Rp {item.harga.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-5 py-10">
                Produk tidak ditemukan
              </p>
            )}
          </div>

          {/* Modal */}
          {selectedProduct && (
            <div
              className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
              onClick={closeModal}
            >
              <div
                className="bg-white rounded-xl shadow-lg p-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-10">
                  <div className="flex flex-col justify-between">
                    <div className="bg-gray-200 rounded-md w-52 h-38 flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-md" />
                    </div>

                    <p className="font-bold text-lg text-black">
                      {selectedProduct.nama}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Stok: {selectedProduct.stok}</p>
                      <p className="text-gray-700 mb-4">
                        Rp {selectedProduct.harga.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-5 w-50">
                    <div className="flex items-center justify-center gap-4 mb-5">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-md text-lg font-bold"
                      >
                        -
                      </button>
                      <span className="text-2xl font-semibold text-black">
                        {quantity}
                      </span>
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
        </div>
      </div>

      <div className="w-full">
        <img
          src="/img/assets/footer.png"
          alt="footer"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
