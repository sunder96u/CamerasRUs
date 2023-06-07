const Router = require('express').Router()
const controller = require('../controllers/brandController')

Router.get('/', controller.findBrands)
Router.get('/:id', controller.findBrandById)
Router.get('/:name', controller.findBrandByName)
Router.put('/', controller.updateBrand)
Router.post('/',controller.createBrand)
Router.delete('/:id', controller.deleteBrand)

module.exports = Router