const models = require('../models/movies');
const response = require('../helpers/response');
const movies = {};

movies.GetAll = async (req, res) => {
    try {
        const { page,limit } = req.query;
        const data = await models.getData(page, limit);
        if (!data.length) {
            return response(res, 404, 'Sorry Data Was Not Found');
        } else {
            return response(res, 200, data);
        }
    } catch (error) {
        return response(res, 500, error);
    }
};

movies.GetByName = async (req,res) => {
    try {
        const name = req.params.name;
        const data = await models.getByName(name);
        if (!data.length) {
            return response(res, 404, 'Sorry Data Was Not Found');
        } else {
            return response(res, 200, data);
        }
        
    } catch (error) {
        return response(res, 500, error);
    }
};

movies.SortByName = async (req, res) => {
    try {
        const data = await models.sortByName();
        return response(res, 200, data);
    } catch (error) {
        return response(res, 500, error);
    }
};

movies.SortByRelease = async (req, res) => {
    try {
        const data = await models.sortByRelease();
        return response(res, 200, data);
    } catch (error) {
        return response(res, 500, error);
    }
};

movies.Create = async (req, res) => {
    try {
        const { name, category, director, casts, release, hour, minute, synopsis } = req.body;
        const data = await models.addData(name, category, director, casts, release, hour, minute, synopsis);
        return response(res, 200, data);
    } catch (error) {
        return response(res, 500, error);
    }
};

movies.Delete = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await models.deleteData(id);
        if (data.rowCount < 1) {
            return response(res, 404, 'Sorry Data Was Not Found');
        } else {
            return response(res, 200, data);
        }
        
    } catch (error) {
        return response(res, 500, error);
    }
};

movies.Update = async (req,res) => {
    try {
        const {id, name, release} = req.body;
        const data = await models.updateData(id, name, release);
        return response(res, 200, data);
    } catch (error) {
        return response(res, 500, error);
    }
};

module.exports = movies;
