"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";

export default function PembayaranPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      
      {/* Konten Tengah */}
      <div className="flex flex-1 items-center justify-center px-4 md:px-6">
        
        {/* Div Putih Utama */}
        <div className="relative flex flex-col bg-white p-4 md:p-6 rounded-xl w-full max-w-[1200px] h-auto min-h-[600px] shadow-lg my-5">
          
          {/* TopBar */}
          <TopBar />

          {/* Judul & Form Pembayaran */}
          <div className="flex flex-col flex-1 mt-4 md:mt-2">
            <p className="font-semibold text-[#1D172F] text-lg md:text-xl mb-4">
              Pembayaran
            </p>

            <div className="flex flex-1 items-center justify-center">
              <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-6 md:p-8 rounded-lg w-full max-w-[350px] text-center">
                
                <h2 className="text-lg md:text-xl font-semibold mb-6 text-[#1D172F]">
                  Masukan Nominal
                </h2>

                <div className="flex justify-between mb-3 text-[#1D172F] font-semibold text-sm md:text-base">
                  <span>Total Belanja</span>
                  <span>Rp 120.000</span>
                </div>

                <input
                  type="text"
                  placeholder="Ketik di sini....."
                  className="text-black w-full px-4 py-3 bg-white rounded-md focus:outline-none focus:ring-grey-200 mb-5"
                />

                <button
                  onClick={() =>
                    router.push("/dashboard/modeKasir/detailPembelian2")
                  }
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
