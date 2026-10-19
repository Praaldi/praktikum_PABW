import {
  profil,
  buatPerkenalan,
  formatKeahlian,
} from "./data.js";

import { inisialisasiState } from "./state.js";

import { renderProfil } from "./dom.js";

import { pasangEvents } from "./events.js";

// Tampilkan informasi profil
renderProfil(profil);

// Muat state dan tampilkan daftar proyek
inisialisasiState();

// Pasang event untuk interaksi pengguna
pasangEvents();

// Memastikan fungsi dari data.js dapat digunakan
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));