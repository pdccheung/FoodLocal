const express = require('express');
const router = express.Router();
const Food = require('../../models/food')
const asyncHandler = require("express-async-handler")

const foodCtrl = require("../../controllers/foods")

router.get('/', foodCtrl.index)
router.post('/', foodCtrl.create)


// router.get('/:id', foodCtrl.index)

// router.get('/', asyncHandler(async (req, res) => {
//     const foods = await Food.find({})
//     res.json(foods)
//   }
//   ))
  
  router.get('/:id', asyncHandler(async (req, res) => {
    const food = await Food.findById(req.params.id)
    if (food) {
         res.json(food)
    } else {
        res.status(404).json({ message: "Food item not found"})
    }
  }
  ))


module.exports = router;