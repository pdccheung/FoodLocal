const mongoose = require('mongoose');
const foods = require('./models/Foodlist')
const User = require('./models/user')
const Restaurant = require('./models/restaurant')
const { Food } = require('./models/food')
const Image = require('./models/food')
const restaurants = require('./models/RestaurantList')
require('dotenv').config();
require('./config/database');

const importData = async () => {
    try{
        await Restaurant.deleteMany()
        await Food.deleteMany()

        const restaurantData = await Restaurant.insertMany(restaurants)
        const defaultRestaurant = restaurantData[1]._id 
  
        const defaultUser = await (User.findById("60848ca7ae62dc1c04fd3927"))
        const sampleFoods = foods.map(food => {
            return {...food, user: defaultUser, restaurant: defaultRestaurant,
            imageUrl: "https://foodlocal-assets.s3.amazonaws.com/d0b20883-c28c-4c48-b531-b9c3ed1ef3b3"}
        })

        await Food.insertMany(sampleFoods)
        console.log ('Data is hopefully imported')
        process.exit()

    } catch (error){
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await Restaurant.deleteMany()
        await Food.deleteMany()

        console.log ('Data is hopefully destroyed')
        process.exit()

    } catch (error){
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){
    destroyData();
} else {
    importData();
}

