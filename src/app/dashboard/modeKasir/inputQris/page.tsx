"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";

export default function PembayaranQRPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      
      {/* Konten Tengah */}
      <div className="flex flex-1 items-center justify-center px-6">
        
        {/* Div Putih Utama */}
        <div className="relative flex flex-col bg-white p-6 rounded-xl w-[1200px] h-[700px] shadow-lg my-5">
          
          {/* TopBar */}
          <TopBar />

          {/* Judul & QR Code */}
          <div className="flex flex-col flex-1 ">
            <p className="font-semibold text-[#1D172F] text-lg">Pembayaran</p>

            <div className="flex flex-1 items-center justify-center">
              <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-8 rounded-lg w-[350px] text-center">
                {/* Total */}
                <div className="flex justify-between mb-5 text-[#1D172F] font-semibold">
                  <span>Total Pembelian</span>
                  <span>Rp 120.000</span>
                </div>

                {/* QR Code */}
                <div className="bg-white p-4 rounded-md inline-block">
                  <img
                    src="/img/assets/qrcode.png" // ganti dengan path gambar QR yang kamu punya
                    alt="QR Code Pembayaran"
                    className="w-[220px] h-[220px] mx-auto"
                  />
                </div>
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
