const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/movie_review_site');
// mongosh movie_review_site < moviesJson.js   -- is the command to link database
//  

const app = express();
const movieRouter = express.Router();
const port = process.env.PORT || 3000;
const Movie = require('./models/movieModel');


movieRouter.route('/movies')
    .get(async (req, res) => {
        await Movie.find()
        .then(((err, movies) => {
            if(err){
                return res.send(err);
            } else{
                res.json(movies)
            }
        }))
    })
app.use(movieRouter)






app.get('/', (req, res) => {
    res.send("My moview review website!");
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});