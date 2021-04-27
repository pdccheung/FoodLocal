const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: string,
    address: string,
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
