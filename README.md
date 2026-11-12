# Belajar Matematika untuk STK Teknik

Modul matematika kelas 12 (wajib + peminatan) sebagai website statis: 12 bab, kunci jawaban, glosarium Indonesia–Jerman, dan lembar rumus yang bisa dicetak (`rumus.html`).

Tidak perlu build apa pun. KaTeX sudah disertakan di `assets/katex`, jadi rumus tampil tanpa internet.

## Upload ke GitHub Pages
1. Buat repository baru di GitHub (misalnya `belajar-matematika`), set Public.
2. Upload **isi** folder ini (bukan foldernya) lewat "Add file → Upload files". Pastikan `index.html`, folder `assets`, dan file `.nojekyll` ikut.
3. Buka Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)` → Save.
4. Tunggu 1–2 menit. Alamatnya: `https://USERNAME.github.io/belajar-matematika/`

Catatan: file `.nojekyll` bersifat tersembunyi. Kalau tidak ikut terpilih saat upload, buat file kosong bernama `.nojekyll` di repo lewat "Create new file".

## Struktur
- `index.html` landing page (daftar modul), `assets/landing.css` gayanya
- `mathe/` modul Matematika (berdiri sendiri, punya `assets/` sendiri). Modul baru: buat folder baru di root lalu tambahkan kartu di `index.html`
- Di dalam `mathe/`: `index.html` beranda modul, `panduan.html` cara pakai + jadwal 8 minggu
- `bab-1.html` … `bab-12.html` materi
- `kunci.html` kunci jawaban, `glosarium.html` istilah, `rumus.html` lembar rumus (Ctrl+P untuk cetak)
- Progres "bab selesai" disimpan di browser masing-masing.
