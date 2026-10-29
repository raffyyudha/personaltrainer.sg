# Pemeriksaan revisi klien — 29 Oktober 2026

Revisi kedua digunakan ketika wording berbeda dari revisi pertama. Perubahan awal sudah ditemukan pada sampel website live. Koreksi tambahan dari audit ulang masih berada di repository lokal dan perlu commit/push agar masuk deployment berikutnya.

## Cakupan perubahan

| Bagian | Hasil |
| --- | --- |
| Template bersama | Berlaku untuk 19.866 URL programmatic yang sudah ada |
| Data programmatic yang berubah pada tahap awal | 7.602 URL, termasuk 2.395 perubahan intro; audit lanjutan juga memperbaiki data layanan/demografi |
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

### Temuan dan koreksi audit ulang

Pemeriksaan langsung di luar sandbox berhasil mengakses website. Domain `https://personaltrainer.sg` mengembalikan redirect 308 menuju `https://www.personaltrainer.sg`, sedangkan canonical pada halaman live masih memakai domain tanpa `www`. Canonical, metadataBase, sitemap, referensi sitemap pada robots, dan URL structured data sekarang diselaraskan ke hostname final `www` di kode lokal. Homepage menggunakan canonical `https://www.personaltrainer.sg/`.

Audit juga menemukan satu FAQ berulang yang menyatakan “will make you achieve your goals faster”, klaim “100% safe” pada pad work, istilah “joint lubrication”, serta dua keterangan waiver trial yang belum persis sesuai kalimat klien. Wording tersebut sudah dikoreksi, termasuk salinan FAQ pada About, Contact, Services dan Results. Wording layanan home/condo juga diperjelas agar penggunaan fasilitas bergantung pada izin estate.

Pemeriksaan regresi diperluas untuk mencakup temuan ini, teks trial yang persis, hostname final dan keutuhan sitemap: tetap 19.866 URL programmatic ditambah 11 halaman utama, tanpa tambahan path.

Setelah koreksi tambahan, build produksi dan TypeScript kembali berhasil. Pemeriksaan 20 halaman pada server produksi lokal dan robots juga lolos, termasuk canonical dengan hostname `www`, hilangnya wording tambahan yang ditandai, keempat layout kondominium, dan respons 404. URL homepage dinormalisasi oleh Next.js tanpa slash akhir pada tag canonical; secara URL tetap mengacu pada root `https://www.personaltrainer.sg/` yang sama.

### Sampel website live pada audit ulang

| URL | Respons |
| --- | --- |
| `/` | 200 |
| `/services` | 200 |
| `/contact` | 200 |
| `/singapore` | 200 |
| `/singapore/personal-training-tampines-singapore` | 200 |
| `/singapore/posture-rehab-the-sail-at-marina-bay-singapore` | 200 |
| `/singapore/personal-trainer-for-postpartum-near-city-hall-mrt-singapore` | 200 |
| `/singapore/nonexistent-client-revision-page` | 404 |

Sampel memakai user agent Googlebot. Ketiga contoh programmatic klien sudah menampilkan angka klien baru dan deskripsi trial baru; contoh kondominium menampilkan syarat fasilitas, dan contoh postpartum menampilkan wording pengganti tanpa klaim healing. Contact masih memuat FAQ “will make you achieve your goals faster” sebelum koreksi tambahan ini dipublikasikan. Semua tujuh halaman publik yang diperiksa masih memiliki canonical tanpa `www` pada hosting saat audit. Tidak ada 403 pada tujuh sampel ini; hasil tersebut tidak membuktikan bahwa seluruh URL publik bebas 403 atau bahwa Google Search Console Live Test sudah lolos.

## Pekerjaan live dan Search Console yang masih diperlukan

Runtime browser/Computer Use gagal dimulai (`The system cannot find the path specified`). Permintaan langsung ke domain berhasil setelah akses jaringan di luar sandbox; pembacaan web yang memakai cache ternyata masih bisa menampilkan versi lama. Akses akun Search Console dan screenshot belum tersedia. Validate Fix belum dikirim.

Setelah deployment ke hosting asli dan akses Search Console tersedia, masih perlu:

1. Verifikasi canonical, respons publik dan akses Googlebot di hosting; perbaiki aturan firewall/hosting jika ada 403 yang tidak disengaja.
2. Ambil Performance: tiga bulan terakhir dibanding periode sebelumnya, termasuk clicks, impressions, CTR dan average position.
3. Ambil total indexed/not indexed serta jumlah dan contoh URL untuk crawled/discovered not indexed, duplicate without user-selected canonical, alternate canonical, forbidden 403 dan soft 404. Untuk tiga kategori pada revisi kedua, sertakan lima contoh masing-masing.
4. Jalankan Test Live URL pada lima contoh per kategori terdampak; ambil bukti “URL is available to Google” sebelum Validate Fix.
5. Ambil URL Inspection homepage, Services, Contact, satu halaman kondominium, satu MRT dan satu lokasi.
6. Ekspor 20 halaman dengan impressions tinggi dan nol/sedikit clicks, beserta URL, impressions, clicks, average position, title dan meta description yang live. Tunggu wording pengganti dari klien.

Jumlah indexed/not indexed, jumlah kategori GSC, akses seluruh URL live dan hasil URL Inspection belum terverifikasi. Repository ini menggunakan data TypeScript untuk halaman programmatic; tidak ditemukan koneksi database konten yang dapat diperbarui dari checkout ini.
