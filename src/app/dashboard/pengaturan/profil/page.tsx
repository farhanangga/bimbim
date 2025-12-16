"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Menu, ArrowLeft, Pencil } from "lucide-react";

export default function ProfilPage() {
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
      <div className="lg:hidden flex items-center p-4 bg-white sticky top-0 z-30 gap-3">
        <button onClick={() => router.back()}>
          <ArrowLeft size={26} />
        </button>
        <h1 className="font-semibold text-lg">Profil</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="lg:ml-64 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-none lg:rounded-2xl shadow-none lg:shadow-lg h-full lg:min-h-165">

          <h2 className="hidden lg:block text-lg font-semibold mb-6">
            Profil
          </h2>

          <div className="space-y-5">

            <ProfileItem label="Nama" value="Farhan Angga" />
            <ProfileItem label="Email" value="farhan@email.com" />
            <ProfileItem label="Nomor HP" value="+62 812 3456 7890" />
            <ProfileItem label="Paket" value="Free Plan" />

          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileItem({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
      <button className="flex items-center gap-2 text-sm text-blue-600">
        <Pencil size={16} />
        Ubah
      </button>
    </div>
  );
}
