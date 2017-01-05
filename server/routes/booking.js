/** BOOKING ROUTE */

var router = require('express').Router();
var controller = require('../controllers/bookingController');

router
    .route('/')
    .get(controller);

module.exports = router;