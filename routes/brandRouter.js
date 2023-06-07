const Router = require('express').Router()
const controller = require('../controllers/brandController')

Router.get('/', controller.findBrands) // api/models
Router.get('/:id', controller.findBrandById) // api/models/"id"
Router.get('/name/:name', controller.findBrandByName) // api/models?name=""
Router.put('/', controller.updateBrand) // api/models?id=""&whatToUpdate=""&update=""
Router.post('/',controller.createBrand) // api/models?brand=""&brandLogo=""
Router.delete('/:id', controller.deleteBrand)

module.exports = Router