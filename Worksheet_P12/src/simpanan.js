
const KUNCI = "pabw-p11";
const VERSI = 2;

// Membaca simpanan dari localStorage
export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);

    if (teks === null) {
      return null;
    }

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
export function simpan(nilai) {
  const isi = {
    versi: VERSI,
    kategoriAktif: nilai.kategoriAktif,
  };

  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// Menghapus simpanan
export function aturUlang() {
  localStorage.removeItem(KUNCI);
}
