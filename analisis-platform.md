# Analisis Komparatif Platform

## Tabel Perbandingan Platform

| Aspek | Web | Desktop | Mobile |
| :--- | :--- | :--- | :--- |
| **Bahasa utama** | JavaScript, TypeScript, HTML, CSS | C++, C#, Java, Python, Swift (macOS), Rust | Kotlin/Java (Android), Swift/Objective-C (iOS), Dart (Flutter), JavaScript/TypeScript (React Native) |
| **Arsitektur** | Client-Server / Monolithic / Microservices (Aplikasi berjalan di browser dan berkomunikasi dengan server lewat API) | Standalone / Client-Server (Aplikasi mengeksekusi kode secara langsung di atas sistem operasi lokal) | Mobile Client-Server / Event-Driven (Aplikasi dieksekusi di OS seluler dengan manajemen memori & daya yang ketat) |
| **Cara distribusi** | Dihosting di Web Server (Akses langsung melalui URL via Browser tanpa instalasi) | File Installer (.exe, .msi, .dmg, .deb) atau Store resmi (Microsoft Store, Mac App Store) | App Store resmi (Google Play Store, Apple App Store) atau file paket (.apk, .aab, .ipa) |
| **Keunggulan** | - Akses lintas platform tanpa instalasi<br>- Pembaruan otomatis di sisi server<br>- Ringan di penyimpanan lokal | - Performa sangat tinggi & akses penuh ke hardware lokal<br>- Dapat berjalan penuh tanpa koneksi internet (offline)<br>- Keamanan data lokal lebih baik | - Sangat portabel & mudah diakses kapan saja<br>- Mendukung fitur perangkat (GPS, Kamera, Sensor, Push Notification)<br>- Pengalaman pengguna (UX) yang sangat responsif |
| **Keterbatasan** | - Sangat bergantung pada koneksi internet<br>- Akses ke perangkat keras (hardware) terbatas<br>- Performa kalah dibanding aplikasi native | - Memerlukan instalasi & ruang penyimpanan besar<br>- Pembaruan aplikasi harus dilakukan manual oleh pengguna<br>- Sulit mendukung banyak OS tanpa *re-engineering* | - Kompatibilitas terbatas oleh ukuran layar & spesifikasi perangkat<br>- Proses persetujuan *App Store* relatif ketat<br>- Konsumsi baterai & memori harus terus dioptimalkan |
| **Contoh aplikasi** | Trello, Figma Web, Google Docs | Visual Studio Code, Adobe Photoshop, Microsoft Word | WhatsApp Mobile, Instagram, Spotify Mobile |

---

## Daftar Referensi

1. **MDN Web Docs.** *Introduction to Web Development & Web Architecture*. Terhubung pada: [https://developer.mozilla.org](https://developer.mozilla.org)
2. **Android Developers & Apple Developer Documentation.** *Mobile Application Concepts, Architecture, and Distribution Guidelines*. Terhubung pada: [https://developer.android.com](https://developer.android.com) dan [https://developer.apple.com](https://developer.apple.com)
3. **Sommerville, Ian.** (2015). *Software Engineering* (10th Edition). Pearson. (Membahas arsitektur perangkat lunak desktop, client-server, dan aplikasi terdistribusi).

---


## Refleksi

1. **Platform yang paling menarik untuk dipelajari:**
   Platform **Mobile** merupakan yang paling menarik bagi saya untuk dipelajari. Platform ini memiliki keunikan karena aplikasinya terintegrasi erat dengan hardware ponsel sehari-hari, seperti GPS, kamera, dan berbagai sensor. Hal tersebut memungkinkan kita untuk menciptakan pengalaman pengguna (*user experience*) yang sangat interaktif dan personal untuk mendukung aktivitas pengguna modern.

2. **Tantangan terbesar saat setup environment:**
   Tantangan terbesar yang saya hadapi adalah kompleksitas konfigurasi *dependency* serta kebutuhan sumber daya sistem yang tinggi. Proses instalasi SDK, emulator seluler, hingga pengaturan *path* dan versi bahasa pemrograman sering kali memicu konflik *compatibility issue*. Selain itu, emulator membutuhkan konsumsi RAM dan CPU yang besar, sehingga membuat kinerja komputer menjadi terasa lambat saat proses pemuatan (*build*).

3. **Rencana untuk mengatasi tantangan tersebut:**
   Saya merencanakan dua langkah utama untuk mengatasi tantangan tersebut. Pertama, saya akan menggunakan *version manager* (seperti NVM atau SDKMAN) untuk memastikan stabilitas versi *dependency*. Kedua, untuk menyiasati beban berat emulator, saya akan menggunakan perangkat fisik (*physical device*) secara langsung melalui fitur *USB Debugging* atau *Wireless Debugging* agar proses pengujian aplikasi berjalan jauh lebih ringan, cepat, dan efisien.