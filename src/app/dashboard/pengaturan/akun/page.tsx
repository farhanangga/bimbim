"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  ShieldCheck,
  Crown,
} from "lucide-react";

export default function AkunPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusAktif, setStatusAktif] = useState(true);

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
        <h1 className="font-semibold text-lg">Akun</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <h2 className="hidden lg:block text-lg font-semibold mb-6">
            Informasi Akun
          </h2>

          <div className="space-y-5">

            <InfoItem
              icon={<User size={18} />}
              label="Nama"
              value="Farhan Angga"
            />

            <InfoItem
              icon={<Phone size={18} />}
              label="Nomor HP"
              value="+62 812 3456 7890"
            />

            <InfoItem
              icon={<Mail size={18} />}
              label="Email"
              value="farhan@email.com"
            />

            {/* PAKET */}
            <div className="p-4 rounded-xl border border-gray-200 flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Crown size={18} className="text-gray-500 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Jenis Paket</p>
                  <p className="font-medium">Free Plan</p>
                </div>
              </div>

              <button onClick={() => router.push("/dashboard/pricing")} className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#5D3ADA] to-[#2B68FF] hover:scale-105 transition-transform duration-200 text-white text-sm  transition">
                Upgrade
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== */
/* COMPONENT */
/* ===================== */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 flex items-center justify-between">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-gray-500">{icon}</div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
}
