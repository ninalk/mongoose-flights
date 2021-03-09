const Flight = require('../models/flight');

module.exports = {
  create
}

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    console.log(req.params.id, ' this is the id');
    console.log(flight, ' this is the flight')
    
    flight.destinations.push(req.body);
    console.log(req.body)

    // save mutated document
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
    console.log(flight, ' this is the updated flight')
  });
}