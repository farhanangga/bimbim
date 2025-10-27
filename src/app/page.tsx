"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const colors = {
    warnaUtama1: "#2B68FF",
    warnaUtama2: "#5D3ADA",
    warnaLembut1: "#AB8FFF",
    warnaLembut2: "#88AEFF",
    warnaTextUtama: "#1D172F",
    warnaText2: "#FFFFFF",
    warnaText3: "#2B68FF",
    warnaTerang: "#FFFFFF",
    warnaButton1: "#2B68FF",
    warnaButton2: "#5D3ADA",
    warnaUtama3: "#1D172F",
    bgPricing: "#CCDCFF",
    textBintang: "#FACC15",
    shadow: "rgba(0,0,0,0.15)",
  };

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

  return (
    <div
      style={{
        background: `linear-gradient(to top right, ${colors.warnaTerang}, ${colors.warnaLembut2}, ${colors.warnaLembut1})`,
        color: colors.warnaTextUtama,
      }}
      className="flex flex-col min-h-screen"
    >
      {/* Navbar */}
      <nav style={{background: colors.warnaTerang,}} className="flex justify-center px-4 md:px-10 py-4 md:py-6">
        <div className="flex items-center justify-between w-full max-w-5xl">
          <h1 style={{ color: colors.warnaTextUtama }} className="text-xl md:text-2xl font-bold">
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
          <button
            onClick={() => router.push("/signIn")}
            style={{
              background: colors.warnaUtama3,
              color: colors.warnaTerang,
            }}
            className="px-4 py-2 rounded-md text-sm md:text-base font-semibold md:ml-6"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-center px-4 md:px-10 mt-5 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-5xl gap-10 py-10 md:py-5 text-center md:text-left">
          
          {/* Gambar di atas pada mobile */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/img/assets/model.png"
              alt="Kasir Digital"
              className="w-3/4 sm:w-2/3 md:w-full max-w-md drop-shadow-xl"
            />
          </div>

          {/* Teks di bawah gambar saat mobile */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Kelola Bisnis Lebih Mudah dengan{" "}
              <span style={{ color: colors.warnaUtama1 }}>Bimbim</span>
            </h2>
            <p className="mb-6 text-sm sm:text-base md:text-lg max-w-md " >
              Sistem kasir modern yang membantu Anda mencatat transaksi, mengelola stok, 
              dan memantau laporan penjualan dengan cepat & akurat.
            </p>
            <button
              style={{
                background: colors.warnaUtama3,
                color: colors.warnaText2,
              }}
              className=" sm:w-auto px-20 md:px-8 py-4 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="berlangganan" className=" px-10 py-10 md:py-24 bg-white">
        <div className="px-4 md:px-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: colors.warnaUtama1 }}>
            Berlangganan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                style={{
                  background: colors.bgPricing,
                  boxShadow: `0 4px 8px ${colors.shadow}`,
                }}
                className="rounded-xl p-6 text-center flex flex-col justify-between"
              >
                <h3 className="text-xl md:text-xl font-bold">{plan.title}</h3>
                <p className="font-semibold mt-2">{plan.price}</p>
                <ul className="mt-4 text-sm space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <button
                  style={{
                    background: `linear-gradient(to right, ${colors.warnaUtama2}, ${colors.warnaUtama1})`,
                    color: colors.warnaTerang,
                  }}
                  className="mt-6 md:px-4 py-4 rounded-md text-sm"
                >
                  Berlangganan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="ulasan" className="py-16 px-4 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: colors.warnaTerang,
                boxShadow: `0 4px 12px ${colors.shadow}`,
              }}
              className="rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Bagian atas: foto + nama + bintang */}
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-base md:text-lg">{t.name}</h4>
                  <div className="flex" style={{ color: colors.textBintang }}>
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <svg
                          key={j}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 md:h-5 md:w-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>

              {/* Ulasan di bawah */}
              <p className="mt-3 md:mt-0 text-gray-700">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefit */}
      <section id="fitur" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-10">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-snug text-left md:w-1/2">
            KENAPA HARUS <br />
            PAKAI <span style={{ color: colors.warnaText3 }}>Bimbim?</span>
          </h2>
          <div className="flex flex-col gap-4 md:w-1/2">
            {benefits.map((item, i) => (
              <div
                key={i}
                style={{
                  background: `linear-gradient(to right, ${colors.warnaLembut1}, ${colors.warnaLembut2})`,
                  boxShadow: `0 2px 6px ${colors.shadow}`,
                }}
                className="px-6 py-6 rounded-xl font-medium text-sm sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 md:px-20 py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {faqItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div
                style={{
                  backgroundColor: colors.warnaTerang,
                  boxShadow: `0 4px 10px ${colors.shadow}`,
                }}
                className="rounded-md p-4 self-start w-full sm:w-4/5"
              >
                <p className="font-semibold">{item.q}</p>
              </div>
              <div
                style={{
                  background: `linear-gradient(to right, ${colors.warnaLembut1}, ${colors.warnaLembut2})`,
                  boxShadow: `0 4px 10px ${colors.shadow}`,
                }}
                className="rounded-md p-4 self-end w-full sm:w-4/5"
              >
                <p className="font-semibold">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.warnaTextUtama, color: colors.warnaTerang }}>
        <div className="max-w-6xl mx-auto px-4 md:px-10 py-10 flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-center md:text-left">Bimbim</h3>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4">
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
                <p>FAQ</p>
              </div>
            </div>
            <div className="md:w-1/2 text-sm">
              <p>Jl. Yos Sudarso no 43, Lemahwungkuk, Jakarta Barat, DKI Jakarta, Indonesia</p>
              <p>+62 812 3456 7890</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
          <p className="text-center text-xs md:text-sm mt-6">
            © 2025 Bimbim Kasir. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
