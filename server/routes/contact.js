/** CONTACT ROUTE */

var router = require('express').Router();
var controller = require('../controllers/contactController');

router
    .route('/')
    .get(controller.renderPage)
    .post(controller.sendToDb);

module.exports = router;