const mongoose = require('mongoose')
const brandSchema = require('./brands')
const cartSchema = require('./cart')
const featureSchema = require('./features')
const modelSchema = require('./models')


const Brand = mongoose.model('Brand', brandSchema)
const Feature = mongoose.model('Feature', featureSchema)
const Cart = mongoose.model('Cart', cartSchema)
const Model = mongoose.model('Model', modelSchema)


module.exports = {
      Brand, 
      Feature, 
      Cart, 
      Model
}