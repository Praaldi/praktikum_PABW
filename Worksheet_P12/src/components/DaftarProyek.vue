
<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const proyekTampil = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }

  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif
  )
})
</script>

<template>
  <ul id="daftar">
    <li
      v-for="proyek in proyekTampil"
      :key="proyek.id"
      class="kartu"
    >
      {{ proyek.judul }} ({{ proyek.kategori }}, {{ proyek.tahun }})
    </li>
  </ul>

  <p id="pesan-kosong" v-if="proyekTampil.length === 0">
    Belum ada proyek dalam kategori ini.
  </p>
</template>
