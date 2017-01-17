/** Services Data not from database */
var _ = require('lodash');

var privateServicesList = [
    {
        name: "Doggy Day Care",
        hours: 9,
        cost: 30.00,
        image: "/assets/images/dogwithlead.jpeg",
        textBlock: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
    },
    {
        name: "Over Night Stay",
        hours: 24,
        cost: 70.00,
        image: "/assets/images/kittenonbed.jpeg",
        textBlock: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
    },
    {
        name: "Hair Cut",
        hours: 1,
        cost: 20.00,
        image: "/assets/images/hairydog.jpeg",
        textBlock: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
    },
    {
        name: "Wash and Groom",
        hours: 2,
        cost: 40.00,
        image: "/assets/images/happydog.jpeg",
        textBlock: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
    }
];

function service(name, hours, cost, image, textBlock) {
    this.id = Math.ceil(Math.random() * 10000);
    this.name = name;
    this.hours = hours;
    this.cost = cost;
    this.image = image;
    this.textBlock = textBlock;
}

privateServicesList = _.map(privateServicesList, function(item) {
    return new service(item.name, item.hours, item.cost, item.image, item.textBlock);
});

//module.exports = privateServicesList;

module.exports = {
    servicesList : privateServicesList,
    serviceFilter : function(serviceId) {

        var givenId = Number(serviceId);
        var foundService = _.filter(this.servicesList, { 'id' : givenId });

        return foundService[0];
    }
};