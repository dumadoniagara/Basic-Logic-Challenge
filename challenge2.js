// buatlah sebuah function deret bilangan kelipatan 3, yang mengembalikan sebuah array dengan panjang array yang dinamis sehingga fungsi tersebut akan menerima parameter number yang akan menjadi nilai dari panjang array yang akan dikeluarkan.

//deret bilangan ini mengikuti aturan sebagai berikut:
// 1. yang apabila habis dibagi dengan 5 cetak 'KAS'
// 2. dan apabila habis dibagi dengan 6 cetak 'KUS'
// 3. dan apabila bisa dibagi oleh angka 5 dan 6 cetak 'KASKUS'.

function deretKaskus(n) {
    let arr = []; //bikin array kosong'  
    let panjang = n * 3;
    for (let i = 3; i < panjang; i += 3) { //parameter for bisa  di null-in msalnya for(i=0: i<10;){...i++}
        // for (let i=3; i<=30; i+=3) kalo di console.log(i) --> bilangan kelipatan 3
        if (i % 5 == 0 && i % 6 == 0) {
            arr.push("KASKUS");
        } else if (i % 6 == 0) {
            arr.push("KUS");
        } else if (i % 5 == 0) {
            arr.push("KAS");
        } else {
            arr.push(i);
        }
    }
    return arr;
}
console.log(deretKaskus(10)); //print
// output:
// [3,"KUS",9,"KUS","KAS","KUS",21,"KUS",27,"KASKUS"]
// [3,6,9,12,15,18,21,24,27,30]
