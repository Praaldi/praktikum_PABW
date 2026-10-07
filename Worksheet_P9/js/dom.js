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

console.log(wadah, kosong, barisFilter, form, daftarProyek.length);