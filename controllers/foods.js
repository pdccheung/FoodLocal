const {Image, Food} = require('../models/food')
const {imageLinek, imageLink} = require("../controllers/images")


module.exports = {
    index,
    create
}

async function index(req, res) {
    const foods = await Food.find({})
    res.json(foods)
}

async function create(req, res) {
    console.log(req.body)

    let newFood = await Food.create(req.body);
    await newFood.save();
    const foods = await Food.find({})
    res.json(foods)
}
