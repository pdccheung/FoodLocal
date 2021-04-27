const Food = require('../models/food')
const asyncHandler = require("express-async-handler")

module.exports = {
    index,
    create
}

async function index(req, res) {
    const foods = await Food.find({})
    res.json(foods)
}


async function create(req, res) {
    let newFood = await Food.create(req.body);
    const foods = await Food.find({})
    res.json(foods)
}
