"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function UbahPasswordPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  const [showLama, setShowLama] = useState(false);
  const [showBaru, setShowBaru] = useState(false);
  const [showKonfirmasi, setShowKonfirmasi] = useState(false);

  const handleSimpan = () => {
    // TODO: submit ke API
    console.log({
      passwordLama,
      passwordBaru,
      konfirmasiPassword,
    });
    router.back();
  };

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
        <h1 className="font-semibold text-lg">Ubah Password</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="flex flex-col justify-between bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <div>
            <h2 className="hidden lg:block text-lg font-semibold mb-6">
              Ubah Password
            </h2>

            <div className="space-y-6">

              {/* ===== PASSWORD LAMA ===== */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Password Lama
                </label>
                <div className="relative">
                  <input
                    type={showLama ? "text" : "password"}
                    value={passwordLama}
                    onChange={(e) => setPasswordLama(e.target.value)}
                    placeholder="Masukkan password lama"
                    className="bg-gray-100 w-full p-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLama(!showLama)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showLama ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* ===== PASSWORD BARU ===== */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Password Baru
                </label>
                <div className="relative">
                  <input
                    type={showBaru ? "text" : "password"}
                    value={passwordBaru}
                    onChange={(e) => setPasswordBaru(e.target.value)}
                    placeholder="Masukkan password baru"
                    className="bg-gray-100 w-full p-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowBaru(!showBaru)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showBaru ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* ===== KONFIRMASI PASSWORD ===== */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Konfirmasi Password Baru
                </label>
                <div className="relative">
                  <input
                    type={showKonfirmasi ? "text" : "password"}
                    value={konfirmasiPassword}
                    onChange={(e) => setKonfirmasiPassword(e.target.value)}
                    placeholder="Ulangi password baru"
                    className="bg-gray-100 w-full p-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowKonfirmasi(!showKonfirmasi)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showKonfirmasi ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Button Desktop */}
          <div className="hidden lg:flex justify-end mt-4">
            <button
              onClick={handleSimpan}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Ubah Password
            </button>
          </div>

        </div>
      </div>

      {/* Button Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-white shadow p-4">
        <button
          onClick={handleSimpan}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Ubah Password
        </button>
      </div>

    </div>
  );
}
