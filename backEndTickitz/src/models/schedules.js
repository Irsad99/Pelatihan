const db = require('../configs/db')
const models = {}

models.getData = (limit, offset) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tickitz.schedule ORDER BY schedule_id ASC limit $1 offset $2', [
            limit,
            offset
        ])
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                console.log(ers)
                reject(ers)
            })
    })
}

models.addData = (id, price, premiere, location, date_start, date_end, time) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tickitz.schedule (id_movie, price, premiere, location, date_start, date_end, time) VALUES($1, $2, $3, $4, $5, $6, $7)',
        [
            id, price, premiere, location, date_start, date_end, time
        ])
            .then(() => {
                resolve('Data Successfully Saved')
            })
            .catch((ers) => {
                reject(ers)
            })
    })
}

models.deleteData = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM tickitz.schedule WHERE schedule_id = $1', [
            id
        ])
            .then(() => {
                resolve('Data Successfully Deleted')
            })
            .catch((ers) => {
                reject(ers)
            })
    })
}

models.updateData = (id, price) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE tickitz.schedule SET "price"= $2 WHERE schedule_id= $1', [
            id,
            price,
        ])
            .then(() => {
                resolve('Data Successfully Updated')
            })
            .catch((ers) => {
                reject(ers)
            })
    })
}

module.exports = models
