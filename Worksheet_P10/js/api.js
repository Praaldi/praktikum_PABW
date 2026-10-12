
const ALAMAT = './tidakAdacontoh.json';

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }

    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}