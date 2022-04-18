const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/booking')

routers.get('/', ctrl.getAll)
routers.post('/', ctrl.Create)
routers.delete('/', ctrl.Delete)
routers.put('/', ctrl.Update)

module.exports = routers