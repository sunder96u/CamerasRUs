const db = require ('../db')
const { models } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {
    const canon = await brands.find({name: 'canon'})
    const nikon = await brands.find({name: 'nikon'})
    const sony = await brands.find({name: 'sony'})
}