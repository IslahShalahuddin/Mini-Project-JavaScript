function menghitungCheckout (harga, jumlah, isMember) {   
    // 1. Validasi Input 
    if (typeof harga !== "number" || 
        harga <= 0 || 
        !Number.isFinite(harga)) {
        return "error: Harga Produk Tidak Valid";
    } 
    else if (typeof jumlah !== "number" || 
        jumlah <= 0 || 
        !Number.isInteger(jumlah)) {
        return "error: Jumlah Produk Tidak Valid";
    }
    else if (typeof isMember !== "boolean") {
        return "Status Member Tidak Valid";
    }
    // 2. Hitung Subtotal
    const subTotal = harga * jumlah;

    // 3. Hitung Diskon Kalo member
    const diskon = isMember ? subTotal * 10 / 100 : 0;
    const totalSetelahDiskon = subTotal - diskon;

    // 4. Hitung ongkir
    const ongkir = totalSetelahDiskon >= 250000 ? 0 : 15000;

    // 5. Hitung Total Pembayaran
    const totalPay = totalSetelahDiskon + ongkir;

    // 6. Menampilkan Hasil
    return {
        subTotal,
        diskon,
        totalSetelahDiskon,
        ongkir,
        totalPay
    }
}

// ---------------
// Contoh Data 1
const harga1 = 100000;
const Jumlah = 3 ;
const isMember = true;
const hasil1 = menghitungCheckout(harga1, Jumlah, isMember);

console.log("Contoh 1");
console.log(hasil1);

// Contoh Data 2
const harga2 = 100000;
const Jumlah2 = 3 ;
const isMember2 = false;
const hasil2 = menghitungCheckout(harga2, Jumlah2, isMember2);

console.log("Contoh 2");
console.log(hasil2);

// Contoh Data 3
const harga3 = 50000;
const Jumlah3 = 2 ;
const isMember3 = false;
const hasil3 = menghitungCheckout(harga3, Jumlah3, isMember3);

console.log("Contoh 3");
console.log(hasil3);

// Contoh Data 4
const harga4 = 250000;
const Jumlah4 = 1 ;
const isMember4 = false;
const hasil4 = menghitungCheckout(harga4, Jumlah4, isMember4);

console.log("Contoh 4");
console.log(hasil4);

// Contoh Data 5
const harga5 = 300000;
const Jumlah5 = 1 ;
const isMember5 = false;
const hasil5 = menghitungCheckout(harga5, Jumlah5, isMember5);

console.log("Contoh 5");
console.log(hasil5);

// Contoh Data 6
const harga6 = 100000;
const Jumlah6 = 0 ;
const isMember6 = false;
const hasil6 = menghitungCheckout(harga6, Jumlah6, isMember6);

console.log("Contoh 6");
console.log(hasil6);

// Contoh Data 7
const harga7 = 100000;
const Jumlah7 = 1.5 ;
const isMember7 = false;
const hasil7 = menghitungCheckout(harga7, Jumlah7, isMember7);

console.log("Contoh 7");
console.log(hasil7);

// Contoh Data 8
const harga8 = 0;
const Jumlah8 = 1 ;
const isMember8 = false;
const hasil8 = menghitungCheckout(harga8, Jumlah8, isMember8);

console.log("Contoh 8");
console.log(hasil8);