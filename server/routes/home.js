/** HOME ROUTE */

var router = require('express').Router();
var controller = require('../controllers/homeController');

router
    .route('/')
    .get(controller);

module.exports = router;