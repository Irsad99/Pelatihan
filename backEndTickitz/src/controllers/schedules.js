const models = require('../models/schedules')
const response = require('../helpers/response')
const schedules = {}

schedules.getAll = async (req, res) => {
    try {
        const limit = req.query.limit || 2
        const offset = req.query.skip || 0
        const data = await models.getData(limit, offset)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

schedules.Create = async (req, res) => {
    try {
        const { id, price, premiere, location, date_start, date_end, time } = req.body
        const data = await models.addData( id, price, premiere, location, date_start, date_end, time)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

schedules.Delete = async (req,res) => {
    try {
        const {id} = req.body
        const data = await models.deleteData(id)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

schedules.Update = async (req,res) => {
    try {
        const {id, price} = req.body
        const data = await models.updateData(id, price)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = schedules
