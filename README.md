# UpWith.io - Freelance Landing Page

Website landing page profesional untuk freelance dengan domain upwith.io. Website ini dirancang untuk menampilkan layanan freelance Anda dengan tampilan modern, responsif, dan menarik.

## Fitur Utama

- **Hero Section** - Header menarik dengan animasi dan statistik
- **Tentang Saya** - Profil dan keahlian Anda
- **Layanan** - 6 jenis layanan freelance (Web Development, UI/UX Design, Digital Marketing, SEO, Mobile App, Business Consulting)
- **Portfolio** - Showcase proyek dengan filter kategori
- **Testimoni** - Ulasan klien dengan rating bintang
- **Paket Harga** - Pricing table dengan toggle bulanan/proyek
- **Kontak** - Form kontak dengan validasi
- **FAQ** - Pertanyaan umum dengan accordion
- **Blog** - Artikel terbaru
- **CTA** - Call-to-action section
- **Footer** - Informasi kontak dan navigasi

## Struktur File

```
upwith-io/
├── index.html          # Halaman utama
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Responsive styles
├── js/
│   ├── main.js         # JavaScript utama
│   ├── form.js         # Form handling
│   └── animations.js   # Animasi tambahan
├── images/             # Gambar-gambar
│   ├── hero-image.png
│   ├── about-image.jpg
│   ├── portfolio-1.jpg
│   ├── portfolio-2.jpg
│   ├── portfolio-3.jpg
│   ├── portfolio-4.jpg
│   ├── portfolio-5.jpg
│   ├── portfolio-6.jpg
│   ├── blog-1.jpg
│   ├── blog-2.jpg
│   ├── blog-3.jpg
│   ├── testimonial-1.jpg
│   ├── testimonial-2.jpg
│   ├── testimonial-3.jpg
│   ├── testimonial-4.jpg
│   └── placeholder.jpg
└── assets/              # Assets tambahan
    └── favicon.ico
```

## Cara Menggunakan

### 1. Setup Dasar

1. **Clone/Download** repository ini
2. **Upload** ke hosting Anda (contoh: cPanel, Netlify, Vercel, GitHub Pages)
3. **Konfigurasi** domain upwith.io ke hosting Anda

### 2. Customisasi Konten

Edit file `index.html` untuk mengubah:

- **Nama Anda**: Ganti `[Nama Anda]` dengan nama Anda
- **Email**: Ganti `hello@upwith.io` dengan email Anda
- **Telepon**: Ganti `+62 812-3456-7890` dengan nomor telepon Anda
- **Alamat**: Ganti `Jakarta, Indonesia` dengan alamat Anda
- **Jam Kerja**: Sesuaikan dengan jadwal Anda
- **Layanan**: Sesuaikan deskripsi layanan
- **Portfolio**: Ganti gambar dan deskripsi proyek
- **Testimoni**: Ganti dengan testimoni klien asli
- **Harga**: Sesuaikan paket harga
- **Social Media**: Tambahkan link social media Anda

### 3. Gambar

Ganti gambar-gambar placeholder di folder `images/` dengan gambar Anda sendiri:
- `hero-image.png` - Foto profil utama
- `about-image.jpg` - Foto tentang saya
- `portfolio-*.jpg` - Gambar proyek portfolio
- `testimonial-*.jpg` - Foto klien
- `blog-*.jpg` - Gambar artikel blog

### 4. Favicon

Ganti `assets/favicon.ico` dengan favicon website Anda.

## Warna Tema

Warna utama yang digunakan:

- **Primary**: `#6C5CE7` (Ungu)
- **Secondary**: `#00CEC9` (Cyan)
- **Accent**: `#FD79A8` (Pink)
- **Background**: `#FFFFFF` (Putih)
- **Dark Background**: `#1A1A2E` (Biru tua)

Anda bisa mengubah warna ini di file `css/style.css` dengan memodifikasi CSS variables di bagian `:root`.

## Font

Website menggunakan font **Inter** dari Google Fonts. Font ini sudah di-load otomatis di HTML.

## JavaScript Fitur

- **Loading Screen** - Animasi loading saat halaman dimuat
- **Smooth Scroll** - Scroll halus ke section
- **Mobile Menu** - Menu responsif untuk mobile
- **Counter Animation** - Animasi angka statistik
- **Form Validation** - Validasi form kontak
- **Portfolio Filter** - Filter portfolio berdasarkan kategori
- **Pricing Toggle** - Toggle harga bulanan/proyek
- **FAQ Accordion** - Expand/collapse FAQ
- **Back to Top** - Tombol kembali ke atas
- **WhatsApp Float** - Tombol WhatsApp floating

## Responsive Design

Website sudah sepenuhnya responsif dan akan menyesuaikan dengan ukuran layar:

- **Desktop**: > 1200px
- **Tablet Landscape**: 992px - 1199px
- **Tablet Portrait**: 768px - 991px
- **Mobile Landscape**: 576px - 767px
- **Mobile Portrait**: 375px - 575px
- **Small Mobile**: 320px - 374px
- **Extra Small**: < 320px

## Deployment

### Netlify

1. Buat akun di [Netlify](https://www.netlify.com/)
2. Drag & drop folder `upwith-io` ke Netlify
3. Atur custom domain ke upwith.io

### Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Deploy: `vercel --prod`
3. Atur custom domain

### GitHub Pages

1. Push ke repository GitHub
2. Aktifkan GitHub Pages di settings
3. Pilih branch `main` atau `gh-pages`

### Shared Hosting (cPanel)

1. Upload semua file ke public_html
2. Atur domain upwith.io
3. Pastikan file `.htaccess` sudah benar

## SEO Optimization

Website sudah dioptimasi untuk SEO:

- Meta tags (description, keywords, author)
- Open Graph tags untuk social media
- Semantic HTML5
- Alt text untuk gambar
- Mobile-friendly
- Fast loading

## Browser Support

- Chrome (terbaru)
- Firefox (terbaru)
- Safari (terbaru)
- Edge (terbaru)
- Opera (terbaru)

## Lisensi

Website ini dibuat untuk penggunaan pribadi. Anda bebas untuk:
- Menggunakan untuk website pribadi
- Memodifikasi sesuai kebutuhan
- Mendistribusikan dengan menyebutkan sumber

Dilarang:
- Menjual template ini sebagai milik Anda
- Menghapus kredit pembuat

## Kontak & Dukungan

Jika Anda mengalami masalah atau butuh bantuan customisasi, silakan hubungi:
- Email: [Ganti dengan email Anda]
- WhatsApp: [Ganti dengan nomor WhatsApp Anda]

## Catatan

- Ganti semua placeholder `[Nama Anda]`, `hello@upwith.io`, dll. dengan informasi Anda
- Pastikan domain upwith.io sudah terhubung ke hosting
- Test website di berbagai perangkat sebelum launch
- Backup file sebelum melakukan perubahan besar

---

**Made with ❤️ for Digital Professionals**
