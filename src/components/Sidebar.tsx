"use client";

import { useRouter, usePathname } from "next/navigation";
import { FaChartBar, FaBox, FaFileAlt, FaCog, FaShoppingCart } from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname() || ""; // pastikan bukan null

  console.log("📌 Pathname aktif sekarang:", pathname);

  // fungsi helper untuk style aktif
 const getMenuClass = (path: string) => {
    const base = "flex items-center gap-3 p-3 rounded-lg cursor-pointer";

    const active = `
      bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30
      lg:bg-white lg:bg-none
      font-semibold text-[#1D172F] shadow
    `;

    const inactive = `
      hover:bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30
      lg:hover:bg-white lg:hover:bg-none
      text-[#1D172F]
    `;

    const isActive = pathname.startsWith(path);
    return `${base} ${isActive ? active : inactive}`;
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-blue-800 p-6">Bimbim</h1>
        <ul className="space-y-2 px-4">
          <li
            onClick={() => router.push("/dashboard/main")}
            className={getMenuClass("/dashboard/main")}
          >
            <FaChartBar /> Dashboard
          </li>
          <li
            onClick={() => router.push("/dashboard/transaksi/main")}
            className={getMenuClass("/dashboard/transaksi/main")}
          >
            <FaShoppingCart /> Transaksi
          </li>
          <li
            onClick={() => router.push("/dashboard/produk/main")}
            className={getMenuClass("/dashboard/produk/main")}
          >
            <FaBox /> Produk
          </li>
          <li
            onClick={() => router.push("/dashboard/laporan/main")}
            className={getMenuClass("/dashboard/laporan/main")}
          >
            <FaFileAlt /> Laporan
          </li>
          <li
            onClick={() => router.push("/dashboard/pengaturan/main")}
            className={getMenuClass("/dashboard/pengaturan/main")}
          >
            <FaCog /> Pengaturan
          </li>
        </ul>
      </div>

      {/* Bottom Sidebar */}
      <div className="px-4 py-6">
        <div className="bg-white rounded-2xl p-4 space-y-4 shadow">
          {/* Upgrade Paket */}
          <div
            onClick={() => router.push("/dashboard/pricing")}
            className="relative rounded-lg overflow-hidden group cursor-pointer 
            transition-all duration-300 transform"
          >

            {/* IMAGE */}
            <img
              src="/img/assets/bg-berlian.png"
              alt="upgrade"
              className="w-full h-28 object-cover transition-transform duration-500 
              group-hover:scale-110"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent
            transition-opacity duration-300 group-hover:opacity-80"></div>

            {/* TEXT */}
            <span className="absolute bottom-2 left-2 text-white font-medium text-sm 
            transition-all duration-300 group-hover:translate-y-[-2px]">
              Upgrade Paket
            </span>

            {/* GLOW HOVER BORDER */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 pointer-events-none
            ring-2 ring-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            </div>
          </div>


          {/* Mode Kasir */}
          <button onClick={() => router.push("/dashboard/modeKasir/main")} className="text-sm w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-800">
            MODE KASIR
          </button>

          {/* Info Plan */}
          {/* <div className="bg-gradient-to-r from-[#5D3ADA]/30 to-[#2B68FF]/30 p-3 rounded-lg">
            <p className="text-sm font-semibold text-[#1D172F]">Sumber Jaya</p>
            <p className="text-xs text-[#1D172F]/70">Free Plan</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
