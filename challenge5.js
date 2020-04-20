// Fungsi yang apabila :
// diawali huruf vokal, fungsi langsung mengembalikan kata tersebut.
// apabila kata diawali huruf konsonan, huruf konsonan tersebut dipindahkan ke akhir kata dan menambahkan kata 'nyo' di katanya.

function stringManipulation(word){
    // fungsi dengan menggunakan loop
    
    let n = word.charAt(0);
    let vocal = ["a","i","u","e","o"];

    for(i=0; i<vocal.length; i++){
        if(n == vocal[i]){
            return console.log(word);
        } else {
            return console.log(word.slice(1)+n+"nyo");
        }
    }   
}

stringManipulation('ayam'); // "ayam"
stringManipulation('bebek') // "ebekbnyo"
// stringManipulation('angsa');
// stringManipulation('babon');

// charAt(0) --> mengembalikan nilai huruf index ke-0

// let str = "aA";
// let n = str.charAt(0);
// console.log(n);









