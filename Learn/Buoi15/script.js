function Bai1(){

    let a = prompt("Nhap so nguyen duong or nguyen am");
    if(a > 0){
        document.getElementById("p1ketqua").innerHTML = "Day la so nguyen duong"
    }
    else{
        document.getElementById("p1ketqua").innerHTML = "Day la so nguyen am"
    }
}

function Bai2(){
    let a = prompt("Nhap a");
    let b = prompt("Nhap b");
    if(a > b){
        document.getElementById("p2ketqua").innerHTML = a
    }
    else{
        document.getElementById("p2ketqua").innerHTML = b
    }
}


function Bai3(){
    let a = prompt("Nhap a");
    let b = prompt("Nhap b");
    let c = prompt("Nhap c");
   document.getElementById("p3ketqua").innerHTML = "Gia tri max la: " + Math.max(a,b,c)
}
function Bai4(){
    let input = prompt("Nhap chuoi bat ki");
    input.trim("chuoinhapbai4")
    document.getElementById("p4ketqua").innerHTML = input
}

function Bai5(){
    let input = prompt("Nhap chuoi bat ki");
    let a=input.trim("chuoinhapbai5");
    a=a.toUpperCase();
    document.getElementById("p5ketqua").innerHTML = a
}

function Bai6(){
    let b = prompt("Nhập chuỗi b");
    let a = prompt("Nhap chuỗi cần tìm kiếm");
    if(b.includes(a)){
        document.getElementById("checkstatus").innerHTML = "YES";
        document.getElementById("first").innerHTML = b.indexOf(a);
        document.getElementById("last").innerHTML = b.lastIndexOf(a);
    }
    else{
        document.getElementById("checkstatus").innerHTML = "NO";  
    }
}

function Bai7(){
    let sdt = document.getElementById("sdt").value;
    let ankytu = sdt.replace(/\d{4}$/, '****');
    let xoa = document.getElementById("sdt").value;;
    // xoa.slice(1,-4).concat("****");

    document.getElementById("ankytu").innerHTML = xoa;   
}
