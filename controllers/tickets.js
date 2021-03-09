const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
}

function newTicket(req, res) {
  // console.log(req.params.id, ' this is the flight id')
  res.render('flights/tickets/new', { 
    title: 'Add New Ticket', 
    flightId: req.params.id 
  });
}

function create(req, res) {
  let flightId = req.params.flightId;
  req.body.flight = flightId;
  Ticket.create(req.body, function(err, ticket) {
    console.log(ticket, ' THIS IS THE UPDATE TICKET')
    ticket.save(function(err){
      res.redirect(`/flights/${flightId}`);
    });
  });
}