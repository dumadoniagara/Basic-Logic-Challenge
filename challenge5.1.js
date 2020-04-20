// Challenge5 tanpa menggunakan loop

function stringManipulation(word){
    let n = word.charAt(0);
    if(n=="a"||n=="i"||n=="u"||n=="e"||n=="o"){
        return console.log(word);
    } else {
        return console.log(word.slice(1)+n+"nyo");
    }
} 

stringManipulation('ayam'); // "ayam"
stringManipulation('bebek'); // "ebekbnyo"
stringManipulation('geprek');
stringManipulation('angsa');
stringManipulation('entok');
stringManipulation('ikan');