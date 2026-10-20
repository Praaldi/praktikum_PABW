
export const profil = {
  nama: "Muhammad Pramudya Aldiansyah",
  nim: "25523082",
  peran: "Mahasiswa Informatika UII angkatan 25",
  keahlian: [
    "HTML",
    "CSS",
    "JavaScript",
    "Sound Engineering",
    "Produksi Video"
  ],
  alamat: { kota: "Yogyakarta" },
};

export const daftarProyek = [
  {
    judul: "Video company profile sekolah",
    tahun: 2026,
    selesai: true,
    kategori: "media",
  },
  {
    judul: "Pentas teater (SoundMan) di TBY",
    tahun: 2026,
    selesai: true,
    kategori: "media",
  },
  {
    judul: "Aplikasi tugas proyek kelompok",
    tahun: 2026,
    selesai: true,
    kategori: "web",
  },
  {
    judul: "Halaman profil PABW",
    tahun: 2026,
    selesai: false,
    kategori: "web",
  },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
  return daftar.join(" · ");
}
