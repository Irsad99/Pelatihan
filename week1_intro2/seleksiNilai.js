const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let temp = []
    let ind = 0
    const sortArray = dataArray.sort((a,b) => {return a-b}) // Sorting Data
    if (typeof nilaiAwal === "string" || typeof nilaiAkhir === "string") {
        return ("Nilai tidak boleh text")
    } else {
        for (let index = 0; index < sortArray.length; index++) {
            if (nilaiAwal > nilaiAkhir) {
                return ("Nilai akhir harus lebih dari nilai awal")
            } else if (sortArray.length < 5) {
                return ("Jumlah angka dalam dataArray harus lebih dari 5")
            } else if (temp.length == 0 && index == sortArray.length - 1) {
                return ("Nilai tidak ditemukan")
            } else {
                if (sortArray[index] >= nilaiAwal && sortArray[index] <= nilaiAkhir) {
                    temp[ind] = sortArray[index]
                    ind += 1
                } else {
                    continue
                }
            } 
        }
        return temp
    }
}

const output = seleksiNilai(5,20,[2,25,4,14,17,30,8])
console.log(output);






