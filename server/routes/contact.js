/** CONTACT ROUTE */

var router = require('express').Router();
var controller = require('../controllers/contactController');

router
    .route('/')
    .get(controller);

module.exports = router;