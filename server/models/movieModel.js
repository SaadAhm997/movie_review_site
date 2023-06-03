const mongoose = require('mongoose');

const {Schema} = mongoose;

const movieModel = new Schema(
  {
    title: {type:String},
    genre: {type:String},
    duration: {type:Number},
    year: {type:Number}
  },
);

module.exports = mongoose.model('Movie', movieModel);
