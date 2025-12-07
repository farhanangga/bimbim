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

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

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

  const filteredProduk = produkList.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase());
    const matchJenis =
      selectedJenis === "Default"
        ? true
        : item.jenis.toLowerCase() === selectedJenis.toLowerCase();

    return matchSearch && matchJenis;
  });
  
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      <div className="flex flex-1 items-center justify-center px-3 md:px-6">
        <div className="relative flex flex-col bg-white p-4 md:p-6 rounded-xl w-full max-w-[1200px] h-auto md:h-[700px] shadow-lg my-5 overflow-hidden">

          <TopBar />

          <p className="font-semibold mb-3 text-gray-800 text-lg">Pilih Produk</p>

          {/* 🔍 Search */}
          <div className="bg-gradient-to-br from-[#E9EDFF] to-[#D4CFFE] p-4 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">

              {/* SEARCH */}
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Ketik nama produk..."
                  className="w-10 lg:w-auto flex-1 px-4 py-3 text-black rounded-l-md bg-gray-100"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button className="bg-[#5D33DA] hover:bg-[#4A28B5] text-white px-6 py-3 rounded-r-md flex items-center gap-2">
                  <Search size={18} /> Cari
                </button>
              </div>

              {/* FILTER JENIS */}
              <button
                onClick={() => setShowJenisModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full lg:w-50 flex items-center justify-center"
              >
                {selectedJenis} {ARROW_SVG}
              </button>

            </div>
          </div>

          {/* Grid Produk – RESPONSIVE */}
          <div className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-4 
            bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 
            p-4 
            rounded-xl 
            overflow-y-auto 
            max-h-[70vh] md:h-125
          ">
            {filteredProduk.length > 0 ? (
              filteredProduk.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openModal(item)}
                  className="cursor-pointer bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition h-auto"
                >
                  <div className="bg-gray-200 rounded-md h-28 md:h-36 flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md" />
                  </div>

                  <div className="flex flex-col justify-between mt-3 text-sm">
                    <p className="font-bold text-black leading-tight">{item.nama}</p>
                    <div className="flex justify-between text-xs md:text-sm">
                      <p className="text-black font-semibold">Stok: {item.stok}</p>
                      <p className="text-black">Rp {item.harga.toLocaleString("id-ID")}</p>
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

          {/* Modal RESPONSIVE */}
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

                  {/* Left */}
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

                  {/* Right */}
                  <div className="flex flex-col justify-between gap-5 w-full md:w-52">
                    <div className="flex items-center justify-center gap-4">
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
