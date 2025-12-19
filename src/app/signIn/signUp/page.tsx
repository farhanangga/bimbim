"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4 py-5">
        <div
          className="
            flex w-full max-w-[1180px] justify-between items-center mx-auto
            flex-col lg:flex-row gap-5 lg:gap-0
          "
        >
          {/* LEFT SIDE */}
          <div onClick={() => router.push("/")}  className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl lg:text-[128px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5D33DA] to-[#266BFF] leading-none">
              Bimbim
            </h1>
            <h2 className="text-xl lg:text-[48px] font-semibold text-black lg:-mt-2">
              Kasir Digital
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full max-w-[460px]">
            <div className="bg-white rounded-2xl shadow-lg p-5 lg:p-8">
              <h2 className="text-2xl font-bold mb-1 text-black text-left">
                Daftar
              </h2>
              <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400 text-sm">
                Isi semua data di bawah ini!!
              </p>
              </div>

              <form className="space-y-4">
                {/* Nama Depan & Belakang */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-black">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      placeholder="Klik di sini..."
                      className="w-full px-4 mt-1 py-3 rounded-md border border-gray-300 bg-gray-100 
                        text-black placeholder-gray-400 
                        focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      placeholder="Klik di sini..."
                      className="w-full px-4 mt-1 py-3 rounded-md border border-gray-300 bg-gray-100 
                        text-black placeholder-gray-400 
                        focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Klik di sini..."
                    className="w-full px-4 mt-1 py-3 rounded-md border border-gray-300 bg-gray-100 
                      text-black placeholder-gray-400 
                      focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA]"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-black">
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Klik di sini..."
                      className="w-full px-4 pr-10 mt-1 py-3 rounded-md border border-gray-300 bg-gray-100 
                        text-black placeholder-gray-400 
                        focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#5D33DA]"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.957 9.957 0 012.588-4.263m4.276-2.213A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.958 9.958 0 01-4.036 5.042M15 12a3 3 0 00-3-3m0 0a3 3 0 013 3m-3-3v.01M3 3l18 18"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-black">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Klik di sini..."
                    className="w-full px-4 mt-1 py-3 rounded-md border border-gray-300 bg-gray-100 
                      text-black placeholder-gray-400 
                      focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA]"
                  />
                </div>

                {/* Error */}
                <p className="text-red-600 text-sm hidden">
                  Email yang anda gunakan sudah terdaftar!
                </p>

                {/* Buttons */}
                <button
                  type="button"
                  onClick={() => router.push("/signIn/kodeVerifikasi")}
                  className="w-full py-3 rounded-md bg-[#5D33DA] text-white hover:bg-[#4A28B5] transition"
                >
                  Daftar
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/dashboard/main")}
                  className="w-full py-3 rounded-md bg-blue-600 text-white flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                >
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Daftar dengan Google
                </button>
              </form>

              {/* Login link */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Sudah punya akun?{" "}
                <span
                  onClick={() => router.push("/signIn")}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Masuk di sini
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Wave */}
      <div className="hidden lg:block w-full">
        <img
          src="/img/assets/footer.png"
          alt="footer"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
