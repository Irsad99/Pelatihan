const db = require('../configs/db')
const models = {}

models.getByName = (name) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tickitz.movies m WHERE m.movie_name like $1',[
            name
        ])
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                reject(ers)
            })
    })
}

models.getData = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tickitz.movies ORDER BY movie_id ASC')
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                console.log(ers)
                reject(ers)
            })
    })
}

models.sortByName = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tickitz.movies ORDER BY movie_name ASC')
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                console.log(ers)
                reject(ers)
            })
    })
}

models.sortByRelease = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM tickitz.movies ORDER BY release_date ASC')
            .then((data) => {
                resolve(data.rows)
            })
            .catch((ers) => {
                console.log(ers)
                reject(ers)
            })
    })
}

models.addData = ({ name, category, director, casts, release, hour, minute, synopsis }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO tickitz.movies (movie_name, category, director, casts, release_date, duration_hour, duration_minute, synopsis) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
         [
            name, 
            category, 
            director, 
            casts, 
            release, 
            hour, 
            minute, 
            synopsis
        ])
            .then(() => {
                resolve('Data Successfully Saved')
            })
            .catch((ers) => {
                reject(ers)
            })
    })
}

models.deleteData = ({id}) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM tickitz.movies WHERE movie_id= %$1', [
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

models.updateData = ({ id, name, release}) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE tickitz.movies SET movie_name= $2, release_date= $3 WHERE movie_id= $1', [
            id,
            name,
            release
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
