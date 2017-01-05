/** ABOUT ROUTE */

var router = require('express').Router();
var aboutcontroller = require('../controllers/aboutController');


router
    .route('/')
    .get(aboutcontroller);

module.exports = router;