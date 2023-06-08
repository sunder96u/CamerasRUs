const Router = require('express').Router()
const controller = require('../controllers/featureController')

Router.get('/', controller.findFeatures) // api/feauters
Router.get('/:id', controller.findFeaturesById) // api/featurs/"id"
Router.get('/brand/:id', controller.findFeaturesByBrandId) // api/features/brand/"id"
// Router.get('/:brand', controller.findFeaturesByBrand)
Router.post('/', controller.createFeatures) // api/features?resolution=""&sensorType=""&dimensions=""&weight=""&shutterSpeed=""&connectivity=""&modelName="model id"
Router.put('/', controller.updateFeature) // api/features?id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deleteFeature)

module.exports = Router