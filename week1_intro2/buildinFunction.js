/* Array.sort() merupakan salah satu array method yang 
berfungsi untuk mengurutkan element pada array */

const arr1 = [2,35,7,9,4,1,5,6]
const sortArr = arr1.sort((a,b) => {return a-b})
console.log(sortArr);

/* String.toLowerCase merupakan salah satu String method yang 
berfungsi untuk mengembalikan nilai string menjadi huruf kecil */

let text = "SAYA BELAJAR JAVASCRIPT"
let lowerText = text.toLowerCase()
console.log(lowerText);

/* String.toLowerCase merupakan salah satu String method yang 
berfungsi untuk mengembalikan nilai string menjadi huruf besar 
(kapital) */

let txt = "saya belajar javascript"
let upperText = txt.toUpperCase()
console.log(upperText);

/* String.includes merupakan salah satu String method yang
berfungsi untuk menentukan apakah substring yang ditentukan
ada di dalam string yang diberikan atau tidak. jika iya maka 
akan mengembalikan nilai TRUE dan FALSE jika substring tidak 
ada pada string.*/

let data = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']
let searchData = data[1].includes("an")
console.log(searchData);

/* String.split merupakan salah satu String method yang
berfungsi untuk membagi objek string menjadi array string 
dengan memisahkan string menjadi substring.*/

let sentence = "Saya belajar Javascript"
let splitSentence = sentence.split(" ")
console.log(splitSentence);

/* String.concat merupakan salah satu String method yang
berfungsi untuk menambahkan dua atau lebih string dan 
mengembalikan string tunggal baru*/

let kata1 = "Saya"
let kata2 = "Belajar"
let concatKata = kata1.concat(" " + kata2)
console.log(concatKata);

/* Array.pop  merupakan salah satu Array Method yang
berfungsi untuk menghapus element terakhir dari array
dan mengembalikan element tersebut*/

let angka = [1,7,3,6,8,9]
let popAngka = angka.pop()
console.log(popAngka);

/* Array.push merupakan salah satu Array Method yang
berfungsi untuk menambahkan element terakhir dari array
dan mengembalikan banyak element tersebut*/

let angka1 = [8,3,5,7,6,2]
let pushNumber = angka1.push(10)
console.log(angka1);

/* Array.reverse merupakan salah satu Array Method yang
berfungsi untuk membalikkan urutan element yang pertama
menjadi yang terakhir begitupun sebaliknya*/

let angka2 = [6,4,7,1,3,5,8,11]
let reverseAngka = angka2.reverse()
console.log(reverseAngka);

/* String.substring merupakan salah satu String Method yang
berfungsi untuk mengembalikan karakter dalam string antara 
dua indeks ke dalam string.*/

let kalimat = "Saya senang belajar javascript di fazztrack"
let subKalimat = kalimat.substring(0,11)
console.log(subKalimat);