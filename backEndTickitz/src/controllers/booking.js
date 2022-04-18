const models = require('../models/booking')
const response = require('../helpers/response')
const schedules = {}

schedules.getAll = async (req, res) => {
    try {
        const data = await models.getData()
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

schedules.Create = async (req, res) => {
    try {
        const { date, time, total_cost, name_card, card_number, id_movie, id_schedule, id_user, seats } = req.body
        const data = await models.addData(date, time, total_cost, name_card, card_number, id_movie, id_schedule, id_user, seats)
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
        const {id, name_card, card_number} = req.body
        const data = await models.updateData(id, name_card, card_number)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = schedules
