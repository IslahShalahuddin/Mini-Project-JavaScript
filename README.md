1. Identitas
    - Nama : Islah Shalahuddin
    - Nama Proyek : Program Checkout Produk Sederhana
    - Bahasa Pemrograman : JavaScript
    - Runtime : Node.js

2. Deskripsi Case Study
    Program Checkout Produk Sederhana merupakan program yang dibuat menggunakan JavaScript untuk menghitung total pembayaran pembelian produk.
    Program ini menggunakan fungsi menghitungCheckout(harga, jumlah, isMember) dengan tiga parameter, yaitu harga produk, jumlah produk, dan status keanggotaan pelanggan.
    Program melakukan validasi input untuk memastikan harga dan jumlah produk memenuhi ketentuan serta status member menggunakan tipe data boolean (true atau false).
    Setelah input dinyatakan valid, program menghitung subtotal, diskon member, total setelah diskon, biaya pengiriman, dan total pembayaran.

    Ketentuan Program:

    - Harga produk harus berupa angka yang lebih besar dari nol.
    - Jumlah produk harus berupa bilangan bulat yang lebih besar dari nol.
    - Status member harus berupa nilai boolean (true atau false).
    - Pelanggan yang berstatus member mendapatkan diskon sebesar 10% dari subtotal.
    - Jika total setelah diskon mencapai Rp250.000 atau lebih, pelanggan mendapatkan gratis ongkir.
    - Jika total setelah diskon kurang dari Rp250.000, biaya ongkir sebesar Rp15.000.
    - Jika input tidak valid, program mengembalikan pesan kesalahan.

3. Cara Menjalankan Program
    Langkah-langkah
    - Pastikan Node.js terinstal
    - Simpan kode program dalam file bernama checkout.js.
    - Buka terminal atau Command Prompt.
    - Masuk ke folder tempat file checkout.js disimpan.
    - Jalankan perintah berikut:
    - node checkout.js
    - Program akan menjalankan delapan contoh pengujian dan menampilkan hasilnya di terminal.

4. Ringkasan Penggunaan AI
    - AI digunakan sebagai alat bantu pembelajaran dalam memahami sintaks JavaScript, validasi input, percabangan, tipe data, operator ternary
    - AI juga membantu memberikan penjelasan mengenai logika perhitungan checkout dan memberikan saran untuk memahami serta memeriksa kode program.
    - AI membantu memeriksa kesalahan dalam validasi input yg sempat saya buat ada kesalahan.