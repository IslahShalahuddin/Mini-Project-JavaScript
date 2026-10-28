A. Input
- harga: harga satu produk.
- jumlah: jumlah produk yang dibeli.
- isMember: status member, berupa true atau false.

B. Proses
- Memvalidasi harga dan jumlah.
- Menghitung subtotal.
- Menghitung diskon member jika berlaku.
- Menghitung total setelah diskon.
- Menentukan gratis ongkos kirim atau tidak.
- Menghitung total pembayaran.

C. Output
- Pesan error jika input tidak valid.
- Jika valid, hasil perhitungan berupa subtotal, diskon, ongkos kirim, dan total pembayaran.

D. Aturan Keputusan
- Jika harga bukan angka yang valid atau nilainya kurang dari atau sama dengan nol,atau bukan bilangan bulat, program mengembalikan pesan error harga.
- Jika jumlah bukan angka, bukan bilangan bulat, atau nilainya kurang dari atau sama dengan nol, program mengembalikan pesan error jumlah.
- Jika status member bukan true atau false, program mengembalikan pesan error status member.
- Jika pelanggan merupakan member (isMember = true), diskon sebesar 10% dari subtotal. Jika bukan member (isMember = false), tidak mendapatkan diskon.
- Jika total setelah diskon lebih besar atau sama dengan Rp250.000, ongkos kirim gratis.
- Jika total setelah diskon kurang dari Rp250.000, ongkos kirim sebesar Rp15.000.