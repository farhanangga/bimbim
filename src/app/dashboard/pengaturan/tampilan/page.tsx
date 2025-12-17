"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, ArrowLeft, Check } from "lucide-react";

export default function TampilanPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

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
        <h1 className="font-semibold text-lg">Tampilan</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <h2 className="hidden lg:block text-lg font-semibold mb-6">
            Pengaturan Tampilan
          </h2>

          <div className="space-y-8">

            {/* TEMA */}
            <section>
              <h3 className="font-medium mb-3">Tema</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ThemeCard
                  id={1}
                  selected={selectedTheme}
                  onSelect={setSelectedTheme}
                  colors={["#6366F1", "#A5B4FC", "#E0E7FF"]}
                />
                <ThemeCard
                  id={2}
                  selected={selectedTheme}
                  onSelect={setSelectedTheme}
                  colors={["#10B981", "#6EE7B7", "#D1FAE5"]}
                />
                <ThemeCard
                  id={3}
                  selected={selectedTheme}
                  onSelect={setSelectedTheme}
                  colors={["#F97316", "#FDBA74", "#FFEDD5"]}
                />
              </div>
            </section>

            {/* MODE */}
            <section>
              <h3 className="font-medium mb-3">Mode</h3>

              <div className="p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    {darkMode ? "Dark Mode" : "Light Mode"}
                  </p>
                  <p className="text-sm text-gray-500">
                    Aktifkan mode gelap untuk 
                  </p>
                  <p className="text-sm text-gray-500">kenyamanan mata</p>
                </div>

                {/* Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 rounded-full relative transition ${
                    darkMode ? "bg-[#6366F1]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${
                      darkMode ? "right-0.5" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== */
/* COMPONENTS */
/* ===================== */

function ThemeCard({
  id,
  selected,
  onSelect,
  colors,
}: {
  id: number;
  selected: number;
  onSelect: (id: number) => void;
  colors: string[];
}) {
  return (
    <button
      onClick={() => onSelect(id)}
      className={`p-4 rounded-xl border transition relative ${
        selected === id
          ? "border-blue-600 ring-2 ring-blue-200"
          : "border-gray-200 hover:bg-gray-50"
      }`}
    >
      <div className="flex gap-2 mb-3">
        {colors.map((color, i) => (
          <div
            key={i}
            className="flex-1 h-10 rounded-lg"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <p className="text-sm font-medium text-left">
        Tema {id}
      </p>

      {selected === id && (
        <div className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-1">
          <Check size={14} />
        </div>
      )}
    </button>
  );
}
