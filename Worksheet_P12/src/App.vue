<script setup>
import { onMounted, watch, ref } from 'vue'
import { profil } from './data.js'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const temaGelap = ref(false)

onMounted(() => {
  const isi = muat()

  if (
    isi &&
    ['semua', 'web', 'media', 'data'].includes(isi.kategoriAktif)
  ) {
    state.kategoriAktif = isi.kategoriAktif
  }

  const temaTersimpan = localStorage.getItem('theme')
  temaGelap.value =
    temaTersimpan === 'dark' ||
    (!temaTersimpan &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  terapkanTema()
})

watch(
  state,
  (nilai) => simpan(nilai),
  { deep: true }
)

function terapkanTema() {
  document.body.dataset.theme = temaGelap.value ? 'dark' : 'light'
  localStorage.setItem('theme', temaGelap.value ? 'dark' : 'light')
}

function ubahTema() {
  temaGelap.value = !temaGelap.value
  terapkanTema()
}

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <KepalaProfil
    :profil="profil"
    :tema-gelap="temaGelap"
    @ubah-tema="ubahTema"
  />

  <main id="utama">
    <section id="tentang">
      <h2>Tentang saya</h2>

      <figure class="foto">
        <img
          src="/fotoAldi.JPG"
          alt="Foto Aldi semi formal."
          width="400"
          height="600"
          fetchpriority="high"
        />
        <figcaption>Profil mahasiswa Informatika</figcaption>
      </figure>

      <p>
        Saya mahasiswa Program Studi Informatika Universitas Islam Indonesia.
        Saya merupakan mahasiswa angkatan 25 yang berasal dari Kota Yogyakarta.
        Minat saya salah satunya mempelajari hal-hal baru, seperti saat ini
        saya sedang belajar HTML dan CSS. Hal tersebut bukan merupakan hal
        yang asing bagi saya, tetapi saya mempelajarinya agar lebih memahami
        hal tersebut.
      </p>

      <div class="tabel-wrap">
        <table class="tabel-kegiatan">
          <caption>Kegiatan yang saya ikuti semester ini</caption>
          <thead>
            <tr>
              <th scope="col">Kegiatan</th>
              <th scope="col">Peran</th>
              <th scope="col">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Praktikum PABW</td>
              <td>Peserta</td>
              <td>September 2026</td>
            </tr>
            <tr>
              <td>Event kesenian</td>
              <td>Crew teknis</td>
              <td>Oktober 2026</td>
            </tr>
            <tr>
              <td>Event Pentas Teater</td>
              <td>SoundMan</td>
              <td>Agustus 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="karya">
      <h2>Karya saya</h2>

      <TombolFilter />
      <DaftarProyek />

      <button
        id="atur-ulang"
        type="button"
        @click="aturUlangPilihan"
      >
        Atur Ulang
      </button>
    </section>

    <section id="kontak">
      <h2>Hubungi saya</h2>
      <p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>
      <FormKontak />
    </section>

    <details>
      <summary>Pengalaman Organisasi</summary>
      <p>
        Saya pernah menjadi anggota organisasi OSIS sewaktu SMA dengan
        jabatan sebagai koordinator bidang Informasi Teknologi.
      </p>
    </details>

    <article>
      <h2>Pengalaman</h2>
      <p>
        Saya memiliki pengalaman dalam kegiatan organisasi dan acara kesenian.
        Pengalaman tersebut membantu saya belajar bekerja sama, mengatur waktu,
        berkomunikasi, serta bertanggung jawab terhadap tugas yang diberikan.
      </p>
    </article>

    <section id="pendidikan">
      <h2>Pendidikan</h2>
      <ol aria-labelledby="pendidikan">
        <li>SDN Condongcatur, lulus 2019</li>
        <li>SMPN 1 Kasihan, lulus 2022</li>
        <li>SMAN 10 Yogyakarta, lulus 2025</li>
      </ol>
    </section>
  </main>

  <footer class="kaki">
    <p>
      Muhammad Pramudya Aldiansyah · 25523082 ·
      <time datetime="2026">2026</time>
    </p>
  </footer>
</template>