# Portal KKN Desa Sirnabaya 2026

Tahap 2: desain halaman utama statis untuk GitHub Pages.

## Struktur

- `index.html` — halaman utama portal.
- `assets/css/style.css` — seluruh tampilan dan responsivitas.
- `assets/js/config.js` — konfigurasi API Apps Script.
- `assets/js/mock-data.js` — data demo sebelum database disambungkan.
- `assets/js/main.js` — render program, anggota, galeri, filter, dan navigasi.
- `assets/img/` — aset placeholder yang nantinya dapat diganti foto asli.

## Menjalankan

Buka `index.html` langsung atau jalankan server lokal:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Upload ke GitHub Pages

Salin seluruh isi folder ini ke repository:

```text
ubpkknsirnabaya2026-dev.github.io
```

Pastikan `index.html` berada tepat di root repository, bukan di dalam folder tambahan.

## Tahap Apps Script nanti

Pada `assets/js/config.js`:

```js
USE_MOCK_DATA: false,
API_URL: "URL_WEB_APP_APPS_SCRIPT"
```

Endpoint awal yang diharapkan:

```text
?action=getHome
```

Format respons:

```json
{
  "success": true,
  "data": {
    "programs": [],
    "members": [],
    "gallery": []
  }
}
```

## Catatan

Nama anggota selain Faisal masih placeholder. Tautan halaman detail berita dan profil juga sudah disiapkan, tetapi file halaman detail akan dibuat pada tahap lanjutan.
