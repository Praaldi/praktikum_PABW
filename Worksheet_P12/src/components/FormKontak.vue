
<script setup>
import { ref } from 'vue'

const nama = ref('')
const email = ref('')
const pesan = ref('')

function kirimPesan() {
  nama.value = ''
  email.value = ''
  pesan.value = ''
}
</script>

<template>
  <form id="form-kontak" @submit.prevent="kirimPesan">
    <div>
      <label for="nama">Nama</label>
      <input
        id="nama"
        v-model="nama"
        type="text"
        name="nama"
        required
      />
    </div>

    <div>
      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        required
      />
    </div>

    <div>
      <label for="pesan">Pesan</label>
      <textarea
        id="pesan"
        v-model="pesan"
        name="pesan"
        required
      ></textarea>
    </div>

    <button type="submit">Kirim Pesan</button>
  </form>
</template>
