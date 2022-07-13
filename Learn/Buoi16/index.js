function Cau1() {
    let n = parseInt(prompt("Nhap vao 1 so n"));
    let result = '';
    let resultChan = '';
    // result = n.forEach((item) => {
    //     item = item + 1;
    // })
    for (let i = 0; i < n; i++) {
        result += i + " ";
    }
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0 && i != 0) {
            resultChan += i + " ";
        }
    }
    document.getElementById("resultc1").innerHTML = result;
    document.getElementById("resultc1Chan").innerHTML = resultChan;
}

function Cau2() {
    const a = parseInt(prompt("Nhap vao so A bat ki"));
    let s = 0;
    let i = 1;
    let biennho = '';
    while (s <= a) {
        i = i + 1;
        s = s + i;
        biennho = i;
    }
    document.getElementById("resultc2").innerHTML = biennho;
}

function Cau3() {
    let n = parseInt(prompt("Nhap vao 1 so N"));
    let stringn = n.toString();
    let dem = 0;
    // đếm các chữ số có trong n
    for (let i = 0; i < stringn.length; i++) {
        dem = dem + 1;
    }

    document.getElementById("demString").innerHTML = "So luong ky tu: " + dem;
    // 12345 tính tổng các chữ số 
    let sum = 0;
    for (let i = 0; i < stringn.length; i++) {
        sum = sum + parseInt(stringn[i]);
    }
    document.getElementById("tinhTong").innerHTML = "Tong la: " + sum;
    // đảo ngược các chữ số trong N
    let ar = stringn.split('').reverse();
    // chuyển string -> array
    console.log(ar)
    let result = ""

    ar.forEach(item => { result = result + item + " " })
    document.getElementById("daoNguoc").innerHTML = "sau khi dao nguoc: " + result;




}

function Cau4() {
    let arr = [1,2,3,4,-5,-6,-7,-8,-9]
    let arram = [];
    let arrduong = [];

    let soam = 0;
    let soduong = 0;
    let soduonglonnhat = 0;
    let soduongnhonhat = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            soam += 1;
            arram.push(arr[i]);
        }
        else {
            soduong += 1;
            arrduong.push(arr[i]);
        }
    }

   arrduong.forEach((item) => 
    {
        if(soduonglonnhat < item)
        {
            soduonglonnhat = item;
        }
    })

    arrduong.forEach((item) => 
    {
        if(item < soduongnhonhat)
        {
            soduongnhonhat  = item;
        }
    })

    document.getElementById("soAm").innerHTML = "Số lượng số âm là: " + soam;
    document.getElementById("soDuong").innerHTML = "Số lượng số dương là: " + soduong;
    
    document.getElementById("soDuongLonNhat").innerHTML = "Số dương lớn nhất là: " + soduonglonnhat;
    document.getElementById("soDuongNhoNhat").innerHTML = "Số dương nhỏ nhất là: " + soduongnhonhat;

}

function Cau21() {
    let a = parseInt(prompt("Nhập vào 1 số n"));
    let sum = 0;
    a.map((item) => {
        sum = sum + item;
    })
    // for(let i=0;i<=a;i++){
    //     sum = sum + i
    // }
    document.getElementById("kqua").innerHTML = "Tổng: " + sum
}
function snt(n){
    if(n < 2){
        return false;
    }
    for (let i = 2; i < (n - 1); i++){
        if (n % i == 0){
            return false;
        }   
    }
    return true;
}

function Cau5(){
    let n = prompt("Nhập số bất kì để ktra có phải số nto hay không?")
    let kqua= '';
    if(snt(n) == true){
        kqua = "đây là số nguyên tố"
    }
    else{
        kqua = "đây 0 là số nguyên tố"
    }

    document.getElementById("snt").innerHTML =kqua;
}

function Cau6(){
    let n = prompt("Nhập n bất kì");
    let stringn = n.toString();
    let arr = [];
    let temp = 0;
    for (let i = 1; i <= n; i++) {
        temp = i;
        arr.push(temp);
    }
    let demsnt = 0;
    let listsnt = []
    arr.forEach((item) => {
        if(snt(item) == true){
            demsnt +=1;
            listsnt.push(item);
        }
        else{
            demsnt +=0
        }
    })
    document.getElementById("countsnt").innerHTML = "Số lượng số nguyên tố trong mảng: " + demsnt;
    document.getElementById("listsnt").innerHTML = "Các số là số nguyên tố trong mảng:" + listsnt;
    console.log(arr);

}