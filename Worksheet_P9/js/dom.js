import { daftarProyek } from "./app.js";

function wajib(selector) {
  const elemen = document.querySelector(selector);
  if (elemen === null) {
    throw new Error(`Elemen ${selector} tidak ditemukan. Cocokkan dengan panel Elements.`);
  }
  return elemen;
}

const wadah = wajib("#daftar");
const kosong = wajib("#pesan-kosong");
const barisFilter = wajib("#filter");
const form = wajib("#kontak form");
const tombolKirim = wajib("#kontak button[type='submit']");
const statusForm = wajib("#status-form");
const aturan = {
  nama: (nilai) => (nilai.trim() === "" ? "Isi nama lengkap Anda." : ""),
  email: (nilai) =>
    /^\S+@\S+\.\S+$/.test(nilai.trim()) ? "" : "Tulis email dengan format nama@contoh.com.",
  nim: (nilai) =>
    /^[0-9]{8}$/.test(nilai.trim()) ? "" : "NIM terdiri dari 8 digit angka, tanpa spasi atau huruf.",
  pesan: (nilai) =>
    nilai.trim().length >= 10 ? "" : "Tulis pesan minimal 10 karakter agar jelas maksudnya.",
};


function buatKartu(proyek) {
  const li = document.createElement("li");   // buat
  li.className = "kartu";
  li.textContent = `${proyek.judul} (${proyek.kategori}, ${proyek.tahun})`;  // isi: teks, bukan HTML
  return li;
}

function render(daftar) {
  wadah.textContent = "";            // kosongkan dulu, di baris pertama

  if (daftar.length === 0) {         // keadaan kosong
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  const bungkus = document.createDocumentFragment();   // isi ulang
  daftar.forEach((proyek) => bungkus.append(buatKartu(proyek)));
  wadah.append(bungkus);
}

render(daftarProyek);

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;                       // klik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

tandaiTombolAktif(barisFilter.querySelector('[data-kategori="semua"]'));