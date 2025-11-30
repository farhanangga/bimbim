"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";

export default function PilihMetodePembayaranPage() {
  const router = useRouter();

  const metodePembayaran = [
    {
      id: 1,
      nama: "BAYAR DI TEMPAT",
      icon: "/img/assets/bayar_ditempat.png",
      link: "/dashboard/modeKasir/inputUang",
    },
    {
      id: 2,
      nama: "QRIS",
      icon: "/img/assets/qris.png",
      link: "/dashboard/modeKasir/inputQris",
    },
    {
      id: 3,
      nama: "DEBIT",
      icon: "/img/assets/debit.png",
      link: "/dashboard/modeKasir/inputUang",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-3 md:px-6">
        <div className="flex flex-col bg-white p-4 md:p-6 rounded-xl w-full max-w-[1200px] h-auto md:h-[700px] shadow-lg my-5">
          
          <TopBar />

          <p className="font-semibold text-gray-800 mb-3 text-lg">
            Pilih Metode Pembayaran
          </p>

          {/* Payment Method Container */}
          <div className="flex flex-1 bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-lg p-5 md:p-10 justify-center items-center">
            
            {/* GRID RESPONSIVE */}
            <div className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              gap-6 
              md:gap-12
              w-full
              max-w-[900px]
            ">
              {metodePembayaran.map((metode) => (
                <div
                  key={metode.id}
                  onClick={() => router.push(metode.link)}
                  className="flex flex-col items-center justify-center bg-white rounded-xl px-8 py-6 md:px-8 md:py-8 shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={metode.icon}
                    alt={metode.nama}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 md:mb-6"
                  />
                  <p className="font-semibold text-gray-800 text-center text-sm md:text-base">
                    {metode.nama}
                  </p>
                </div>
              ))}
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
