const {
  calculateNumberOfCalories,
  restrictedFood,
  getNonRecommendedCategories,
} = require('../functions');
const { BadRequestError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
const UserInfo = require('../models/user-info')

const userCalculateCalories = async (req,res)=>{
    const { height, currentWeight, desiredWeight, age, bloodType } = req.body;
    if (!height || !currentWeight || !desiredWeight || !age || !bloodType) {
      throw new BadRequestError(
        'Please provide height, current weight, desired weight, age, and blood type'
      );
    }
  const user= req.user;
  const userInfo = await UserInfo.find({ owner: user._id });
  if(userInfo.length === 0){
  const calories = calculateNumberOfCalories(
    age,
    height,
    currentWeight,
    desiredWeight
  );
  const restrictedProducts = restrictedFood(bloodType);
  const nonRecCategories = getNonRecommendedCategories(restrictedProducts);
  const newUserInfo = await UserInfo.create({
    owner:user._id,
    calories,
    nonRecCategories
  })
  return res.status(StatusCodes.OK).json({userInfo:newUserInfo})
  }
  res.status(StatusCodes.OK).json({ userInfo:userInfo[0] });
}

module.exports = userCalculateCalories