"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";

export default function AjukanPertanyaanPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [judul, setJudul] = useState("");
  const [pertanyaan, setPertanyaan] = useState("");

  const handleKirim = () => {
    // TODO: kirim pertanyaan ke API
    console.log("Judul:", judul);
    console.log("Pertanyaan:", pertanyaan);
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
        <h1 className="font-semibold text-lg">Ajukan Pertanyaan</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="flex flex-col justify-between bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <div>
            <h2 className="hidden lg:block text-lg font-semibold mb-6">
              Ajukan Pertanyaan
            </h2>

            <div className="space-y-6">

              {/* Judul */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Judul Pertanyaan
                </label>
                <input
                  type="text"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Contoh: Tidak bisa login akun"
                  className="bg-gray-100 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Pertanyaan */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Detail Pertanyaan
                </label>
                <textarea
                  value={pertanyaan}
                  onChange={(e) => setPertanyaan(e.target.value)}
                  placeholder="Jelaskan masalah atau pertanyaan Anda secara detail"
                  rows={5}
                  className="bg-gray-100 w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Info */}
              <p className="text-xs text-gray-400">
                Tim kami akan meninjau pertanyaan Anda dan memberikan jawaban
                melalui email atau notifikasi aplikasi.
              </p>

            </div>
          </div>

          {/* Button Desktop */}
          <div className="hidden lg:flex justify-end mt-4">
            <button
              onClick={handleKirim}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Kirim Pertanyaan
            </button>
          </div>

        </div>
      </div>

      {/* Button Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-white shadow p-4">
        <button
          onClick={handleKirim}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Kirim Pertanyaan
        </button>
      </div>

    </div>
  );
}
