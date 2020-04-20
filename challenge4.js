// Buat sebuah function IndexPrime yang memiliki sebuah parameter (asumsi nama parameter adalah param1) yang berisi angka. Buat code di dalam function tersebut yang menampilkan angka prima urutan ke param1.

function indexPrime(param1){
    let cek = false;
    let counter = 1;
    const arr=[];
    //generasi angka hingga param1 terpenuhi
    let angka = 1;
    
        while(counter<=param1){
            //cek bilangan prima
            if(angka==1){
                cek = false;
            } else if (angka==2){
                cek = true;
            } else {
                for(i=2; i<angka; i++){ //5: 4--> 4/2() 
                    if(angka%i==0){
                        cek = false;
                        break;
                    } else{
                        cek = true;
                    }
                } 
            }

            if(cek==true){
                arr.push(angka);
                counter++;
            }
            angka++;
        }
    return arr[arr.length-1];
}


console.log(indexPrime(4)); // result => 7
console.log(indexPrime(500)); // result => 3571
console.log(indexPrime(37786)); // result => 450881


// function indexPrime (param1){
//     let arr = [];
//     let bil;
//     for(i=1; i<=param1; i++){
//         bil = i;
//         if(bil%2==0){
//         arr.push(bil); 
//         }                                                                                               
//     }
//     return arr[arr.length-1];
// }