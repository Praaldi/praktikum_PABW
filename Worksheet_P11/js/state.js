import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif: "semua",
};

// Satu pintu untuk mengubah kategori aktif
export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  render(state);
}