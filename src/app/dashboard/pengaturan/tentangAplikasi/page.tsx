"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft, Info } from "lucide-react";

export default function TentangAplikasiPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-[#1D172F]">

      {/* Background */}
      <div className="fixed inset-0 bg-white lg:bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

      {/* Sidebar Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30 gap-3">
        <button onClick={() => router.back()}>
          <ArrowLeft size={26} />
        </button>
        <h1 className="font-semibold text-lg">Tentang Aplikasi</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <h2 className="hidden lg:block text-lg font-semibold mb-6">
            Tentang Aplikasi
          </h2>

          <div className="space-y-5">

            {/* VERSI APLIKASI */}
            <div className="p-4 rounded-xl border border-gray-200 flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Info size={18} className="text-gray-500 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">
                    Versi Aplikasi
                  </p>
                  <p className="font-medium">
                    v1.0.0
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
