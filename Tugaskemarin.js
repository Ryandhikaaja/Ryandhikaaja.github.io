const nilai= 80;
if (nilai >= 75) {
    console.log("Anda Pintar.");
} else {
    console.log("Anda Tidak Pintar.");
}

const jam_tidur = 13.15;
if (jam_tidur >= 20_00) {
    console.log("selamat siang.");
} else {
    console.log("selamat istirahat.");
}

const suhu = 21;
if (suhu >= 35) {
    console.log("hangat");
} else {
    console.log("dingin.");
}

const berat_badan= 90;
if (berat_badan>= 70) {
    console.log("gemuk.");
} else {
    console.log("kurus.");}
    
    
const harga_baju= 100;
if (harga_baju >= 150) {
     console.log("murah.");  
}  else {
    console.log("mahal.");
}







var inivar=6
    var date= new Date ().getHours;
    date >=inivar? console.log("sudah masuk")
                 : console.log("sudah selesai");


var inivar=2
    var date= new Date().getDay;
    date <=inivar? console.log("sudah libur sekolah")
                 : console.log("sudah masuk sekolah");
                 
                 
let angka = 10;
let hasil = (angka >= 15) ? "Positif" : "Negatif";
console.log(hasil);



let tinggi_badan = 150;
let data = (tinggi_badan <=120) ? "tinggi" : "pendek";
console.log(data);



let usia =50;
let keterangan=(usia >=35) ? "tua" : "muda";
console.log(keterangan);








var no=15;
var operator= no ===11 ?"a":
              no > 11 ?"b":
              no < 11 ?"c":
              "nilai"
console.log(operator);


var no=28;
var operator= no ===29 ?"sama":
              no > 29 ?"lebih besar":
              no < 29 ?"lebih kecil":
              "kondisi"
console.log(operator);



//berat badan//
var r= 30; //variabel yang ingin dimasukkan//
const ringan = r > 50 ? "Obesitas"  : r > 45? "Normal": "Kurang Gizi"; //?=kemungkinan pertama(if),:=if else, : terakhir=else//
console.log(ringan);



//ukuran sepatu//
var x= 40; //variabel yang ingin dimasukkan//
const ukuran = x > 35 ? "besar"  : x < 30? "sedang": "kecil"; //?=kemungkinan pertama(if),:=if else, : terakhir=else//
console.log(ukuran);



var no=25;
var kondisi= no === 30 ? "tua":
              no > 30 ?"sangat tua":
              "muda";
              
console.log(kondisi);
