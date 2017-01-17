/** BOOKING CONTROLLER */
var privateServicesModel = require("../models/privateServicesModel");

module.exports = {

    renderPage : function(req, res) {
        res.render('booking');
    },

    postRenderPage :  function(req, res) {
        var serviceId = req.body.serviceId;
        var serviceObj = privateServicesModel.serviceFilter(serviceId);

        res.render('booking', {
            service: serviceObj
        });
    }
};