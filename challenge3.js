// Buatlah sebuah fungsi yang mengkonversi angka menjadi huruf romawi.
// Rules atau Hint:
// Buatlah sebuah fungsi dimana terdapat dua array konstan yang digunakan sebagai patokan, dengan suatu aturan tertentu.
// Cek array tersebut dengan menggunakan looping. 
// Apabila number yang dimasukkan lebih besar atau sama dengan nilai index ke-i (dari yang terbesar), maka kurangkan number tersebut dengan array[i]. dan masukkan nilai yang sesuai pada array romawi[i]. Apabila number yang telah dikurangkan tidak >= maka lanjut ke index desimal yang selanjutnya. 
// Note : harus tau aturan pada romawi yang khusus. 

// Gunakan while untuk menentukan apakah suatu index pada array desimal akan terus dieksekusi (mengurangkan) atau tidak (lanjut ke index berikutnya).

function romawi (n){
    let hasilRomawi = "";
    // buat kamus sederhana. --> yang bisa dibangun sama angka lain jangan dibuat kamus.
    const romawi = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    const desimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    for(i = 0; i < desimal.length; i++){
        while(n >= desimal[i]){  //Idenya baris ini akan dieksekusi beberapa kali masih dalam satu index yang sama.
            n -= desimal[i]; 
            hasilRomawi += romawi[i];
        }
    }
    return hasilRomawi;
}

console.log(romawi(1900));
// tes case :
// console.log("Script Testing untuk Konversi Romawi \n");
// console.log("input | expected | result");
// console.log("------|----------|-------");
// console.log("4     | IV       | ", romawi(4));
// console.log("9     | IX       | ", romawi(9));
// console.log("13    | XIII     | ", romawi(13));
// console.log("1453  | MCDLIII  | ", romawi(1453));
// console.log("1646  | MDCXLVI  | ", romawi(1646));

// aturan bilangan romawi
// I : 1
// V : 5
// X : 10
// L : 50
// C : 100
// D : 500
// M : 1.000

// Kasus Khusus
// 1000 --> M
// 900 --> CM
// 500 --> D
// 400 --> CD
// 100 --> C
// 90 --> XC
// 50 --> L
// 10 --> X
// 9 --> IX
// 5 --> V
// 4 --> IV
// 1 --> I

//kasus 1-3
// kasus 4,9,14,19,24,29