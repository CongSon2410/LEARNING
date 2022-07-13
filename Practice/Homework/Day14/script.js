function Bai1(){
    let input = prompt("Moi ban nhap");
    document.getElementById("thep1").innerHTML = input;
}

function Bai2(){
    let ho = prompt("Moi ban nhap ho");
    let ten = prompt("Moi ban nhap ten");
    document.getElementById("thep2").innerHTML = "Tôi tên là " + ho + ' ' + ten;
}

function Bai3(){
    let a = prompt("Moi ban nhap a");
    let b = prompt("Moi ban nhap b");
    let cong = a + b;
    let tru = a - b;
    let nhan = a * b;
    let chia = a / b;
    if(a!= null && b!= null){
        document.getElementById("thep3tong").innerHTML = cong;
        document.getElementById("thep3hieu").innerHTML = tru;
        document.getElementById("thep3tich").innerHTML = nhan;
        document.getElementById("thep3thuong").innerHTML = chia;
    }
}

function Bai4(){
    let random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random").innerHTML = random;
}

function nhietdoC(){
    let F = prompt("Moi ban nhap nhiet do F");
    let C = (F - 32) * 5/9;
    document.getElementById("nhietdo").innerHTML = C;

}

function nhietdoF(){
    let C = prompt("Moi ban nhap nhiet do C");
    let F = C * 9 / 5 + 32;
    document.getElementById("nhietdo").innerHTML = F;

}

function loading(){
    document.getElementById("loadingg").style.width = "500px";
}


function HienThi(){
    document.querySelector('div.display').innerText = document.querySelector("input").value;
}

function FindMax(){
    let a = prompt("Moi ban nhap a");
    let b = prompt("Moi ban nhap b");
    let c = prompt("Moi ban nhap c");
    document.getElementById("max").innerHTML = "Gia tri max la: " + Math.max(a, b, c);
}