const Router = require('express').Router()
const controller = require('../controllers/cartController')

Router.get('/', controller.findCart)
Router.post('/', controller.addToCart)
Router.put('/minus/', controller.changeQntMinus)
Router.put('/plus/', controller.changeQntPlus)
Router.delete('/:id', controller.removeFromCart)

module.exports = Router