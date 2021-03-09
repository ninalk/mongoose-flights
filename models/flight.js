const mongoose = require('mongoose');

//optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date
  }
});

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
  destinations: [destinationSchema],
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let oneYearLater = new Date(year +1, month, day);
      return oneYearLater; // one year from date created
    }
  }
});

module.exports = mongoose.model('Flight', flightSchema);