
// ==========================================
// TUGAS MANDIRI / LAB PRAKTIKUM
// IMPLEMENTASI JAVASCRIPT ES6
// Nama File: tugas-es6.mjs
// ==========================================

// 1. ARRAY OF OBJECTS DATA TRANSAKSI
const transaksi = [
    {
        id: 1,
        barang: "Laptop",
        harga: 7500000,
        qty: 1,
        kategori: "Elektronik"
    },
    {
        id: 2,
        barang: "Mouse",
        harga: 150000,
        qty: 2,
        kategori: "Aksesoris"
    },
    {
        id: 3,
        barang: "Keyboard",
        harga: 350000,
        qty: 1,
        kategori: "Aksesoris"
    },
    {
        id: 4,
        barang: "Smartphone",
        harga: 3500000,
        qty: 1,
        kategori: "Elektronik"
    },
    {
        id: 5,
        barang: "Headset",
        harga: 250000,
        qty: 2,
        kategori: "Aksesoris"
    },
    {
        id: 6,
        barang: "Printer",
        harga: 1800000,
        qty: 1,
        kategori: "Elektronik"
    }
];

// 2. MENAMPILKAN DATA TRANSAKSI
console.log("==================================");
console.log("       DATA TRANSAKSI BELANJA");
console.log("==================================");

transaksi.forEach(({ id, barang, harga, qty, kategori }) => {
    console.log(
        `ID: ${id} | Barang: ${barang} | ` +
        `Harga: Rp${harga.toLocaleString("id-ID")} | ` +
        `Qty: ${qty} | Kategori: ${kategori}`
    );
});

// 3. FILTER() - MENYARING KATEGORI
const kategoriDipilih = "Elektronik";

const hasilFilter = transaksi.filter(
    ({ kategori }) => kategori === kategoriDipilih
);

console.log("\n==================================");
console.log(`TRANSAKSI KATEGORI ${kategoriDipilih.toUpperCase()}`);
console.log("==================================");

hasilFilter.forEach(({ barang, kategori }) => {
    console.log(`Barang: ${barang} | Kategori: ${kategori}`);
});

// 4. MAP() - MENGHITUNG SUBTOTAL
const hasilMap = transaksi.map(
    ({ id, barang, harga, qty, kategori }) => ({
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    })
);

console.log("\n==================================");
console.log("       SUBTOTAL SETIAP BARANG");
console.log("==================================");

hasilMap.forEach(({ barang, harga, qty, subtotal }) => {
    console.log(
        `${barang} | ` +
        `Harga: Rp${harga.toLocaleString("id-ID")} | ` +
        `Qty: ${qty} | ` +
        `Subtotal: Rp${subtotal.toLocaleString("id-ID")}`
    );
});

// 5. REDUCE() - TOTAL KESELURUHAN
const totalBelanja = hasilMap.reduce(
    (total, { subtotal }) => total + subtotal,
    0
);

console.log("\n==================================");
console.log("       TOTAL KESELURUHAN");
console.log("==================================");

console.log(
    `Total Belanja: Rp${totalBelanja.toLocaleString("id-ID")}`
);

// 6. TOTAL BELANJA KATEGORI ELEKTRONIK
const totalElektronik = hasilMap
    .filter(({ kategori }) => kategori === kategoriDipilih)
    .reduce(
        (total, { subtotal }) => total + subtotal,
        0
    );

console.log(
    `Total Elektronik: Rp${totalElektronik.toLocaleString("id-ID")}`
);

console.log("\n==================================");
console.log("       PROGRAM SELESAI");
console.log("==================================");
