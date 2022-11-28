//input

//proses
var kalimat = " Saya Yakin Bisa Lulus Di Hacktiv8 Indonesia"
console.log(kalimat.length);

var cari = kalimat.search("hacktiv8");
console.log(cari);

var filter = kalimat.slice(12, 44);
console.log(filter);

var ganti = kalimat.replace("Saya Yakin", "Insyallah");
console.log(ganti);

var a = kalimat.toUpperCase();
console.log(a);

var b = kalimat.toLowerCase();
console.log(b);
//output