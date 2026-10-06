const profil = {
  nama: "Muhammad Pramudya Aldiansyah",
  nim: "25523082",
  peran: "Mahasiswa Informatika UII angkatan 25",
  keahlian: ["HTML", "CSS", "JavaScript", "Sound Engineering", "Produksi Video"],
  alamat: { kota: "Yogyakarta" },
};

const jumlahProyek = 4;
let pilihanAktif = "semua";

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
const kota = profil.alamat?.kota ?? "-";
const email = profil.kontak?.email ?? "-";

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
isi(".kaki p", `${profil.nama} · ${profil.nim} · 2026`);

console.log(kalimat);
console.log("Kota:", kota, "| Email:", email);
console.log(typeof jumlahProyek);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const barisKeahlian = document.createElement("p");
barisKeahlian.textContent = `Keahlian: ${formatKeahlian(profil.keahlian)}`;
document.querySelector("#tentang figure")?.after(barisKeahlian);

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));