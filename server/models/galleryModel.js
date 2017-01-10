var _ = require('lodash');


var photoGallery = [
    {name: 'catgrooming.jpeg'},
    {name: 'dogincar.jpeg'},
    {name: 'dogincup.jpeg'},
    {name: 'dogonsofa.jpeg'},
    {name: 'dogwithlead.jpeg'},
    {name: 'guineapig.jpeg'},
    {name: 'hairydog.jpeg'},
    {name: 'happydog.jpeg'},
    {name: 'kittenonbed.jpeg'},
    {name: 'largedogimage.jpeg'},
    {name: 'sleepydog.jpeg'},
    {name: 'dogonsofa.jpeg'}
];

function photo(name) {
    this.id = Math.ceil(Math.random() * 10000);
    this.name = name;
}

photoGallery = _.map(photoGallery, function(item) {
    return new photo(item.name);
});

module.exports = photoGallery;