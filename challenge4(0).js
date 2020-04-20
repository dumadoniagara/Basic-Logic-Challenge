// Bilangan prima adalah bilangan asli yang lebih besar dari angka 1, yang faktor pembaginya adalah 1 dan bilangan itu sendiri.

function prima(n){
    check2 = false;

    for(i=2; i < n; i++){
        if(n % i != 0 && n%n == 0) {
           check2 = true;
        }
    }
        if (check2){
            return "Bilangan Prima";
        } else {
            return "Bukan Bilangan Prima";
        }
}

console.log(3);

