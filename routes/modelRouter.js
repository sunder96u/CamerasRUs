const Router = require('express').Router()
const controller = require('../controllers/modelController')

Router.get('/', controller.findModels)
Router.get('/:id', controller.findModelById)
Router.get('/brands/:id', controller.findModelByBrandId) // api/models/brands/"id"
// Router.get('/name/:model', controller.findModelByModel) // api/models/name/
Router.post('/', controller.createModel) // api/models?model=""&price=""&image=""&brandName="brand_id"
Router.put('/', controller.updateModel) // api/models?id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deleteModel)

module.exports = Router