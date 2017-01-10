/** HOME CONTROLLER */
var galleryModel = require('../models/galleryModel');

const homeController = function(req, res) {
    res.render('home', {
        photos: galleryModel
    });
};

module.exports = homeController;