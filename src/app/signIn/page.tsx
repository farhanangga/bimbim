"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-tr from-[#88AEFF] to-[#A88FFF] ">
      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col md:flex-row items-center justify-center px-4 py-10 gap-8 md:gap-50">
        
        {/* LEFT SIDE (Logo) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-6xl md:text-[128px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5D33DA] to-[#266BFF] leading-none">
            Bimbim
          </h1>
          <h2 className="text-xl md:text-[48px] font-semibold text-black mt-2 md:-mt-2">
            Kasir Digital
          </h2>
        </div>

        {/* RIGHT SIDE (Card) */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5 md:p-8">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold text-black">Sign In</h2>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400 text-sm">
            Welcome Bimbim!!
            </p>
            <p onClick={() => router.push("/signIn/signUp")} className="text-gray-400 text-sm">
            back
            </p>
          </div>

          <form className="space-y-4">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-black">Email</label>
              <input
                type="email"
                placeholder="Klik di sini............"
                className="w-full px-4 mt-1 py-3 rounded-md border border-gray-300 bg-gray-100 
                           text-black placeholder-gray-400 
                           focus:outline-none focus:border-[#5D33DA] focus:ring-2 focus:ring-[#5D33DA]"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-black">Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Klik di sini............"
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={2} />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
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

            {/* ERROR MESSAGE */}
            <p className="text-red-600 text-sm hidden">
              Email yang anda gunakan tidak terdaftar, coba lagi!
            </p>

            {/* BUTTON MASUK */}
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard/main");
              }}
              className="w-full py-3 rounded-md bg-[#5D33DA] text-white font-semibold hover:bg-[#4A28B5] transition"
            >
              Masuk
            </button>

            {/* GOOGLE SIGN IN */}
            <Link
              href="/api/auth/google"
              className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Masuk dengan Google
            </Link>
          </form>

          {/* LINK DAFTAR */}
          <p className="text-center text-sm text-gray-600 mt-4">
            tidak punya akun?{" "}
            <span
              onClick={() => router.push("/signIn/signUp")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Daftar di sini
            </span>
          </p>
        </div>
      </div>

      {/* FOOTER IMAGE */}
      <div className="w-full hidden md:block">
        <img
          src="/img/assets/footer.png"
          alt="footer"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
