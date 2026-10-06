// ===== Lembar B: data halaman sebagai variabel =====
const profil = {
  nama: "Muhammad Pramudya Aldiansyah",
  nim: "25523082",
  peran: "Mahasiswa Informatika UII angkatan 25",
  keahlian: ["HTML", "CSS", "JavaScript", "Sound Engineering", "Produksi Video", "Fotografi", "Problem Solving"],
  alamat: { kota: "Yogyakarta" },
};

// ===== Lembar D: array of object =====
const daftarProyek = [
  { judul: "Video company profile sekolah", tahun: 2026, selesai: true },
  { judul: "Pentas teater (SoundMan) di TBY", tahun: 2026, selesai: true },
  { judul: "Aplikasi tugas proyek kelompok", tahun: 2026, selesai: true },
  { judul: "Halaman profil PABW", tahun: 2026, selesai: false },
];

const jumlahProyek = daftarProyek.length; // angka, bukan teks
let pilihanAktif = "semua"; // let: nilainya berubah saat disaring

// ===== Lembar C: fungsi murni =====
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

// ===== Lembar B: template literal, ?? dan ?. =====
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
const kota = profil.alamat?.kota ?? "-";
const email = profil.kontak?.email ?? "-"; // kontak belum ada -> "-", bukan galat

// ===== Menampilkan data ke halaman (DOM dibahas penuh di P9) =====
const isi = (selector, teks) => {
  const elemen = document.querySelector(selector);
  if (elemen === null) {
    console.error(`Elemen ${selector} tidak ditemukan di HTML`);
    return;
  }
  elemen.textContent = teks;
};

document.title = `Profil ${profil.nama} — PABW 2026/2027`;
isi("header h1", profil.nama);
isi(".tagline", profil.peran);
// HTML Anda belum punya tempat keahlian, jadi elemennya dibuat dari JS
const barisKeahlian = document.createElement("p");
barisKeahlian.textContent = `Keahlian: ${formatKeahlian(profil.keahlian)}`;
document.querySelector("#tentang figure")?.after(barisKeahlian);
isi(".kaki p", `${profil.nama} · ${profil.nim} · 2026`);

const daftarKarya = document.querySelector("#karya ul");
if (daftarKarya !== null) {
  const butirKarya = daftarProyek.map((proyek) => {
    const li = document.createElement("li");
    li.textContent = `${proyek.judul} (${proyek.tahun}) — ${proyek.selesai ? "selesai" : "sedang dikerjakan"}`;
    return li;
  });
  daftarKarya.replaceChildren(...butirKarya);
} else {
  console.error("Elemen #karya ul tidak ditemukan di HTML");
}

// ===== Console: bukti kerja =====
console.log(kalimat);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log("Kota:", kota, "| Email:", email, "| jumlahProyek:", jumlahProyek, typeof jumlahProyek);

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const dikerjakan = daftarProyek.find((proyek) => proyek.judul === "Halaman profil PABW");
console.log(dikerjakan);
console.log(daftarProyek.find((proyek) => proyek.judul === "Tidak ada")); // undefined

const judulSaja = daftarProyek.map((proyek) => proyek.judul);
console.log(judulSaja.length === daftarProyek.length); // true

const urut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.log("Terurut:", urut.map((p) => p.judul));
console.log("Asli   :", daftarProyek.map((p) => p.judul));

const salinan = { ...profil };
salinan.nama = "Nama Lain";
console.log("Asli setelah ubah salinan { ...profil }:", profil.nama);

pilihanAktif = "selesai";
console.log("pilihanAktif:", pilihanAktif);
