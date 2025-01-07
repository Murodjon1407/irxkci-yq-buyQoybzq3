// // 1-savol: Arifmetik operatorlar
// let qoldiq = 5 % 2;
// alert(qoldiq); // Javob: 1

// // 2-savol: Math metodlari
// let randomSon = Math.floor(Math.random() * 10) + 1;
// alert(randomSon); // Javob: 1 dan 10 gacha bo'lgan son

// // 3-savol: Math metodlari
// let son = 12.510;
// let butunSon = Math.floor(son);
// alert(butunSon); // Javob: 12

// // 4-savol: Function
// function nechaHarfdanIborat(soz) {
//   alert(soz.length);
// }
// nechaHarfdanIborat("MARS IT SCHOOL"); // Javob: 13

// // 5-savol: for loop
// function sozniTakrorla() {
//   for (let i = 0; i < 10; i++) {
//     console.log("MARS IT SCHOOL");
//   }
// }
// sozniTakrorla(); // Javob: 10 marta console.log

// // 6-savol: Array methods
// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// let ism = harflar[0] + harflar[11] + harflar[8] + harflar[18];
// console.log(ism); // Javob: Alisher (misol uchun)

// // 7-savol: if else
// let yosh = prompt("Yoshingizni kiriting:");
// if (yosh > 18) {
//   console.log("Siz balog'at yoshiga yetgansiz");
// } else if (yosh == 18) {
//   console.log("Balog'at yoshi muborak!");
// } else {
//   console.log("Siz balog'at yoshiga yetmagansiz");
// }

// // 8-savol: String metodlari vs Array metodlari
// let ism = prompt("Ismingizni kiriting:");
// let teskariIsm = ism.split("").reverse().join("");
// console.log(teskariIsm); // Javob: Ism teskari

// // 9-savol: DOM
// let ism = prompt("Ismingizni kiriting:");
// let yosh = prompt("Yoshingizni kiriting:");
// let h1 = document.createElement("h1");
// h1.innerText = `Ismingiz: ${ism}, Yoshingiz: ${yosh}`;
// h1.style.color = "blue";
// h1.style.fontSize = "24px";
// document.body.appendChild(h1);

// // 10-savol: Array metodlari
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let juftSonlar = sonlar.filter(son => son % 2 === 0);
// console.log(juftSonlar); 
