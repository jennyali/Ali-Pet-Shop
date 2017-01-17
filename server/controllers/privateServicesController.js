/** PRIVATE CONTROLLER */
var privateServicesModel = require("../models/privateServicesModel");

exports.renderPage = function(req, res) {
    res.render('privateServices', {
        serviceOne: privateServicesModel.servicesList[0],
        serviceTwo: privateServicesModel.servicesList[1],
        serviceThree: privateServicesModel.servicesList[2],
        serviceFour: privateServicesModel.servicesList[3],
    });
};


exports.renderSubPage = function(req, res) {

    var serviceId = req.body.serviceId;
    var serviceObj = privateServicesModel.serviceFilter(serviceId);

    res.render('detail', {
        service: serviceObj
    });

};