
<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

// Memuat kategori tersimpan saat aplikasi pertama kali dibuka
onMounted(() => {
  const isi = muat()

  if (
    isi &&
    ['semua', 'web', 'media', 'data'].includes(isi.kategoriAktif)
  ) {
    state.kategoriAktif = isi.kategoriAktif
  }
})

// Menyimpan state setiap kali terjadi perubahan
watch(
  state,
  (nilai) => simpan(nilai),
  { deep: true }
)

// Mengembalikan kategori ke nilai bawaan
function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <main>
    <KepalaProfil :profil="profil" />

    <section id="karya">
      <h2>Karya Saya</h2>

      <TombolFilter />
      <DaftarProyek />

      <button type="button" @click="aturUlangPilihan">
        Atur Ulang
      </button>
    </section>

    <section id="kontak">
      <h2>Hubungi Saya</h2>
      <FormKontak />
    </section>
  </main>
</template>
