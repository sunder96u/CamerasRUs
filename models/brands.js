const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brandSchema = new Schema({
      brand: {
            type: String, 
            required: true
      }, 
      brandLogo: {
            type: String, 
            required: true
      }
})

module.exports = brandSchema