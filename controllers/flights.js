const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show
}

function index(req, res){
  
  Flight.find({}, function(err, flightDocuments){
    res.render('flights/index', { 
      title: 'All Flights',
      flights: flightDocuments
    });
  });
}

function newFlight(req, res){
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // console.log(dt)
  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  // console.log(departsDate)
  res.render('flights/new', { title: 'Add Flight', departsDate});
}

function create(req, res){
  // console.log(req.body, ' this is req.body')

  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    // console.log(flight, ' this is our document that we created in mongodb');
    res.redirect('/flights/new');
  });
}

function show(req, res){
  // console.log(req.params.id, ' this is the flight id')

  Flight.findById(req.params.id, function(err, flight) {
    console.log(req.params.id, " PARAMS ID")
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', { title: 'Flight Detail', flight, tickets });
      console.log(flight, ' this is the flight')
      console.log(tickets, ' these are the tickets')
    })
  });
}