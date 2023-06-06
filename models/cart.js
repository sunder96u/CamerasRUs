const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
      image: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      subtotal: {
        type: Number,
        required: true
      }
})


module.exports = cartSchema