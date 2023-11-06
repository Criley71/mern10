const {mongoose} = require('mongoose')

const MealSchema = mongoose.Schema({
  mealName: {
    type: String,
    required: [true, 'please enter name of meal']
  },
  mealDate:{
    type: Date,
    required: [true, 'please enter date yyyymmdd']
  },
  mealTime: {
    type: String,
    required: [true, 'please enter the time of day you had the meal']
  },
  insulinTime:{
    type: String,
    required: [true, 'please enter the time of day you used insulin']
  },
  insulinDose:{
    type: Number,
    required: [true, 'please enter the dosage of insulin used']
  },
  carbCount:{
    type: Number,
    required: [true, 'please enter the amount of carbs the meal had']
  }

})

module.exports = mongoose.model("Meal", MealSchema)