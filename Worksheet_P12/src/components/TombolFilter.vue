
<script setup>
import { state, pilihKategori } from '../state.js'
</script>

<template>
  <div class="filter-proyek">
    <button
      v-for="kategori in ['semua', 'web', 'media', 'data']"
      :key="kategori"
      type="button"
      :class="{ aktif: state.kategoriAktif === kategori }"
      @click="pilihKategori(kategori)"
    >
      {{ kategori.charAt(0).toUpperCase() + kategori.slice(1) }}
    </button>
  </div>
</template>
