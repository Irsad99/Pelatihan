const lowerName = (arrName) => {
    lowerText = []
    for (let index = 0; index < arrName.length; index++) {
        lowerText[index] = arrName[index].toLowerCase();
    }
    return lowerText
}

const cekNama = (nama,callbackFN) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataNama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella',
            'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
            'Ella', 'Faith', 'Olivia', 'Penelope']
            const text = callbackFN(dataNama)
            let temp = []
            for (let index = 0; index <= text.length - 1 ; index++) {
                if (text[index].includes(nama)) {
                    temp.push(dataNama[index])
                }
            }
            if (temp.length > 0) {
                resolve (temp)
            } else {
                reject (new Error('Nama yang anda cari tidak ada'))
            }
        }, 3000)
    })
}

const showNama = async () => {
    try {
        let hasil = await cekNama('li',lowerName)
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}

showNama()