const express = require('express')
const router = express.Router()
const { getMeals, setMeal, updateMeal, deleteMeal } = require('../controllers/mealController')

router.route('/').get(getMeals).post(setMeal)
router.route('/:id').put(updateMeal).delete(deleteMeal)

module.exports = router