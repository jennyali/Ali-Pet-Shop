/** ROUTES CONFIG */

var homeRoute = require('./home');

module.exports = function(app) {

    app.use('/', homeRoute);

};