"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-tr from-[#D8E1FF] via-[#88AEFF] to-[#A88FFF]">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-6 py-7">
        <div className="flex w-full max-w-[1180px] justify-between items-center mx-auto">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <h1 className="text-[128px] h-40 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5D33DA] to-[#266BFF]">
              Bimbim
            </h1>
            <h1 className="pl-1.5 text-[48px] text-black font-bold">
              KASIR DIGITAL
            </h1>
          </div>

          {/* Right Side */}
          <div className="w-[460px]">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-1 text-black">Sign Up</h2>
              <p className="text-gray-500 text-sm mb-6">
                Isi data dibawah ini
                <span
                  onClick={() => router.push("/signIn")}
                  className="float-right cursor-pointer text-gray-500 hover:underline"
                >
                  Kembali
                </span>
              </p>

              <form className="space-y-4">
                {/* Nama Depan & Belakang */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-black">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      placeholder="Nama depan"
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
                      placeholder="Nama belakang"
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
                    placeholder="Masukkan email"
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
                      placeholder="Masukkan password"
                      className="w-full px-4 pr-10 mt-1 py-3 rounded-md border border-gray-300 bg-gray-100 
                        text-black placeholder-gray-400 
                        focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA]"
                    />

                    {/* Toggle Button */}
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
                    placeholder="Konfirmasi password"
                    className="w-full px-4 mt-1 py-3 rounded-md border border-gray-300 bg-gray-100 
                      text-black placeholder-gray-400 
                      focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA]"
                  />
                </div>

                {/* Button Sign Up */}
                <button
                  type="button"
                  onClick={() => router.push("/signIn/kodeVerifikasi")}
                  className="w-full py-3 rounded-md bg-[#5D33DA] text-white font-semibold hover:bg-[#4A28B5] transition"
                >
                  Sign Up
                </button>

                {/* Google Sign Up (dummy) */}
                <button
                  type="button"
                  onClick={() => router.push("/signIn/kodeVerifikasi")}
                  className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                >
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Sign Up dengan Google
                </button>
              </form>

              {/* Link login */}
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
