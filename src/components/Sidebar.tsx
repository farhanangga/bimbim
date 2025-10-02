"use client";

import { useRouter } from "next/navigation";
import { FaChartBar, FaBox, FaFileAlt, FaCog, FaShoppingCart } from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 h-full w-64 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-blue-800 p-6">Bimbim</h1>
        <ul className="space-y-2 px-4">
          <li
            onClick={() => router.push("/dashboard/main")}
            className="flex items-center gap-3 p-3 rounded-lg bg-white cursor-pointer"
          >
            <FaChartBar /> Dashboard
          </li>
          <li
            onClick={() => router.push("/transaksi")}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white cursor-pointer"
          >
            <FaShoppingCart /> Transaksi
          </li>
          <li
            onClick={() => router.push("/produk")}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white cursor-pointer"
          >
            <FaBox /> Produk
          </li>
          <li
            onClick={() => router.push("/laporan")}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white cursor-pointer"
          >
            <FaFileAlt /> Laporan
          </li>
          <li
            onClick={() => router.push("/pengaturan")}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white cursor-pointer"
          >
            <FaCog /> Pengaturan
          </li>
        </ul>
      </div>

      {/* Bottom Sidebar */}
      <div className="px-4 py-6">
        <div className="bg-white rounded-2xl p-4 space-y-4 shadow">
          {/* Upgrade Paket */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/img/assets/bg-berlian.png"
              alt="upgrade"
              className="w-full h-28 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <span className="absolute bottom-2 left-2 text-white font-medium text-sm">
              Upgrade Paket
            </span>
          </div>

          {/* Mode Kasir */}
          <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold">
            MODE KASIR
          </button>

          {/* Info Plan */}
          <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-3 rounded-lg">
            <p className="text-sm font-semibold text-[#1D172F]">Sumber Jaya</p>
            <p className="text-xs text-[#1D172F]/70">Free Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
