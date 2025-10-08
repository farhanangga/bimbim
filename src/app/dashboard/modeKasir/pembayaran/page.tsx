"use client";
import TopBar from "@/components/TopBar";
import { useRouter } from "next/navigation";

export default function PilihMetodePembayaranPage() {
  const router = useRouter();

  // Data metode pembayaran
  const metodePembayaran = [
    {
      id: 1,
      nama: "BAYAR DI TEMPAT",
      icon: "/img/assets/bayar_ditempat.png",
      link: "/dashboard/modeKasir/inputUang", // ganti sesuai path gambarnya
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
      {/* Konten Tengah */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="flex flex-col bg-white p-6 rounded-xl w-[1200px] h-[700px] shadow-lg my-5">
          {/* TopBar */}
          <TopBar />

          {/* Judul */}
          <p className="font-semibold text-gray-800 mb-3">
            Pilih Metode Pembayaran
          </p>

          {/* Container Metode Pembayaran */}
          <div className="flex flex-1 bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 rounded-lg p-10 justify-center items-center">
            <div className="grid grid-cols-3 gap-12">
              {metodePembayaran.map((metode) => (
                <div
                  key={metode.id}
                  onClick={() => router.push(`${metode.link}`)}
                  className="flex flex-col items-center justify-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={metode.icon}
                    alt={metode.nama}
                    className="w-24 h-24 object-contain mb-6"
                  />
                  <p className="font-semibold text-gray-800 text-center">
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
