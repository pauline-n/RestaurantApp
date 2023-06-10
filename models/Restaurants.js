const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String
    },
    rname: String,
    rtype: String,
    location: String,
    workhours: String,
    services: String,
    contact: String

})

module.exports = mongoose.model('Restaurants', restaurantSchema)