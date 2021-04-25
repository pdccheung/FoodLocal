const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: ,
    rating: ,
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },



})



const imageSchema = new Schema({
    url: {
        type: string,
        required: true,
    }

    foodID: {
        type: Schema.Types.ObjectId, ref: 'Food',
        required: true,

    }


})

let Image = mongoose.model('Image', imageSchema)
let Food = mongoose.model('Food', foodSchema)

module.exports.Food = Food;
module.exports.Image = Image;
