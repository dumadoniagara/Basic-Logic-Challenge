// buatlah sebuah function yang menerima string. String tersebut merupakan suatu pola perhiutungan dan beberapa bilangan namun bilangannya itu sendiri tidak lengkap, dan tugasmu adalah menebak 1 angka yang seharusnya, sehingga apabila bilangan tersebut telah lengkap, makan akan membentuk suatu pola perhitungan yang benar.
// function concat(a,b){
//     return a+b;
// }

function pola(str) {
    let all = str.split(" ");
    let confirm = parseInt(all[2]);

    for (i = 0; i < 10; i++) {
        let arrHasil = Array.from(all[4].toString()).join("").replace('#', i);
        for (j = 0; j < 10; j++) {
            let arrPengali = Array.from(all[0].toString()).join("").replace('#', j);
            if (arrHasil / arrPengali == confirm) {
                return [j, i];
            }
        }
    }
}

console.log(pola("42#3 * 188 = 80#204")); //result : [8,5]
console.log(pola("8#61 * 895 = 78410#5")); //result : [7,9]
console.log(pola("123# * 326 = 403#88"));