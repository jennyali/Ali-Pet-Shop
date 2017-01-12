/** CONTACT CONTROLLER */
var formResponse = require('../models/contactModel');
var errorHelper = require('../util/errorHelper');


exports.renderPage = function(req, res) {
    res.render('contact');
};


exports.sendToDb = function(req, res) {

    var entry = new formResponse({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        message: req.body.message
    });

    entry.save(function(err) {
        if(err) {
            
            var validation = errorHelper(err);
            console.log(validation);
            res.render('contact', validation);

        } else {
            res.render('contact',{success: true});
        }
    });

};

