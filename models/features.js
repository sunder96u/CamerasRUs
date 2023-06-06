const mongoose = require('mongoose')
const Schema = mongoose.Schema

const featureSchema = new Schema({
      resolution: {
        type: String,
        required: true
      },
      sensorType: {
        type: String,
        required: true
      },
      dimensions: {
        type: String,
        required: true
      },
      weight: {
        type: String,
        required: true
      },
      shutterSpeed: {
        type: String,
        required: true
      },
      connectivity: {
        type: String,
        required: true
      }
})

module.exports = featureSchema