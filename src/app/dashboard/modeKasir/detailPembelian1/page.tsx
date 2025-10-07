"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DetailPembelianPage() {
  const router = useRouter();

  // Data produk yang dipilih
  const [keranjang] = useState([
    { id: 1, nama: "ES TEH MANIS", harga: 5000, jumlah: 1 },
    { id: 2, nama: "NASI PADANG", harga: 15000, jumlah: 2 },
    { id: 3, nama: "NASI AYAM BAKAR", harga: 15000, jumlah: 1 },
    { id: 4, nama: "NASI GORENG", harga: 12000, jumlah: 1 },
    { id: 5, nama: "AIR MINERAL", harga: 4000, jumlah: 1 },
    { id: 6, nama: "SATE AYAM", harga: 18000, jumlah: 1 },
    { id: 6, nama: "SATE AYAM", harga: 18000, jumlah: 1 },
    { id: 6, nama: "SATE AYAM", harga: 18000, jumlah: 1 },
  ]);

  const totalJumlah = keranjang.reduce((sum, item) => sum + item.jumlah, 0);
  const totalHarga = keranjang.reduce(
    (sum, item) => sum + item.harga * item.jumlah,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      {/* Konten Tengah */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="flex flex-col bg-white p-6 rounded-xl w-[1200px] h-[700px] shadow-lg my-5">
          {/* TopBar */}
          <TopBar />

          {/* Isi Konten */}
          <div className="flex flex-row flex-1 mt-3 gap-6">
            {/* Detail Pembelian */}
            <div className="flex flex-col justify-between w-[300px] bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-lg p-6">
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
                <div className="flex justify-between mb-6">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-gray-900">
                    Rp {totalHarga.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <button
                  onClick={() => router.push("/dashboard/modeKasir/pilihProduk")}
                  className="w-full bg-[#5D33DA] hover:bg-[#4A28B5] text-white py-3 rounded-md mb-5"
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
            <div className="flex-1 bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-lg py-6 pl-6 flex flex-col h-146">
              {keranjang.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center">
                  <div className="flex justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10-9l2 9m-6 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    Keranjang Masih Kosong
                  </p>
                </div>
              ) : (
                <div className="flex flex-col h-134 ">
                    <h3 className="font-semibold text-gray-800 mb-2 mb-5">
                        Detail Barang yang dibeli
                    </h3>
                    <div className="flex flex-col flex-1 overflow-y-auto space-y-3 pr-6 custom-scrollbar">
                    

                    {keranjang.map((item, index) => (
                        <div
                        key={`${item.id}-${index}`}
                        className="flex items-center justify-between bg-white/70 rounded-lg p-4 shadow-sm"
                        >
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-200 text-blue-900 font-semibold w-6 h-6 flex items-center justify-center rounded-full ">
                            {index + 1}
                            </div>
                            <div>
                            <p className="font-semibold text-gray-800  leading-tight">
                                {item.nama}
                            </p>
                            <p className="text-gray-600 ">
                                Rp {item.harga.toLocaleString("id-ID")} ×{" "}
                                {item.jumlah}
                            </p>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-900 ">
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
