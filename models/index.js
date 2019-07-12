const mongoose = require('mongoose');
const schema = mongoose.Schema;
const productDS = new schema({
  name: {
    type: String,
    require: true
  },
  brand: {
    type: String,
    require: true
  },
  cost: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('product', productDS);
