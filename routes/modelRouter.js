const Router = require('express').Router()
const controller = require('../controllers/modelController')

Router.get('/', controller.findModels)
Router.get('/:id', controller.findModelById)
Router.get('/:model', controller.findModelByModel)
Router.post('/', controller.createModel)
Router.put('/', controller.updateModel)
Router.delete('/:id', controller.deleteModel)

module.exports = Router