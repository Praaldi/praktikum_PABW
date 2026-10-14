import { state, pilihKategori } from "./state.js";
import { wajib, tandaiTombolAktif } from "./dom.js";

const aturan = {
  nama: (nilai) =>
    nilai.trim() === "" ? "Isi nama lengkap Anda." : "",
  email: (nilai) =>
    /^\S+@\S+\.\S+$/.test(nilai.trim())
      ? ""
      : "Tulis email dengan format nama@contoh.com.",
  nim: (nilai) =>
    /^[0-9]{8}$/.test(nilai.trim())
      ? ""
      : "NIM terdiri dari 8 digit angka, tanpa spasi atau huruf.",
  pesan: (nilai) =>
    nilai.trim().length >= 10
      ? ""
      : "Tulis pesan minimal 10 karakter agar jelas maksudnya.",
};

let sudahCoba = false;
let form;

function periksaKolom(kolom) {
  const pesanGalat = aturan[kolom.name](kolom.value);
  const tempatGalat = wajib(`#galat-${kolom.name}`);

  tempatGalat.textContent = pesanGalat;

  if (pesanGalat === "") {
    kolom.removeAttribute("aria-invalid");
  } else {
    kolom.setAttribute("aria-invalid", "true");
  }

  return pesanGalat === "";
}

const semuaKolom = () =>
  Array.from(form.querySelectorAll("input, textarea"));

const kolomBermasalah = () =>
  semuaKolom().filter((kolom) => !periksaKolom(kolom));

export function pasangEvents() {
  const barisFilter = wajib("#filter");
  form = wajib("#kontak form");
  const tombolKirim = wajib("#kontak button[type='submit']");
  const statusForm = wajib("#status-form");

  // Event tombol filter kategori
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    if (!kategori) return;

    pilihKategori(kategori);
    tandaiTombolAktif(kategori);
  });

  // Tandai kategori aktif saat aplikasi dimulai
  tandaiTombolAktif(state.kategoriAktif);

  // Event pengiriman formulir
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sudahCoba = true;

    const bermasalah = kolomBermasalah();

    if (bermasalah.length > 0) {
      statusForm.textContent = "";
      tombolKirim.disabled = true;
      bermasalah[0].focus();
      return;
    }

    statusForm.textContent =
      "Terima kasih, pesan Anda sudah tercatat.";

    form.reset();

    semuaKolom().forEach((kolom) => {
      wajib(`#galat-${kolom.name}`).textContent = "";
      kolom.removeAttribute("aria-invalid");
    });

    sudahCoba = false;
    tombolKirim.disabled = false;
  });

  // Event validasi saat pengguna mengetik
  form.addEventListener("input", (event) => {
    if (!sudahCoba) return;

    const kolom = event.target;

    if (!(kolom.name in aturan)) return;

    periksaKolom(kolom);
    tombolKirim.disabled = kolomBermasalah().length > 0;
  });

  // Tombol atur ulang kategori
  const tombolAturUlang = wajib("#atur-ulang");

  tombolAturUlang.addEventListener("click", () => {
    pilihKategori("semua");
    tandaiTombolAktif("semua");
  });
}