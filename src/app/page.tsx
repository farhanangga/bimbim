"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login dengan:", { email, password });
    // contoh: router.push("/dashboard")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-400">
      <div className="flex w-full max-w-5xl p-6">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center text-left pl-6">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Bimbim
          </h1>
          <p className="mt-2 text-xl text-gray-800 font-semibold">KASIR DIGITAL</p>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-[400px]">
            <h2 className="text-2xl font-bold mb-1">Sign In</h2>
            <p className="text-gray-500 text-sm mb-6">
              Welcome To Bimbim !
              <span className="float-right cursor-pointer text-gray-500 hover:underline">Kembali</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Button Sign In */}
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
              >
                Sign In
              </button>

              {/* Google Sign In */}
              <button
                type="button"
                className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition"
              >
                <Image
                  src="/google-icon.png" // siapkan ikon google di /public
                  alt="Google"
                  width={20}
                  height={20}
                />
                Sign In dengan Google
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              tidak punya akun?{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Daftar di sini
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
