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

      // Auto fokus ke input berikutnya
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 py-6">
        <div
          className="
            bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 text-center 
            w-full max-w-[420px]
          "
        >
          {/* Back */}
          <p
            onClick={() => router.push("/signIn/signUp")}
            className="
              text-sm text-gray-400 mb-4 sm:mb-6 cursor-pointer 
              text-left hover:underline
            "
          >
            Kembali
          </p>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-black">
            Verifikasi Akun
          </h2>
          <p className="text-gray-500 text-sm mb-6 sm:mb-8 leading-relaxed">
            Masukkan Passcode yang dikirim ke email anda
          </p>

          {/* Input 6 digit code */}
          <div
            className="
              flex justify-center sm:justify-between gap-2 sm:gap-3 mb-6 sm:mb-8
            "
          >
            {code.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, i)}
                className="
                  w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-semibold 
                  rounded-md border border-gray-300 bg-gray-100 
                  focus:outline-none focus:border-[#5D33DA] focus:ring-2 
                  focus:ring-[#5D33DA] text-black
                "
              />
            ))}
          </div>

          {/* Button Verifikasi */}
          <button
            type="button"
            onClick={() => router.push("/dashboard/main")} // sementara arahkan ke halaman dummy
            className="
              w-full py-2.5 sm:py-3 rounded-xl bg-[#5D33DA] 
              text-white font-semibold hover:bg-[#4A28B5] transition
            "
          >
            Verifikasi
          </button>

          {/* Countdown dan kirim ulang */}
          <p className="text-sm text-gray-700 mt-4">
            tunggu <span className="font-semibold">1:00</span> untuk{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Kirim Ulang Kode
            </span>
          </p>
        </div>
      </div>

      {/* Footer bergelombang */}
      <div className="hidden md:block w-full">
        <img
          src="/img/assets/footer.png"
          alt="footer"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
