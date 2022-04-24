const express = require('express');
const routers = express.Router();
const ctrl = require('../controllers/movies');

routers.get('/', ctrl.GetAll);
routers.get('/:name', ctrl.GetByName);
routers.get('/sort/name', ctrl.SortByName);
routers.get('/sort/release', ctrl.SortByRelease);
routers.post('/', ctrl.Create);
routers.delete('/:id', ctrl.Delete);
routers.put('/', ctrl.Update);

module.exports = routers;
