"use client";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import TopBar from "@/components/TopBar";

export default function KasirPage() {
  const router = useRouter();

  const transaksi = [
    { nama: "FARHAN ANGGA", nominal: "Rp 100.000" },
    { nama: "RAFA GYIZA RASYIEKA", nominal: "Rp 80.000" },
    { nama: "DAVIN GHANI", nominal: "Rp 50.000" },
    { nama: "MUHAMMAD INDRA", nominal: "Rp 20.000" },
    { nama: "KUSUMA", nominal: "Rp 30.000" },
    { nama: "NARUTO", nominal: "Rp 25.000" },
    { nama: "KUSNAEDI", nominal: "Rp 120.000" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">

      {/* Konten */}
      <div className="flex flex-1 items-center justify-center px-4 md:px-6">
        {/* Div Putih Utama */}
        <div className="relative flex p-4 md:p-6 flex-col bg-white rounded-xl w-full max-w-[1200px] min-h-[600px] md:h-[700px] shadow-lg my-5">

          {/* TopBar */}
          <TopBar />

          <div className="flex flex-1 px-1 flex-col md:flex-row">

            {/* Card Transaksi */}
            <div className="flex-1 bg-white rounded-xl md:mx-6 h-max flex flex-col mt-4 md:mt-0">
              <h2 className="text-lg font-semibold mb-4 text-black">
                Transaksi Terakhir
              </h2>

              <div className="flex-1 overflow-y-auto flex flex-col gap-3 custom-scrollbar">
                {transaksi.map((t, i) => (
                  <div
                    key={i}
                    className="w-full flex justify-between items-center bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-lg px-4 py-3"
                  >
                    <div>
                      <p className="font-semibold text-gray-700">{t.nama}</p>
                      <p className="text-sm text-gray-600">{t.nominal}</p>
                    </div>
                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full md:w-64 h-max md:my-auto bg-gray-100 rounded-xl p-6 md:mx-6 flex flex-col justify-center gap-4 mt-6 md:mt-0">
              <button
                onClick={() => router.push("/dashboard/modeKasir/inputNama")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow"
              >
                Tambah Transaksi
              </button>
              <button
                onClick={() => router.push("/dashboard/main")}
                className="bg-[#5D33DA] hover:bg-[#4A28B5] text-white font-semibold py-3 rounded-lg shadow"
              >
                Kembali ke Dashboard
              </button>
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
