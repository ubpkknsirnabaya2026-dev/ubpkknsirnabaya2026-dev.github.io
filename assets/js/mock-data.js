/**
 * Data demo untuk tahap desain statis.
 * Nama anggota selain Faisal masih berupa placeholder dan dapat diganti nanti.
 */
window.MOCK_DATA = Object.freeze({
  programs: [
    {
      id: "PRK-001",
      title: "Bank Sampah Digital untuk pencatatan yang lebih teratur",
      category: "Digitalisasi",
      date: "20 Juli 2026",
      location: "Dusun Kalihurip",
      summary: "Pengembangan prototipe layanan pencatatan nasabah, setoran, dan informasi pengelolaan sampah berbasis digital.",
      image: "assets/img/programs/program-01.svg",
      contributors: ["FA", "A2", "A3", "+2"]
    },
    {
      id: "PRK-002",
      title: "Alat press botol sebagai langkah kecil mengurangi volume sampah",
      category: "Lingkungan",
      date: "24 Juli 2026",
      location: "Desa Sirnabaya",
      summary: "Dokumentasi proses perakitan, pengujian, serta pengenalan alat press botol kepada masyarakat.",
      image: "assets/img/programs/program-02.svg",
      contributors: ["A2", "A4", "+3"]
    },
    {
      id: "PRK-003",
      title: "Edukasi 3R bersama anak-anak dan masyarakat",
      category: "Edukasi",
      date: "22 Juli 2026",
      location: "Desa Sirnabaya",
      summary: "Mengenalkan konsep reduce, reuse, dan recycle melalui kegiatan yang mudah dipahami.",
      image: "assets/img/programs/program-03.svg",
      contributors: ["A3", "A5", "+4"]
    },
    {
      id: "PRK-004",
      title: "Mengenal Kalihurip melalui profil wilayah digital",
      category: "Publikasi",
      date: "26 Juli 2026",
      location: "Dusun Kalihurip",
      summary: "Portal informasi mengenai karakter wilayah, potensi, kegiatan warga, dan perkembangan dusun.",
      image: "assets/img/programs/program-04.svg",
      contributors: ["FA", "A2", "+2"]
    },
    {
      id: "PRK-005",
      title: "Dokumentasi kegiatan sebagai arsip bersama",
      category: "Dokumentasi",
      date: "27 Juli 2026",
      location: "Desa Sirnabaya",
      summary: "Pengumpulan foto dan video setiap program untuk publikasi serta arsip KKN Desa Sirnabaya 2026.",
      image: "assets/img/programs/program-05.svg",
      contributors: ["A4", "A6", "+5"]
    },
    {
      id: "PRK-006",
      title: "Pendataan warga untuk mendukung informasi yang lebih mudah dicari",
      category: "Pendataan",
      date: "28 Juli 2026",
      location: "Desa Sirnabaya",
      summary: "Penyusunan data dasar warga dan kebutuhan wilayah secara bertahap bersama masyarakat.",
      image: "assets/img/programs/program-06.svg",
      contributors: ["A5", "A6", "+2"]
    }
  ],
  members: [
    { id: "AGT-001", name: "Faisal Alrico", study: "Informatika · Divisi PDD", programs: 4, image: "assets/img/portraits/member-01.svg" },
    { id: "AGT-002", name: "Anggota 02", study: "Program Studi · Divisi", programs: 3, image: "assets/img/portraits/member-02.svg" },
    { id: "AGT-003", name: "Anggota 03", study: "Program Studi · Divisi", programs: 5, image: "assets/img/portraits/member-03.svg" },
    { id: "AGT-004", name: "Anggota 04", study: "Program Studi · Divisi", programs: 2, image: "assets/img/portraits/member-04.svg" },
    { id: "AGT-005", name: "Anggota 05", study: "Program Studi · Divisi", programs: 4, image: "assets/img/portraits/member-05.svg" },
    { id: "AGT-006", name: "Anggota 06", study: "Program Studi · Divisi", programs: 3, image: "assets/img/portraits/member-06.svg" },
    { id: "AGT-007", name: "Anggota 07", study: "Program Studi · Divisi", programs: 3, image: "assets/img/portraits/member-07.svg" },
    { id: "AGT-008", name: "Anggota 08", study: "Program Studi · Divisi", programs: 2, image: "assets/img/portraits/member-08.svg" }
  ],
  gallery: [
    { id: "MED-001", type: "foto", orientation: "landscape", title: "Kegiatan bersama warga", meta: "Foto · 16:10", image: "assets/img/gallery/gallery-01.svg" },
    { id: "MED-002", type: "video", orientation: "portrait", title: "Cuplikan edukasi 3R", meta: "Video · 9:16", image: "assets/img/gallery/gallery-02.svg" },
    { id: "MED-003", type: "foto", orientation: "portrait", title: "Potret kegiatan lapangan", meta: "Foto · 4:5", image: "assets/img/gallery/gallery-03.svg" },
    { id: "MED-004", type: "foto", orientation: "landscape", title: "Diskusi program kerja", meta: "Foto · 3:2", image: "assets/img/gallery/gallery-04.svg" },
    { id: "MED-005", type: "video", orientation: "landscape", title: "Dokumentasi proses program", meta: "Video · 16:9", image: "assets/img/gallery/gallery-05.svg" },
    { id: "MED-006", type: "foto", orientation: "square", title: "Kebersamaan tim KKN", meta: "Foto · 1:1", image: "assets/img/gallery/gallery-06.svg" },
    { id: "MED-007", type: "foto", orientation: "portrait", title: "Aktivitas bersama anak-anak", meta: "Foto · 4:5", image: "assets/img/gallery/gallery-07.svg" },
    { id: "MED-008", type: "foto", orientation: "landscape", title: "Lingkungan Desa Sirnabaya", meta: "Foto · 16:10", image: "assets/img/gallery/gallery-08.svg" }
  ]
});
