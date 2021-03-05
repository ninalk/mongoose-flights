const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create
}

function index(req, res){
  
  Flight.find({}, function(err, flightDocuments){
    console.log(flightDocuments)
    res.render('flights/index', {
      flights: flightDocuments
    });
  });
}

function newFlight(req, res){
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  console.log(dt)
  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  console.log(departsDate)
  res.render('flights/new', {departsDate});
}

function create(req, res){
  console.log(req.body, ' this is req.body')

  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight, ' this is our document that we created in mongodb');
    res.redirect('/flights/new');
  });
}