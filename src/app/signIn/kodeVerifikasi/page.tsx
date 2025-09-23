"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyAccountPage() {
  const router = useRouter();
  const [code, setCode] = useState(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // auto fokus ke input berikutnya
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-6 py-7">
        <div className="bg-white w-[420px] rounded-2xl shadow-lg p-10 text-center">
          {/* Back */}
          <p
            onClick={() => router.push("/signIn/signUp")}
            className="text-sm text-gray-400 mb-6 cursor-pointer text-left hover:underline"
          >
            Kembali
          </p>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2 text-black">Verifikasi Akun</h2>
          <p className="text-gray-500 text-sm mb-8">
            Masukan Passcode yang dikirim ke Email anda
          </p>

          {/* Input 6 digit code */}
          <div className="flex justify-between gap-3 mb-8">
            {code.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-12 h-12 text-center text-lg font-semibold rounded-md border border-gray-300 bg-gray-100 
                  focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA] text-black"
              />
            ))}
          </div>

          {/* Button Verifikasi */}
          <button
            type="button"
            onClick={() => router.push("/dashboard")} // sementara arahkan ke halaman dummy
            className="w-full py-3 rounded-xl bg-[#5D33DA] text-white font-semibold hover:bg-[#4A28B5] transition"
          >
            Verifikasi
          </button>

          {/* Kirim ulang */}
          <p className="text-sm text-blue-600 hover:underline mt-6 cursor-pointer">
            Kirim Ulang Kode
          </p>
        </div>
      </div>

      {/* Footer bergelombang */}
      <div className="w-full">
        <img
          src="/img/assets/footer.png"
          alt="footer"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
