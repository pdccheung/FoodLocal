const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Restaurant = require('../models/restaurant')
const User = require('../models/user')

const foodSchema = new Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true, default: 0},
    // restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
    restaurant: {type: String, required: true, default: "some restaurant"},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    price: {type: Number, required: true, default: 0},
    description: {type: String, default: "delicious"},
    imageUrl: {type: String},
})


const imageSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    food: {
        type: Schema.Types.ObjectId, ref: 'Food',
        required: true,
    }
})

const Image = mongoose.model('Image', imageSchema)
const Food = mongoose.model('Food', foodSchema)
module.exports = {
    Image,
    Food
}
// let Image = mongoose.model('Image', imageSchema)
// module.exports = mongoose.model('Food', foodSchema)