const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const DailyUserInfoSchema = new Schema({
//   owner: {
//     type: Schema.Types.ObjectId,
//     ref: 'user',
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   products: [
//     {
//       title: String,
//       weight: Number,
//       categories: String,
//       calories: Number,
//     },
//   ],
//   totalCalories: {
//     type: Number,
//     default: 0,
//   },
// });

const DailyUserInfoSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  date: String,
  title: String,
  weight: Number,
  categories: String,
  calories: Number,
});

const DailyUserInfo = mongoose.model('DailyUserInfo', DailyUserInfoSchema);

module.exports = DailyUserInfo;
