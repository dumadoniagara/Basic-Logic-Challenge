function spiral(n) {
    let arr = new Array(n).fill().map(() => new Array(n).fill());
    let kolomAwal = 0;
    let kolomAkhir = n - 1;
    let barisAwal = 0;
    let barisAkhir = n - 1;
    let num = 0;
    while (barisAwal <= barisAkhir && kolomAwal <= kolomAkhir) {
        for (let i = kolomAwal; i <= kolomAkhir; i++) {
            arr[barisAwal][i] = num;
            num++;
        }
        barisAwal++;
        for (let i = barisAwal; i <= barisAkhir; i++) {
            arr[i][kolomAkhir] = num;
            num++;
        }
        kolomAkhir--;
        for (let i = kolomAkhir; i >= kolomAwal; i--) {
            arr[barisAkhir][i] = num;
            num++;
        }
        barisAkhir--;
        for (let i = barisAkhir; i >= barisAwal; i--) {
            arr[i][kolomAwal] = num;
            num++;
        }
        kolomAwal++
    }
    console.log(arr);
}
spiral(5);
spiral(6);
spiral(7);
