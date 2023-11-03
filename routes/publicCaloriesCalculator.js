const express = require('express');
const router = express.Router();
const calculateCalories = require('../controllers/publicCaloriesCalculator')

router.get('/', calculateCalories);

module.exports = router;
