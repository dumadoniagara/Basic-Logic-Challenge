function roman(n) {
    const kamus = {
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let hasil = "";
    for (const romawi in kamus) { //romawi disini adalah key/property bisa diganti namanya, tapi ngerefer ke key di object
        while (n >= kamus[romawi]) {
            hasil += romawi;
            n -= kamus[romawi];
        }
    }
    console.log(hasil);
}