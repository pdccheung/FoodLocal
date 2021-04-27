const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Restaurant = require('../models/restaurant')
const User = require('../models/user')

const foodSchema = new Schema({
    name: String,
    rating: Number,
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
})


const imageSchema = new Schema({
    url: {
        type: string,
        required: true,
    },
    foodID: {
        type: Schema.Types.ObjectId, ref: 'Food',
        required: true,
    }
})

let Image = mongoose.model('Image', imageSchema)
let Food = mongoose.model('Food', foodSchema)

module.exports.Food = Food;
module.exports.Image = Image;
