"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";

export default function PembayaranPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      
      {/* Konten Tengah */}
      <div className="flex flex-1 items-center justify-center px-6">
        
        {/* Div Putih Utama */}
        <div className="relative flex flex-col bg-white p-6 rounded-xl w-[1200px] h-[700px] shadow-lg my-5">
          
          {/* TopBar */}
          <TopBar />

          {/* Judul & Form Pembayaran */}
          <div className="flex flex-col flex-1">
            <p className="font-semibold text-[#1D172F] text-lg">Pembayaran</p>

            <div className="flex flex-1 items-center justify-center">
              <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-8 rounded-lg w-[350px] text-center">
                <h2 className="text-lg font-semibold mb-6 text-[#1D172F]">
                  Masukan Nominal
                </h2>

                <div className="flex justify-between mb-3 text-[#1D172F] font-semibold">
                  <span>Total Belanja</span>
                  <span>Rp 120.000</span>
                </div>

                <input
                  type="text"
                  placeholder="Ketik di sini....."
                  className="text-black w-full px-4 py-3 bg-white rounded-md focus:outline-none focus:ring-grey-200 mb-5"
                />

                <button
                  onClick={() => router.push("/dashboard/modeKasir/detailPembelian2")}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md"
                >
                  Selanjutnya
                </button>
              </div>
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
