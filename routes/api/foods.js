const express = require('express');
const router = express.Router();
const Food = require('../../models/food')
const asyncHandler = require("express-async-handler")

const foodCtrl = require("../../controllers/foods")

router.get('/', foodCtrl.index)
router.post('/', foodCtrl.create)


  
  router.get('/:id', asyncHandler(async (req, res) => {
    const food = await Food.findById(req.params.id)
    if (food) {
         res.json(food)
    } else {
        res.status(404).json({ message: "Food item not found"})
    }
  }
  ))


  // Use this function to find food by userID, and res.json the data

  // router.get('/:userid', asyncHandler(async (req, res) => {
  //   const userFood = await Food.find({user: req.params.userid})
  //   if (food) {
  //        res.json(food)
  //   } else {
  //       res.status(404).json({ message: "User food item not found"})
  //   }
  // }
  // ))


module.exports = router;