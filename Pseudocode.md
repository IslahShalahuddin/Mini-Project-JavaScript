START

INPUT harga
INPUT jumlah
INPUT isMember

JIKA harga bukan angka positif
    TAMPILKAN pesan error
END

JIKA jumlah bukan bilangan bulat positif
    TAMPILKAN pesan error
END

subtotal = harga * jumlah

JIKA isMember adalah true
    diskon = subtotal * 10%
 Kalau tidak isMember
    diskon = 0
END

totalSetelahDiskon = subtotal - diskon

JIKA totalSetelahDiskon >= 250000
    ongkir = 0
 Kalau totalsetelahDiskon < 250000
    ongkir = 15000
END

totalPembayaran = totalSetelahDiskon + ongkir

TAMPILKAN subtotal
TAMPILKAN diskon
TAMPILKAN ongkir
TAMPILKAN totalPembayaran

END