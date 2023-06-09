// App
const express = require('express'); // gives routes functions
const app = express(); // connect routes to app
const port = process.env.PORT || 3001; // for run on port console.log()

//logger
const pino = require('pino');
const logger = require('./logger.js');

// Movie
const Movie = require('./models/movieModel'); // Each movie follows the movie model
const movieRouter = require('./routes/movieRouter')(Movie); // Add Movie to inject Movie model into the Movie Router / and seperate different Models
app.use(movieRouter)

// Mongoose
const mongoose = require('mongoose'); // gives mongoose database
const db = mongoose.connect('mongodb://localhost/movie_review_site'); // mongosh movie_review_site < moviesJson.js  (is the command to link database)

app.listen(port, () => {
    logger.error("Error");
    logger.fatal("Fatal");
    logger.info(`Successfully running on port ${port}`)
});
