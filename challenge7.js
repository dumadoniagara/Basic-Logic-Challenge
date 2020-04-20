
function weirdMultiply(sentence){
    let num = Array.from(sentence.toString()).map(Number); //array 
    let hasil = 1;
    if(num.length==1){ //base case
        return num[0];
    } else{
        for(i=0; i<num.length; i++){
            hasil*=num[i];
        }
    }
    return weirdMultiply(hasil);
}

// weirdMultiply(angka);
console.log(weirdMultiply(39)); // --> 3*9 = 27 --> 2*7 = 14 --> 1*4 = 4;
console.log(weirdMultiply(999)); // --> 9*9*9 = 729 --> 7 * 2 * 9 = 126 --> 1 * 2 * 6 = 12 --> 1*2 = 2;
console.log(weirdMultiply(3)); // --> 3 (hanya karena satu digit)
console.log(weirdMultiply(212));