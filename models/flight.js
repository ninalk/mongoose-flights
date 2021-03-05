const mongoose = require('mongoose');

//optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Delta', 'Southwest', 'United']
  },
  airport: {
    type: String,
    default: 'DEN',
    enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      return new Date().getFullYear() + 1; // one year from date created
    } 
  }
});

module.exports = mongoose.model('Flight', flightSchema);