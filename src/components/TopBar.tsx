"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setIsFullscreen(!!document.fullscreenElement);
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Hilangkan trailing slash agar perbandingan aman
  const cleanPath = pathname?.replace(/\/$/, "");
  const hideNavButtons = cleanPath === "/dashboard/modeKasir/main";

  // Fungsi back dengan pengkondisian khusus
  const handleBack = () => {
    if (cleanPath === "/dashboard/modeKasir/detailPembelian1") {
      router.push("/dashboard/modeKasir/inputNama");
    } else {
      router.back();
    }
  };

  return (
    <div className="flex justify-between items-center w-full mb-4">
      {/* Kiri: Tombol Back & Home */}
      {!hideNavButtons ? (
        <div className="flex gap-3">
          {/* Back */}
          <button
            onClick={handleBack}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Home */}
          <button
            onClick={() => router.push("/dashboard/modeKasir/main")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <HomeIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      ) : (
        <div /> // spacer agar tombol fullscreen tetap di kanan
      )}

      {/* Kanan: Tombol Fullscreen */}
      <div>
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          {isFullscreen ? (
            <ArrowsPointingInIcon className="h-6 w-6 text-gray-600" />
          ) : (
            <ArrowsPointingOutIcon className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
}
