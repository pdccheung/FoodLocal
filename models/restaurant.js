const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: string,
    address: string,
})

let Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports.Restaurant = Restaurant;