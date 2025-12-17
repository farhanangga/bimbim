"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import {
  ArrowLeft,
  HelpCircle,
  MessageCircleQuestion,
  ChevronDown,
} from "lucide-react";

export default function FAQPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Bagaimana cara mengubah password?",
      answer:
        "Kamu dapat mengubah password melalui menu Pengaturan > Keamanan, lalu pilih Ubah Password.",
    },
    {
      question: "Bagaimana cara upgrade paket?",
      answer:
        "Masuk ke menu Pengaturan > Akun, kemudian tekan tombol Upgrade pada bagian Jenis Paket.",
    },
    {
      question: "Apakah data saya aman?",
      answer:
        "Kami menggunakan sistem keamanan berlapis untuk melindungi data dan informasi akun kamu.",
    },
  ];

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
        <h1 className="font-semibold text-lg">FAQ & Bantuan</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <h2 className="hidden lg:block text-lg font-semibold mb-6">
            Bantuan
          </h2>

          <div className="space-y-4">

            {/* FAQ LIST */}
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-gray-500" />
                    <p className="font-medium text-left">
                      {faq.question}
                    </p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}

            {/* AJUKAN PERTANYAAN */}
            <div className="mt-8 p-5 rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-between">
              <div className="flex items-start gap-3">
                <MessageCircleQuestion
                  size={20}
                  className="text-gray-500 mt-1"
                />
                <div>
                  <p className="font-medium">
                    Tidak menemukan jawaban?
                  </p>
                  <p className="text-sm text-gray-500">
                    Ajukan pertanyaan langsung ke tim kami
                  </p>
                </div>
              </div>

              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition">
                Ajukan Pertanyaan
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
