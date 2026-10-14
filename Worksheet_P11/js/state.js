
import { daftarProyek } from "./data.js";

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif: "semua",
};

export function setKategoriAktif(kategori) {
  state.kategoriAktif = kategori;
}
