const models = require('../models/booking')
const response = require('../helpers/response')
const booking = {}

booking.getAll = async (req, res) => {
    try {
        const limit = req.query.limit || 2
        const offset = req.query.skip || 0
        const data = await models.getData(limit, offset)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

booking.Create = async (req, res) => {
    try {
        const { date, time, total_cost, name_card, card_number, id_movie, id_schedule, id_user, seats } = req.body
        const data = await models.addData(date, time, total_cost, name_card, card_number, id_movie, id_schedule, id_user, seats)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

booking.Delete = async (req,res) => {
    try {
        const {id} = req.body
        const data = await models.deleteData(id)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

booking.Update = async (req,res) => {
    try {
        const {id, name_card, card_number} = req.body
        const data = await models.updateData(id, name_card, card_number)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = booking
