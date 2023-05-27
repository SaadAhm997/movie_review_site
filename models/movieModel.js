const mongoose = require('mongoose');

const {Schema} = mongoose;

const movieModel = new Schema(
  {
    title: {type:String},
    genre: {type:String},
    duration: {type:int},
    year: {type:int}
  },
);

module.exports = mongoose.model('Movie', movieModel);
