//input
let nilai = 90;
//proses
if (nilai >= 95 && nilai <= 100){
    console.log("Teacher's Award");
} else if (nilai >=90 && nilai < 95){
    console.log("Honors");
} else if (nilai >=80 && nilai < 90){
    console.log("Graduate");
} else if (nilai >= 65 && nilai < 80){
    console.log("Participant");
} else {
    console.log("Fail");
}