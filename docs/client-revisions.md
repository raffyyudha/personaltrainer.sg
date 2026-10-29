# Pemeriksaan revisi klien — 29 Oktober 2026

Revisi kedua digunakan ketika wording berbeda dari revisi pertama. Perubahan berada di repository lokal; belum diterapkan ke hosting live.

## Cakupan perubahan

| Bagian | Hasil |
| --- | --- |
| Template bersama | Berlaku untuk 19.866 URL programmatic yang sudah ada |
| Data programmatic yang berubah | 7.602 URL, termasuk 2.395 perubahan intro |
| Halaman kondominium | 1.050 URL; syarat fasilitas ditampilkan langsung setelah intro pada keempat layout |
| Halaman utama yang diubah | Services, Contact, About, Results, Personal Trainer Cost Singapore |
| URL programmatic baru | 0; seluruh slug sebelumnya dipertahankan |
| Koreksi ActiveSG baru | 0 referensi venue lama ditemukan pada baseline; wording yang sudah sesuai dipertahankan dan paragraf Services/Contact diperbarui sesuai revisi kedua |

Angka klien menjadi “2,000+ Clients Trained Since 2002” pada seluruh layout programmatic. FAQ yang menjanjikan hasil diganti, termasuk salinannya pada halaman utama lain. Data layanan posture, senior dan postpartum diperbaiki; klaim hasil dalam beberapa minggu dihapus. Intro Tampines dan wording postpartum menggunakan teks klien. Label galeri yang sudah sesuai dipertahankan. Referensi ActiveSG hanya tersisa pada data landmark, bukan penawaran venue latihan.

Deskripsi trial menggunakan sesi 90 menit, rincian konsultasi/analisis/assessment/coaching, harga Single $144 dan Couple $216, serta pembebasan biaya hanya jika paket minimum 12 sesi dibeli segera setelah trial. Halaman biaya dan FAQ yang sebelumnya berbeda diselaraskan.

Tidak ada penulisan ulang title atau description untuk optimasi CTR. Perubahan nama/deskripsi layanan medis mengalir ke metadata template terkait untuk memenuhi koreksi klaim global.

## Verifikasi lokal

- `node scripts/check-client-revisions.cjs`: lolos untuk seluruh 19.866 data URL, keunikan slug, ekspresi yang dilarang, pengulangan template dan contoh URL klien.
- `node node_modules/typescript/bin/tsc --noEmit`: lolos.
- `node node_modules/next/dist/bin/next build`: berhasil; 1.015 halaman prerender selesai.
- 20 pemeriksaan HTTP pada server produksi lokal: 18 halaman publik mengembalikan 200 dan canonical sesuai path masing-masing; dua URL tidak dikenal mengembalikan 404 dengan user agent Googlebot.
- Sampel mencakup 11 halaman utama, tiga URL spesifik klien, serta halaman kondominium dari keempat layout. Teks revisi, angka klien, disclaimer kondominium dan canonical diperiksa dari HTML hasil render.
- Semua halaman utama sudah memiliki canonical sendiri; template programmatic membentuk canonical dari slug yang valid. Slug yang tidak valid sekarang memanggil `notFound()` juga pada tahap metadata.

Hostname canonical yang sudah ada (`https://personaltrainer.sg`) dipertahankan. Redirect dan hostname final pada hosting belum dapat diverifikasi.

## Pekerjaan live dan Search Console yang masih diperlukan

Runtime browser/Computer Use gagal dimulai (`The system cannot find the path specified`). Permintaan langsung ke domain live juga gagal terhubung dari lingkungan ini. Tidak ada screenshot atau angka Search Console yang dikarang, dan Validate Fix belum dikirim.

Setelah deployment ke hosting asli dan akses Search Console tersedia, masih perlu:

1. Verifikasi canonical, respons publik dan akses Googlebot di hosting; perbaiki aturan firewall/hosting jika ada 403 yang tidak disengaja.
2. Ambil Performance: tiga bulan terakhir dibanding periode sebelumnya, termasuk clicks, impressions, CTR dan average position.
3. Ambil total indexed/not indexed serta jumlah dan contoh URL untuk crawled/discovered not indexed, duplicate without user-selected canonical, alternate canonical, forbidden 403 dan soft 404. Untuk tiga kategori pada revisi kedua, sertakan lima contoh masing-masing.
4. Jalankan Test Live URL pada lima contoh per kategori terdampak; ambil bukti “URL is available to Google” sebelum Validate Fix.
5. Ambil URL Inspection homepage, Services, Contact, satu halaman kondominium, satu MRT dan satu lokasi.
6. Ekspor 20 halaman dengan impressions tinggi dan nol/sedikit clicks, beserta URL, impressions, clicks, average position, title dan meta description yang live. Tunggu wording pengganti dari klien.

Jumlah indexed/not indexed, jumlah kategori GSC, akses seluruh URL live dan hasil URL Inspection belum terverifikasi. Repository ini menggunakan data TypeScript untuk halaman programmatic; tidak ditemukan koneksi database konten yang dapat diperbarui dari checkout ini.
