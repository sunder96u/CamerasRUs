const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema({
      model: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      brandName: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
      }
})

module.exports = modelSchema 