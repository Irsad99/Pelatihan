function printSegitiga(angka) {
    if (typeof angka === "number") {
        let temp = ""
        for (let i = 0; i < angka; i++) {
            for (let j = 1; j <= angka-i; j++) {
                temp += j + " "
            }
            temp += "\n"
        }
        return temp
    } else {
        return ("Isi inputan dengan number")
    }
}

console.log(printSegitiga(5));