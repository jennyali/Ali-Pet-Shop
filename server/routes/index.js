/** ROUTES CONFIG */

var homeRoute = require('./home');
var contactRoute = require('./contact');
var servicesRoute = require('./services');
var aboutRoute = require('./about');

module.exports = function(app) {

    app.use('/', homeRoute);
    app.use('/about', aboutRoute);
    app.use('/services', servicesRoute);
    app.use('/contact', contactRoute);

};