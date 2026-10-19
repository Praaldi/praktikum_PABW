import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif: "semua",
};

// Membaca simpanan dari localStorage
export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);
    const isi = JSON.parse(teks);

    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

// Menyimpan kategori aktif
export function simpan() {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
  };

  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// Memuat kategori tersimpan ketika aplikasi dimulai
export function inisialisasiState() {
  const isi = muat();

  if (
    isi !== null &&
    isi.versi === VERSI &&
    ["semua", "web", "media", "data"].includes(isi.kategoriAktif)
  ) {
    state.kategoriAktif = isi.kategoriAktif;
  }

  render(state);
}

// Mengubah kategori aktif
export function pilihKategori(nilai) {
  if (!["semua", "web", "media", "data"].includes(nilai)) {
    return;
  }

  state.kategoriAktif = nilai;
  simpan();
  render(state);
}

// Menghapus simpanan dan mengembalikan nilai bawaan
export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  render(state);
}