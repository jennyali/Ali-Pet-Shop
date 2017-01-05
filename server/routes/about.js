/** ABOUT ROUTE */

var router = require('express').Router();
var controller = require('../controllers/aboutController');

router
    .route('/')
    .get(controller);

module.exports = router;