const db = require('../configs/db')
const models = {}

models.getData = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tickitz.booking ORDER BY booking_id ASC')
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                console.log(ers)
                reject(ers)
            })
    })
}

models.addData = (date, time, total_cost, name_card, card_number, id_movie, id_schedule, id_user, seats) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tickitz.booking (date, time, total_cost, name_card, card_number, id_movie, id_schedule, id_user, seats) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [
            date, 
            time, 
            total_cost, 
            name_card, 
            card_number, 
            id_movie, 
            id_schedule, 
            id_user, 
            seats
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
        db.query('DELETE FROM tickitz.booking WHERE booking_id = $1', [
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

models.updateData = (id, name_card, card_number) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE tickitz.booking SET "name_card"= $2, "card_number" = $3 WHERE booking_id= $1', [
            id,
            name_card, 
            card_number
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
