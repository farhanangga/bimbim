"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function DetailPembelianPage() {
  const router = useRouter();

  const [keranjang] = useState([
    { id: 1, nama: "ES TEH MANIS", harga: 5000, jumlah: 1 },
    { id: 2, nama: "NASI PADANG", harga: 15000, jumlah: 2 },
    { id: 3, nama: "NASI AYAM BAKAR", harga: 15000, jumlah: 1 },
    { id: 4, nama: "NASI GORENG", harga: 12000, jumlah: 1 },
    { id: 5, nama: "AIR MINERAL", harga: 4000, jumlah: 1 },
  ]);

  const [showModalStruk, setShowModalStruk] = useState(false);
  const [showModalSelesai, setShowModalSelesai] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      showModalStruk || showModalSelesai ? "hidden" : "auto";
  }, [showModalStruk, showModalSelesai]);

  const totalJumlah = keranjang.reduce((sum, item) => sum + item.jumlah, 0);
  const totalHarga = keranjang.reduce(
    (sum, item) => sum + item.harga * item.jumlah,
    0
  );

  const dataPembelian = {
    nama: "Farhan",
    tanggal: "11/10/2025",
    metode: "Bayar Ditempat",
    uangMasuk: 250000,
    total: 250000,
    kembalian: 0,
    status: "Berhasil",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      
      {/* Konten Tengah */}
      <div className="flex flex-1 items-center justify-center px-3 sm:px-6">
        <div className="flex flex-col bg-white p-4 sm:p-6 rounded-xl w-full max-w-[1200px] h-auto min-h-[650px] shadow-lg my-5">

          <TopBar />

          {/* Isi Konten */}
          <div className="flex flex-col md:flex-row flex-1 mt-4 gap-4 md:gap-6">

            {/* Detail Pembelian */}
            <div className="text-gray-800 flex flex-col justify-between w-full md:w-[300px] bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-lg p-4 sm:p-6">

              <div className="space-y-2 text-sm sm:text-base">
                <h3 className="font-semibold text-gray-800 mb-4 text-base sm:text-lg">
                  Detail Pembelian
                </h3>

                <div className="flex justify-between">
                  <span className="font-semibold">Nama</span>
                  <span>{dataPembelian.nama}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Tanggal Transaksi</span>
                  <span>{dataPembelian.tanggal}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Jumlah</span>
                  <span>{totalJumlah}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Pembayaran</span>
                  <span>{dataPembelian.metode}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span>Rp {dataPembelian.total.toLocaleString("id-ID")}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Uang Masuk</span>
                  <span>Rp {dataPembelian.uangMasuk.toLocaleString("id-ID")}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Kembalian</span>
                  <span>Rp {dataPembelian.kembalian.toLocaleString("id-ID")}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Status</span>
                  <span>{dataPembelian.status}</span>
                </div>
              </div>

              {/* Tombol */}
              <div className="flex flex-col mt-6 space-y-3">
                <button
                  onClick={() => setShowModalStruk(true)}
                  className="w-full bg-[#3575FF] hover:bg-[#245CE5] text-white py-3 rounded-md text-sm sm:text-base"
                >
                  Cetak Struk
                </button>

                <button
                  onClick={() => setShowModalSelesai(true)}
                  className="w-full bg-gradient-to-r from-[#5D33DA] to-[#8F3AFF] hover:opacity-90 text-white py-3 rounded-md text-sm sm:text-base"
                >
                  Selesai
                </button>
              </div>
            </div>

            {/* Keranjang */}
            <div className="flex-1 bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-lg py-4 sm:py-6 pl-4 sm:pl-6 flex flex-col">

              <h3 className="font-semibold text-gray-800 mb-4 sm:mb-5 text-base sm:text-lg">
                Detail Barang yang dibeli
              </h3>

              <div className="flex flex-col flex-1 overflow-y-auto space-y-3 pr-3 sm:pr-6 custom-scrollbar">

                {keranjang.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex items-center justify-between bg-white/70 rounded-lg p-3 sm:p-4 shadow-sm text-sm sm:text-base"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-200 text-blue-900 font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 leading-tight">
                          {item.nama}
                        </p>
                        <p className="text-gray-600">
                          Rp {item.harga.toLocaleString("id-ID")} × {item.jumlah}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-900">
                      Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Modal STRUK */}
      {showModalStruk && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-[400px] p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 sm:w-20 sm:h-20 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Struk Berhasil Dicetak
            </h2>
            <button
              onClick={() => setShowModalStruk(false)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              Kembali
            </button>
          </div>
        </div>
      )}

      {/* Modal SELESAI */}
      {showModalSelesai && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-[400px] p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 sm:w-20 sm:h-20 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Transaksi Selesai
            </h2>
            <button
              onClick={() => router.push("/dashboard/modeKasir/main")}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
            >
              Selesai
            </button>
          </div>
        </div>
      )}

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
