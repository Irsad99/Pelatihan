// Declare array Name
const Name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

// Proses Convert toLowerCase()
const lowerName = (arrName) => {
    lowerText = []
    for (let index = 0; index < arrName.length; index++) {
        lowerText[index] = arrName[index].toLowerCase();
    }
    return lowerText
}

// Proses SearchName
const searchName = (str, limit, callbackFN) => {
    const text = callbackFN(Name)
    let temp = []
    if (!str || typeof str === "number") {
        return ("Isian tidak boleh kosong dan number");
    } else {
        for (let index = 0; index <= text.length - 1 ; index++) {
            if (text[index].includes(str) && temp.length < limit) {
                temp.push(Name[index])
            } else if (temp.length == 0 && index == text.length - 1) {
                return ("Yang anda cari tidak ditemukan")
            } else {
                continue
            }
        }
        return temp
    }
}

// Output
const output = searchName("li",4,lowerName)
console.log(output);