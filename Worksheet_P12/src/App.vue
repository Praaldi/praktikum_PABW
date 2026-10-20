
<script setup>
import { profil } from './data.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
</script>

<template>
  <main>
    <KepalaProfil :profil="profil" />

    <section id="karya">
      <h2>Karya Saya</h2>
      <TombolFilter />
      <DaftarProyek />
    </section>

    <section id="kontak">
      <h2>Hubungi Saya</h2>
      <FormKontak />
    </section>
  </main>
</template>
