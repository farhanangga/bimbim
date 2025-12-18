"use client";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";

export default function KonfirmasiPinPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pin1 = useRef<HTMLInputElement>(null);
  const pin2 = useRef<HTMLInputElement>(null);
  const pin3 = useRef<HTMLInputElement>(null);
  const pin4 = useRef<HTMLInputElement>(null);
  const pin5 = useRef<HTMLInputElement>(null);
  const pin6 = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextRef?: React.RefObject<HTMLInputElement>
  ) => {
    if (e.target.value.length === 1 && nextRef?.current) {
      nextRef.current.focus();
    }
  };

  const handleSimpan = () => {
    // TODO: validasi & simpan PIN
    console.log("PIN dikonfirmasi");
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

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow sticky top-0 z-30 gap-3">
        <button onClick={() => router.back()}>
          <ArrowLeft size={26} />
        </button>
        <h1 className="font-semibold text-lg">Konfirmasi PIN</h1>
      </div>

      {/* MAIN */}
      <div className="lg:ml-64 lg:p-6">
        <div className="flex flex-col justify-between bg-white p-6 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <div>
            <h2 className="hidden lg:block text-lg font-semibold mb-4">
              Konfirmasi PIN
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Masukkan kembali 6 digit PIN Anda
            </p>

            {/* PIN INPUT */}
            <div className="flex justify-center gap-3">
              <input ref={pin1} maxLength={1} inputMode="numeric"
                onChange={(e) => handleChange(e, pin2)}
                className="pin-box" />
              <input ref={pin2} maxLength={1} inputMode="numeric"
                onChange={(e) => handleChange(e, pin3)}
                className="pin-box" />
              <input ref={pin3} maxLength={1} inputMode="numeric"
                onChange={(e) => handleChange(e, pin4)}
                className="pin-box" />
              <input ref={pin4} maxLength={1} inputMode="numeric"
                onChange={(e) => handleChange(e, pin5)}
                className="pin-box" />
              <input ref={pin5} maxLength={1} inputMode="numeric"
                onChange={(e) => handleChange(e, pin6)}
                className="pin-box" />
              <input ref={pin6} maxLength={1} inputMode="numeric"
                className="pin-box" />
            </div>
          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:flex justify-end">
            <button
              onClick={handleSimpan}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Simpan PIN
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE BUTTON */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow p-4">
        <button
          onClick={handleSimpan}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
        >
          Simpan PIN
        </button>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .pin-box {
          width: 48px;
          height: 56px;
          text-align: center;
          font-size: 24px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          background: #f3f4f6;
        }
        .pin-box:focus {
          outline: none;
          border-color: #2563eb;
          background: white;
        }
      `}</style>
    </div>
  );
}
