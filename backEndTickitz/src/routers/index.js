const express = require('express')
const routers = express.Router()

const movies = require('./movies')
const schedules = require('./schedules')
const booking = require('./booking')

routers.use('/movies', movies)
routers.use('/schedules', schedules)
routers.use('/bookings', booking)

module.exports = routers