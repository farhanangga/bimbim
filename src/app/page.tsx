"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  // ===========================
  // 🎨 SEMUA WARNA DIKONTROL DI SINI
  // ===========================
  const colors = {

    warnaUtama1: "#2B68FF",
    warnaUtama2: "#5D3ADA",
    warnaLembut1: "#AB8FFF",
    warnaLembut2: "#88AEFF",
    warnaTextUtama: "#1D172F",
    warnaText2:"#FFFFFF",
    warnaText3: "#2B68FF",
    warnaTerang: "#FFFFFF",
    warnaButton1:"#2B68FF",
    warnaButton2: "#5D3ADA",
    warnaUtama3: "#1D172F",
    bgPricing: "#CCDCFF",
    textBintang: "#FACC15",

    shadow: "rgba(0,0,0,0.15)",
  };

  // ===========================
  // 🧩 DATA UTAMA
  // ===========================
  const navLinks = [
    { label: "Fitur", href: "#fitur" },
    { label: "Berlangganan", href: "#berlangganan" },
    { label: "Ulasan", href: "#ulasan" },
    { label: "FAQ", href: "#faq" },
  ];

  const pricingPlans = [
    {
      title: "FREE PLAN",
      price: "Rp0 / selamanya",
      features: [
        "Maksimal 20 barang",
        "1 Pengguna (kasir)",
        "Pencatatan transaksi dasar",
        "Laporan penjualan harian sederhana",
        "Akses cloud & sinkronisasi otomatis",
      ],
      button: "Mulai Dengan FREE PLAN",
    },
    {
      title: "BASIC PLAN",
      price: "Rp49.000 / Bulan",
      features: [
        "Tanpa batas barang",
        "Hingga 2 pengguna (kasir & pegawai)",
        "Laporan penjualan harian & mingguan",
        "Manajemen stok otomatis",
        "Ekspor laporan ke Excel & PDF",
      ],
    },
    {
      title: "PRO PLAN",
      price: "Rp199.000 / Bulan",
      features: [
        "Semua fitur Basic",
        "Pengguna tak terbatas",
        "Laporan penjualan lengkap (harian, mingguan, bulanan)",
        "Multi perangkat (HP, tablet, PC)",
        "Notifikasi stok menipis",
      ],
    },
    {
      title: "ENTERPRIZE PLAN",
      price: "Rp599.000 / Tahun",
      features: [
        "Semua fitur Basic",
        "Pengguna tak terbatas",
        "Laporan penjualan lengkap",
        "Multi perangkat",
        "Dukungan pelanggan prioritas",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Bryan Brando",
      text: "Sejak pakai Bimbim, transaksi di toko jadi lebih cepat dan laporan keuangan langsung otomatis. Sangat membantu untuk usaha kecil seperti saya.",
      img: "/img/assets/profil/profil-1.png",
    },
    {
      name: "Amy August",
      text: "Aplikasi kasir terbaik! Mudah digunakan, fiturnya lengkap, dan harga sangat terjangkau untuk bisnis kami.",
      img: "/img/assets/profil/profil-2.png",
    },
    {
      name: "Meliana Jane",
      text: "Aplikasi ini mudah sekali untuk digunakan, saya sangat menyukainya karena ini dapat membantu saya mengelola bisnis saya dengan baik.",
      img: "/img/assets/profil/profil-3.png",
    },
  ];

  const benefits = [
    "Hemat waktu dengan pencatatan transaksi otomatis",
    "Data tersimpan aman di cloud, tidak takut hilang",
    "Mudah digunakan tanpa perlu pelatihan khusus",
    "Membantu bisnis lebih teratur dan profesional",
    "Mendukung pertumbuhan usaha dengan analisis penjualan",
  ];

  const faqItems = [
    {
      q: "Apakah Bimbim bisa digunakan offline?",
      a: "Bisa, namun data akan otomatis sinkron saat online.",
    },
    {
      q: "Apakah aman menyimpan data di Bimbim?",
      a: "Sangat aman, semua data tersimpan di cloud dengan enkripsi tingkat tinggi.",
    },
    {
      q: "Apakah saya bisa ekspor laporan ke Excel?",
      a: "Bisa, semua laporan bisa diunduh ke format Excel & PDF.",
    },
    {
      q: "Apakah ada dukungan pelanggan?",
      a: "Ya, kami menyediakan support via WhatsApp & Email 24/7.",
    },
  ];

  // ===========================
  // 🧱 RENDER KOMPONEN
  // ===========================
  return (
    <div
      style={{
        background: `linear-gradient(to top right, ${colors.warnaTerang}, ${colors.warnaLembut2}, ${colors.warnaLembut1})`,
        color: colors.warnaTextUtama,
        minHeight: "100vh",
      }}
      className="flex flex-col"
    >
      {/* Navbar */}
      <nav
        className="flex justify-center mx-30"
        style={{ color: colors.warnaTextUtama }}
      >
        <div className="flex items-center justify-between py-6 max-w-5xl w-full">
          <h1 style={{ color: colors.warnaText3 }} className="text-2xl font-bold">
            Bimbim
          </h1>
          <ul className="hidden md:flex gap-8 font-bold">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} style={{ color: colors.warnaTextUtama }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="hidden md:flex gap-8 font-medium">
            <li
              onClick={() => router.push("/signIn")}
              style={{ color: colors.warnaTextUtama, fontWeight: "bold" }}
              className="cursor-pointer"
            >
              Sign In
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex justify-center mx-30">
        <div className="grid md:grid-cols-2 items-center max-w-5xl pb-30 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Kelola Bisnis Lebih Mudah dengan Kasir Digital{" "}
              <span style={{ color: colors.warnaText3 }}>Bimbim</span>
            </h2>
            <p style={{ color: colors.warnaTextUtama }} className="mb-8 text-lg max-w-lg">
              Sistem kasir modern yang membantu Anda mencatat transaksi,
              mengelola stok, dan memantau laporan penjualan dengan cepat & akurat.
            </p>
            <button
              style={{
                background: colors.warnaTextUtama,
                color: colors.warnaTerang,
              }}
              className="px-8 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
            >
              Mulai Sekarang
            </button>
          </div>
          <div className="flex justify-center mt-10 md:mt-0">
            <img
              src="/img/assets/model.png"
              alt="Kasir Digital"
              className="max-w-100 md:max-w-100 drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="berlangganan" className="flex justify-center " >
        <div className="flex justify-center px-30 w-full" style={{background: colors.warnaTerang}}>
          <div className="flex flex-col items-center justify-center pt-15 pb-30 max-w-5xl w-full" style={{background: colors.warnaTerang}}>
            <h2 className="text-3xl font-bold text-center mb-12" style={{color: colors.warnaUtama1}}>Berlangganan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {pricingPlans.map((plan, i) => (
                <div
                  key={i}
                  style={{
                    background: colors.bgPricing,
                    color: colors.warnaTextUtama,
                    boxShadow: `0 4px 8px ${colors.shadow}`,
                  }}
                  className="rounded-xl p-6 text-center flex flex-col justify-between max-w-70 w-full"
                >
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                  <p style={{ color: colors.warnaTextUtama }} className="font-semibold">
                    {plan.price}
                  </p>
                  <ul className="mt-4 text-sm space-y-2">
                    {plan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <button
                    style={{
                      background: `linear-gradient(to right, ${colors.warnaUtama2}, ${colors.warnaUtama1})`,
                      color: colors.warnaTerang,
                    }}
                    className="mt-6 px-6 py-3 rounded-sm"
                  >
                    Berlangganan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="ulasan" className="py-20">
        <div className="flex justify-center px-30 w-full">
          <div className="flex flex-col gap-8 max-w-5xl w-full">
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: colors.warnaTerang,
                  color: colors.warnaTextUtama,
                  boxShadow: `0 4px 12px ${colors.shadow}`,
                }}
                className={`rounded-2xl p-6 flex items-start gap-4 w-240 ${
                  i % 2 === 0 ? "self-start" : "self-end"
                }`}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <div
                    style={{ color: colors.textBintang }}
                    className="flex mb-2"
                  >
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <svg
                          key={j}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <p style={{ color: colors.warnaTextUtama }}>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefit */}
      <section id="fitur" className="">
        <div className="flex justify-center px-30 w-full" style={{background: colors.warnaTerang}}>
          <div className="flex items-center justify-between pt-15 pb-30 max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-left">
              KENAPA HARUS <br /> PAKAI{" "}
              <span style={{ color: colors.warnaText3 }}>Bimbim?</span>
            </h2>
            <div className="flex flex-col gap-4">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: `linear-gradient(to right, ${colors.warnaLembut1}, ${colors.warnaLembut2})`,
                    color: colors.warnaTextUtama,
                    boxShadow: `0 2px 6px ${colors.shadow}`,
                  }}
                  className="px-8 py-8 rounded-xl font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-8 md:px-20 py-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {faqItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              {/* Question (rata kiri) */}
              <div
                style={{
                  backgroundColor: colors.warnaTerang,
                  color: colors.warnaTextUtama,
                  boxShadow: `0 4px 10px ${colors.shadow}`,
                }}
                className="w-4/5 rounded-sm p-4 self-start"
              >
                <p className="font-semibold">{item.q}</p>
              </div>

              {/* Answer (rata kanan, gaya bubble warna gradasi) */}
              <div
                style={{
                  background: `linear-gradient(to right, ${colors.warnaLembut1}, ${colors.warnaLembut2})`,
                  color: colors.warnaTextUtama,
                  boxShadow: `0 4px 10px ${colors.shadow}`,
                }}
                className="w-4/5 rounded-sm p-4 self-end"
              >
                <p className="font-semibold">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer 
          style={{ backgroundColor: colors.warnaTextUtama,color: colors.warnaTerang }}>
        <div className="flex justify-center">
          <div className="flex flex-col justify-between pt-15 pb-30 max-w-5xl w-full px-30">

            <h3 className="text-2xl font-bold mb-6 md:mb-0">Bimbim</h3>

              <div className="flex justify-between">

                <div className="flex flex-col justify-between">

                  <div>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Youtube</p>
                  </div>

                  <div>
                    <p>Berlangganan</p>
                    <p>Manfaat</p>
                    <p>Ulasan</p>
                    <p>FaQ</p>
                  </div>

                </div>
              
                <div className="w-50">
                  <p>jl.Yos Sudarso no 43, Lemahwunggkuk ,Suka jadi, Jakarta Barat, DKI Jakarta, Indonesia</p>
                  <p>+62 812 3456 7890</p>
                  <p>Jakarta, Indonesia</p>
                </div>
                
              </div>
              <p className="text-center text-sm">
                © 2025 Bimbim Kasir. All Rights Reserved.
              </p>
          </div>
          
        </div>
        
      </footer>

    </div>
  );
}
