const getMonth = (callback) => {
    setTimeout(() =>{
        let error = true
        let month = ['Januari','Februari','Maret','April','Mei',
                    'Juni','Juli','Agustus','September','Oktober',
                    'November','Desember']
        if (!error) {
            callback(null,month)
        } else {
            callback(new Error('Sorry Data Not Found'),[])
        }
    }, 4000)
}

const showMonth = (err,dataMonth) => {
    if (err == null) {
        const mapMonth = dataMonth.map((x) => x)
        console.log(mapMonth);
    } else {
        console.log(err);
    }
}

getMonth(showMonth)


// const array1 = ['Januari','Februari','Maret','April','Mei',
//                 'Juni','Juli','Agustus','September','Oktober',
//                 'November','Desember'];

// showMonth(array1)

// pass a function to map
// const map1 = array1.map(x => x);

// console.log(map1);