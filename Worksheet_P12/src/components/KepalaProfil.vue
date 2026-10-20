<script setup>
defineProps({
  profil: {
    type: Object,
    required: true,
  },
  temaGelap: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['ubah-tema'])
</script>

<template>
  <header class="kepala">
    <div class="header-top">
      <div class="title-wrap">
        <h1>{{ profil.nama }}</h1>
        <p class="tagline">
          {{ profil.peran }}
        </p>
      </div>

      <button
        class="theme-toggle"
        type="button"
        :aria-pressed="temaGelap"
        @click="$emit('ubah-tema')"
      >
        <span class="theme-toggle__switch" aria-hidden="true"></span>
        <span aria-hidden="true">{{ temaGelap ? '☾' : '☀' }}</span>
        {{ temaGelap ? 'Mode terang' : 'Mode gelap' }}
      </button>
    </div>

    <nav aria-label="Navigasi utama">
      <ul>
        <li><a href="#tentang">Tentang saya</a></li>
        <li><a href="#karya">Karya saya</a></li>
        <li><a href="#kontak">Kontak</a></li>
        <li><a href="#pendidikan">Pendidikan</a></li>
      </ul>
    </nav>
  </header>
</template>