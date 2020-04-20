// buatlah sebuah fungsi untuk memanipulasi kalimat dengan mengikuti aturan pada tantangan sebelumnya (challenge-5)

function sentenceManipulation(sentence){
    let stc = sentence.split(" "); //memasukkan suatu nilai string kedalam array yang terpisahkan oleh spasi
    let hasil = "";
    let cek = false;

    for(i = 0; i < stc.length; i++){
        let n = stc[i].charAt(0);

        if(n=="a"||n=="i"||n=="u"||n=="e"||n=="o"){
            cek = true;
        } else {
            cek = false;
        }
        
        if(cek==true){
            hasil += stc[i] + " ";
        } else{
            hasil += stc[i].slice(1)+n+"nyo" + " ";
        }
    }
    return console.log(hasil);
}

sentenceManipulation ('ibu pergi ke pasar bersama aku'); // "ibu ergipnyo eknyo asarpnyo ersamabnyo aku"
