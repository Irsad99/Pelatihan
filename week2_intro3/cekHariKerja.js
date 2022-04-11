const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve (cek)
            } else {
                reject (new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

const cetakHariKerja = () => {
    cekHariKerja('jumat')
    .then((result) => {
        console.log(result + " adalah hari kerja");
    })
    .catch((err) => {
        console.log(err);
    });
}

const showHariKerja = async () => {
    try {
        let hasil = await cekHariKerja('sabtu')
        console.log(hasil + " adalah hari kerja");
    } catch (error) {
        console.log(error);
    }
}

cetakHariKerja()
showHariKerja()     