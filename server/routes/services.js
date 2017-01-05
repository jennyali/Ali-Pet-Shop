/** SERVICES ROUTE */

var router = require('express').Router();
var controller = require('../controllers/servicesController');

router
    .route('/')
    .get(controller);

module.exports = router;