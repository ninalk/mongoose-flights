const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// router.get('/new', ticketsCtrl.new);

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:flightId/tickets', ticketsCtrl.create);
router.delete('/tickets/:id', ticketsCtrl.delete);

module.exports = router;