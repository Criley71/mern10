const asyncHandler = require('express-async-handler')
const Meal = require('../models/MealModel')
const MealModel = require('../models/MealModel')

const getMeals = asyncHandler(async (req, res) => {
  const meals = await Meal.find()

  res.status(200).json({meals})
})

const setMeal = asyncHandler(async (req, res) => {
  if(!req.body.mealName || !req.body.mealDate || !req.body.mealTime || !req.body.insulinTime || !req.body.insulinDose || !req.body.carbCount) {
    res.status(400)
    throw new Error('please add all fields')
  }

  const meal = await Meal.create({
    mealName: req.body.mealName,
    mealDate: req.body.mealDate,
    mealTime: req.body.mealTime,
    insulinTime: req.body.insulinTime,
    insulinDose: req.body.insulinDose,
    carbCount: req.body.carbCount
  })
  res.status(200).json({ meal })
})

const updateMeal = asyncHandler(async (req, res) => {
  const meal = await MealModel.findById(req.params.id)
  if(!meal){
    res.status(400)
    throw new Error('Meal not found')
  }

  const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(200).json({updatedMeal})
})

const deleteMeal = asyncHandler(async (req, res) => {
  const meal = await MealModel.findById(req.params.id)
  if(!meal){
    res.status(400)
    throw new Error('meal not found')
  }
  await meal.deleteOne()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getMeals,
  setMeal,
  updateMeal,
  deleteMeal

}