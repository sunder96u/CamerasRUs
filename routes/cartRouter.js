const Router = require('express').Router()
const controller = require('../controllers/cartController')

Router.get('/', controller.findCart)
Router.post('/:id', controller.addToCart) //api/cart/:id
Router.put('/minus/:id', controller.changeQntMinus)
Router.put('/plus/:id', controller.changeQntPlus)
Router.delete('/:id', controller.removeFromCart)

module.exports = Router