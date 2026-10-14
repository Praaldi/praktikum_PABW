
import {
  profil,
  buatPerkenalan,
  formatKeahlian,
} from "./data.js";

import { state } from "./state.js";

import {
  render,
  renderProfil,
} from "./dom.js";

import { pasangEvents } from "./events.js";

// Tampilkan informasi profil dan daftar proyek
renderProfil(profil);
render(state);

// Pasang event untuk interaksi pengguna
pasangEvents();

// Memastikan fungsi dari data.js dapat digunakan
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


