const cekTahunKabisat = (tahun) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tahun % 4 == 0) {
                resolve (tahun)
            } else {
                reject (new Error('Bukan Tahun Kabisat'))
            }
        }, 3000)
    })
}

const showKabisat = async () => {
    try {
        let hasil = await cekTahunKabisat(2002)
        console.log(hasil + " : Tahun Kabisat");
    } catch (error) {
        console.log(error);
    }
}

showKabisat()