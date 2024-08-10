const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: String,
  name: String,
  duration: Number,
  length:Number,
  start: String,
  resort: String,
  perPerson: Number,
  image: String,
  description: String,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
