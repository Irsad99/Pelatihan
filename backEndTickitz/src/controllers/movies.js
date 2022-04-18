const models = require('../models/movies')
const response = require('../helpers/response')
const movies = {}

movies.GetAll = async (req, res) => {
    try {
        const data = await models.getData()
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.GetByName = async (req,res) => {
    try {
        const name = req.body.name
        const data = await models.getByName(name)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.SortByName = async (req, res) => {
    try {
        const data = await models.sortByName()
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.SortByRelease = async (req, res) => {
    try {
        const data = await models.sortByRelease()
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.Create = async (req, res) => {
    try {
        const { name, category, director, casts, release, hour, minute, synopsis } = req.body
        const data = await models.addData({ name, category, director, casts, release, hour, minute, synopsis })
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.Delete = async (req,res) => {
    try {
        const {id} = req.body
        const data = await models.deleteData({ id })
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.Update = async (req,res) => {
    try {
        const {id, name, release} = req.body
        const data = await models.updateData({ id, name, release })
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = movies
