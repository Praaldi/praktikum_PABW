export function wajib(selector) {
  const elemen = document.querySelector(selector);

  if (elemen === null) {
    throw new Error(
      `Elemen ${selector} tidak ditemukan. Cocokkan dengan panel Elements.`
    );
  }

  return elemen;
}

// Memilih proyek berdasarkan kategori di state
export function saring(state) {
  return state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" ||
      proyek.kategori === state.kategoriAktif
  );
}

// Menggambar ulang daftar proyek berdasarkan state
export function render(state) {
  const wadah = wajib("#daftar");
  const kosong = wajib("#pesan-kosong");

  // 1. Kosongkan daftar lama
  wadah.textContent = "";

  // Ambil daftar proyek yang sesuai dengan kategori aktif
  const tampil = saring(state);

  // 2. Periksa keadaan kosong
  if (tampil.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  // 3. Isi ulang daftar proyek
  const bungkus = document.createDocumentFragment();

  tampil.forEach((proyek) => {
    const li = document.createElement("li");
    li.className = "kartu";
    li.textContent =
      `${proyek.judul} (${proyek.kategori}, ${proyek.tahun})`;

    bungkus.append(li);
  });

  wadah.append(bungkus);
}

// Memberi tanda pada tombol kategori yang aktif
export function tandaiTombolAktif(kategori) {
  const barisFilter = wajib("#filter");

  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle(
      "aktif",
      tombol.dataset.kategori === kategori
    );
  });
}

// Menampilkan informasi profil
export function renderProfil(profil) {
  document.title = `Profil ${profil.nama} — PABW 2026/2027`;

  wajib("header h1").textContent = profil.nama;
  wajib(".tagline").textContent = profil.peran;

  wajib(".kaki p").textContent =
    `${profil.nama} · ${profil.nim} · 2026`;

  const barisKeahlian = document.createElement("p");
  barisKeahlian.textContent =
    `Keahlian: ${profil.keahlian.join(" · ")}`;

  const gambar = document.querySelector("#tentang figure");

  if (gambar !== null) {
    gambar.after(barisKeahlian);
  }
}