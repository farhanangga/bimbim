"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft, Pencil, Lock } from "lucide-react";

export default function KeamananPage() {
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
        <h1 className="font-semibold text-lg">Keamanan</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <h2 className="hidden lg:block text-lg font-semibold mb-6">
            Keamanan Akun
          </h2>

          <div className="space-y-5">

            {/* ===== EMAIL ===== */}
            <div className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-gray-500">
                    <Lock size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">farhan@email.com</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Digunakan untuk login dan notifikasi
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    router.push("/dashboard/pengaturan/keamanan/ubahEmail")
                  }
                  className="flex items-center gap-2 text-sm text-blue-600"
                >
                  <Pencil size={16} />
                  Ubah
                </button>
              </div>
            </div>

            {/* ===== PASSWORD ===== */}
            <div className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-gray-500">
                    <Lock size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Password</p>
                    <p className="font-medium">••••••••</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Ubah password secara berkala untuk keamanan
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    router.push("/dashboard/pengaturan/keamanan/ubahPassword")
                  }
                  className="flex items-center gap-2 text-sm text-blue-600"
                >
                  <Pencil size={16} />
                  Ubah
                </button>
              </div>
            </div>

            {/* ===== PIN KEAMANAN ===== */}
            <div className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-gray-500">
                    <Lock size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">PIN Keamanan</p>
                    <p className="font-medium">Belum diatur</p>
                    <p className="text-xs text-gray-400 mt-1">
                      PIN digunakan untuk verifikasi tambahan
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    router.push("/dashboard/pengaturan/keamanan/tambahPin")
                  }
                  className="flex items-center gap-2 text-sm text-blue-600"
                >
                  <Pencil size={16} />
                  Atur
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
