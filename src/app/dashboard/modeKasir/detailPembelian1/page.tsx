"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DetailPembelianPage() {
  const router = useRouter();

  const [keranjang] = useState([
    { id: 1, nama: "ES TEH MANIS", harga: 5000, jumlah: 1 },
    { id: 2, nama: "NASI PADANG", harga: 15000, jumlah: 2 },
    { id: 3, nama: "NASI AYAM BAKAR", harga: 15000, jumlah: 1 },
    { id: 4, nama: "NASI GORENG", harga: 12000, jumlah: 1 },
    { id: 5, nama: "AIR MINERAL", harga: 4000, jumlah: 1 },
    { id: 6, nama: "SATE AYAM", harga: 18000, jumlah: 1 },
    { id: 7, nama: "SATE AYAM", harga: 18000, jumlah: 1 },
    { id: 8, nama: "SATE AYAM", harga: 18000, jumlah: 1 },
  ]);

  const totalJumlah = keranjang.reduce((s, i) => s + i.jumlah, 0);
  const totalHarga = keranjang.reduce((s, i) => s + i.harga * i.jumlah, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      
      {/* Konten Tengah */}
      <div className="flex flex-1 items-center justify-center px-4 md:px-6">
        <div
          className="
            flex flex-col bg-white p-4 md:p-6 rounded-xl 
            w-full max-w-[1200px] 
            min-h-[600px] md:min-h-[700px]
            shadow-lg my-5 pb-10
          "
        >
          <TopBar />

          <div className="flex flex-col md:flex-row flex-1 mt-3 gap-4 md:gap-6">
            
            {/* Detail Pembelian */}
            <div
              className="
                flex flex-col justify-between 
                bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 
                rounded-lg 
                p-5 md:p-6 
                w-full md:w-[360px]
              "
            >
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Detail Pembelian
                </h3>

                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Nama</span>
                  <span className="text-gray-900">Farhan</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Jumlah</span>
                  <span className="text-gray-900">{totalJumlah}</span>
                </div>

                <div className="flex justify-between mb-4 md:mb-6">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-gray-900">
                    Rp {totalHarga.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <button
                  onClick={() =>
                    router.push("/dashboard/modeKasir/pilihProduk")
                  }
                  className="w-full bg-[#5D33DA] hover:bg-[#4A28B5] text-white py-3 rounded-md mb-4"
                >
                  Pilih Produk
                </button>

                <button
                  onClick={() => router.push("/dashboard/modeKasir/pembayaran")}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md"
                >
                  Selanjutnya
                </button>
              </div>
            </div>

            {/* Keranjang */}
            <div
              className="
                flex-1 
                bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 
                rounded-lg 
                py-5 md:py-6 px-4 md:pl-6 
                flex flex-col
              "
            >
              {keranjang.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center">
                  <p className="text-gray-800 font-semibold">
                    Keranjang Masih Kosong
                  </p>
                </div>
              ) : (
                <div className="flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    Detail Barang yang dibeli
                  </h3>

                  <div className="flex flex-col flex-1 overflow-y-auto space-y-3 pr-2 md:pr-6 custom-scrollbar">
                    {keranjang.map((item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        className="
                          flex items-center justify-between 
                          bg-white/70 rounded-lg p-3 md:p-4 
                          shadow-sm
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              bg-blue-200 text-blue-900 font-semibold 
                              w-6 h-6 flex items-center justify-center 
                              rounded-full
                            "
                          >
                            {index + 1}
                          </div>

                          <div>
                            <p className="font-semibold text-gray-800">
                              {item.nama}
                            </p>
                            <p className="text-gray-600 text-sm">
                              Rp {item.harga.toLocaleString("id-ID")} ×{" "}
                              {item.jumlah}
                            </p>
                          </div>
                        </div>

                        <p className="font-semibold text-gray-900 text-sm md:text-base">
                          Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-5">
        <img 
          src="/img/assets/footer.png" 
          alt="footer" 
          className="w-full h-auto pointer-events-none select-none"
        />
      </footer>
    </div>
  );
}
