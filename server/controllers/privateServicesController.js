/** PRIVATE CONTROLLER */
var privateServicesModel = require("../models/privateServicesModel");

exports.renderPage = function(req, res) {
    res.render('privateServices', {
        serviceOne: privateServicesModel[0],
        serviceTwo: privateServicesModel[1],
        serviceThree: privateServicesModel[2],
        serviceFour: privateServicesModel[3],
    });
};

exports.sendToRoute = function(req, res) {
    res.redirect('/services/privateServices/detail');
};


exports.renderSubPage = function(req, res) {
    res.render('detail');
};