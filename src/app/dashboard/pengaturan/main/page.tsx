"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import {
  Menu,
  User,
  Brush,
  Shield,
  Archive,
  HelpCircle,
  Info,
  LogOut
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-[#1D172F]">

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF] -z-10" />

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
      <div className="lg:hidden flex items-center p-4 bg-white sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-[#1D172F] focus:outline-none"
        >
          <Menu size={28} />
        </button>
        <h1 className="ml-4 font-semibold text-lg text-[#1D172F]">
          Pengaturan
        </h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-lg min-h-[660px] sm:mt-0">

          <h2 className="hidden lg:block text-lg font-semibold mb-6">Pengaturan</h2>

          <div className="space-y-4">

            {/* --------------------- LIST ITEM ---------------------- */}

            {/* Profil */}
            <div className="p-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <User size={22} className="text-[#1D172F]" />     
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-[15px] font-medium">
                        Profil
                    </span>
                    <span className="text-sm text-gray-500">
                    Email, Nama
                    </span>
                </div>
              </div>
            </div>

            {/* Tampilan */}
            <div className="p-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <Brush size={22} className="text-[#1D172F]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-[15px] font-medium">
                        Tampilan
                        </span>
                    <span className=" text-sm text-gray-500">
                    Tema, Mode
                    </span>
                </div>
              </div>
            </div>

            {/* Keamanan */}
            <div className="p-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <Shield size={22} className="text-[#1D172F]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-[15px] font-medium">
                        Keamanan
                    </span>
                    <span className="text-sm text-gray-500">
                    Keamanan, Verifikasi 2 Langkah, PIN
                    </span>
                </div>
              </div>
            </div>

            {/* Akun */}
            <div className="p-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <Archive size={22} className="text-[#1D172F]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-[15px] font-medium">
                    Akun
                    </span>
                    <span className="text-sm text-gray-500">
                    Data, Privasi
                    </span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="p-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <HelpCircle size={22} className="text-[#1D172F]" />  
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-[15px] font-medium">
                        FAQ
                    </span>
                    <span className=" text-sm text-gray-500">
                        Pertanyaan Umum
                    </span>
                </div>
              </div>
            </div>

            {/* Tentang Aplikasi */}
            <div className="p-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <Info size={22} className="text-[#1D172F] w-6 h-6" />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                    <span className="text-[15px] font-medium">
                        Tentang Aplikasi
                    </span>
                    <span className=" text-sm text-gray-500">
                        Versi, Informasi
                    </span>
                </div>
              </div>
            </div>

            {/* LOGOUT */}
            <div
              className="p-3 rounded-xl hover:bg-gray-100 transition-all cursor-pointer"
              onClick={() => router.push("/")}
            >
              <div className="flex items-center gap-4">
                <LogOut size={22} className="text-red-500" />
                <span className="text-[15px] font-medium text-red-500">
                  Log Out
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
