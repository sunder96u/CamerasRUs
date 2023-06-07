const Router = require('express').Router()
const controller = require('../controllers/featureController')

Router.get('/', controller.findFeatures)
Router.get('/:id', controller.findFeaturesById)
Router.get('/:brand', controller.findFeaturesByBrand)
Router.post('/', controller.createFeatures)
Router.put('/', controller.updateFeature)
Router.delete('/:id', controller.deleteFeature)

module.exports = Router