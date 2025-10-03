"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  ArrowsPointingOutIcon, 
  ArrowsPointingInIcon, 
  HomeIcon 
} from "@heroicons/react/24/solid"; 

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // sinkronisasi saat pertama kali mount
    setIsFullscreen(!!document.fullscreenElement);

    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
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

  const hideNavButtons = pathname === "/dashboard/modeKasir/main";

  return (
    <>
      {/* Tombol Kembali & Home */}
      {!hideNavButtons && (
        <div className="absolute top-6 left-6 flex gap-3">
          {/* Back */}
          <button 
            onClick={() => router.back()} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Home */}
          <button 
            onClick={() => router.push("/dashboard/modeKasir/main")} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <HomeIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      )}

      {/* Fullscreen */}
      <button 
        onClick={toggleFullscreen} 
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
      >
        {isFullscreen ? (
          <ArrowsPointingInIcon className="h-6 w-6 text-gray-600" />
        ) : (
          <ArrowsPointingOutIcon className="h-6 w-6 text-gray-600" />
        )}
      </button>
    </>
  );
}
