/** SERVICES ROUTE */

var router = require('express').Router();
var controller = require('../controllers/servicesController');
var groomingcontroller = require('../controllers/groomingController');
var petaccesscontroller = require('../controllers/petaccessController');
var petHotelcontroller = require('../controllers/petHotelController');
var privateServicesController = require('../controllers/privateServicesController');

router
    .route('/')
    .get(controller);
    
router
    .route('/grooming')
    .get(groomingcontroller);

router
    .route('/petaccess')
    .get(petaccesscontroller);

router
    .route('/pethotel')
    .get(petHotelcontroller);

router
    .route('/privateServices')
    .get(privateServicesController);

module.exports = router;