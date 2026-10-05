# Worksheet P5 — Layout Modern: Flexbox dan Grid

## Dasar
Program ini merupakan modifikasi dari WS-4. Isi, warna, token, JavaScript tema, dan struktur utama dipertahankan. Perubahan utama ada pada `css/layout.css` dan `css/komponen.css`.

## Worksheet A

### A.1 Kerangka halaman
- Baris pertama: `auto`
- Baris kedua: `1fr`
- Baris ketiga: `auto`
- Kolom isi: `16rem 1fr`

### A.2 Sumbu dan arah
- Header/navbar: baris, sumbu utama horizontal, sumbu silang vertikal.
- Baris elemen kartu/galeri: baris, sumbu utama horizontal, sumbu silang vertikal.
- Bagian samping: secara konseptual kolom, sumbu utama vertikal.

### A.3 Kapan flex, kapan grid
- Kepala halaman: Flex, karena elemen disusun dalam satu arah.
- Isi halaman: Grid, karena membutuhkan kolom dan baris.
- Galeri karya: Grid, karena kartu disusun dalam beberapa kolom/baris dan jumlah kolom dapat menyesuaikan.
- Isi satu kartu: Grid digunakan untuk menyusun isi secara vertikal; bagian yang benar-benar satu arah dapat menggunakan Flex.

## Worksheet B
`body` dipakai sebagai kerangka Grid agar tidak perlu menambah wrapper `.page` ke HTML WS-4:
```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}
```

Header tetap menggunakan Flexbox:
```css
.header-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}
```

Isi menggunakan Grid:
```css
main {
  display: grid;
  grid-template-columns: minmax(0, 16rem) minmax(0, 1fr);
  gap: var(--space-6);
}
```

## Worksheet C
Daftar karya WS-4 dimanfaatkan sebagai galeri adaptif:
```css
#karya > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  gap: var(--space-4);
}
```

Tidak diperlukan media query untuk mengubah jumlah kolom galeri.

## Worksheet D
Area bernama digunakan untuk penempatan:
- `#karya` → `sisi`
- `#tentang` → `utama`
- `#kontak` → `kontak`
- `details` → `pengalaman`
- `article` → `pengalaman2`
- judul dan daftar pendidikan → `pendidikan1` dan `pendidikan2`

## Worksheet E
Perbaikan overflow:
- `min-width: 0` pada item grid.
- `overflow-wrap: anywhere` pada kartu karya.
- Lebar input dibatasi dengan `max-width: 100%`.
- Pada layar sempit, grid utama menjadi satu kolom agar tidak meluber.

## Worksheet F.2
**Potongan kode:** `grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));`

**Dipakai pada:** galeri karya di `komponen.css`.

## Worksheet F.4 — Tiket keluar

**Bagian halaman mana yang memakai flex, dan mengapa flex yang cocok?**  
Header/navbar memakai Flexbox karena elemen-elemennya tersusun dalam satu arah sehingga mudah diatur dengan `gap`, alignment, dan pembagian ruang.

**Bagian halaman mana yang memakai grid, dan mengapa grid yang cocok?**  
Kerangka halaman, isi utama, dan galeri karya memakai Grid karena membutuhkan pengaturan baris dan kolom serta penempatan area.

**Satu kasus meluber yang Anda temui hari ini, dan perbaikannya**  
Isi yang terlalu panjang dapat mendorong ukuran item Grid. Perbaikannya adalah menggunakan `min-width: 0`, `overflow-wrap: anywhere`, dan batas lebar pada elemen form agar isi mengikuti ukuran kotak.

## F.5
**Bagian yang paling sulit:** menentukan pembagian area Grid tanpa mengubah banyak struktur HTML dari WS-4.

**Bagian yang saya ingin dibahas di kelas:** cara memilih Flexbox atau Grid serta penggunaan `grid-template-areas` dan `minmax()` pada layout responsif.
