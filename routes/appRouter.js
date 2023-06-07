const Router = require('express').Router()
const brandRouter = require('./brandRouter')
const carRouter = require('./cartRouter')
const featureRouter = require('./featureRouter')
const modelRouter = require('./modelRouter')

Router.use('/brands', brandRouter)
Router.use('/cart', carRouter)
Router.use('/features', featureRouter)
Router.use('/models', modelRouter)

module.exports = Router