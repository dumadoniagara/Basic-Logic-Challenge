// membuat fungsi untuk memfilter bilangan prima

function indexPrime(param1){
    let arr = [];
    let check = true;
    let numGen = 5, i=2, counter=0;

    if (param1==1){
        arr.push(2);
    } else if(param1 > 1) {
        while(counter<param1){
            arr = [2];
            for (i=2; i<numGen; i++){
                if(numGen%i == 0){
                    // doing nothing
                }else{
                    counter++;
                }
            }
            arr.push(numGen);
            numGen++;
        }
    }
    return arr;
}
console.log(indexPrime(3));
    