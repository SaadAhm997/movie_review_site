const express = require('express'); // need access to router

function routes (Movie) {
    const movieRouter = express.Router() // gives back route so we can add more crud to it
    movieRouter.route('/movies')
    // get all movies
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
    .post((req, res) => {
        const movie = new Movie(req.body)
        console.log(movie)
        return res.json(movie)
    })
    //get movie by id
    movieRouter.route('/movies/:movieId')
    .get(async (req, res) => {
        await Movie.findById(req.params.movieId)
        .then(((err, movie) => {
            if(err){
                return res.send(err);
            } else{
                res.json(movie)
            }
        }))
    })
    return movieRouter; // will return it on app where it's being executed
}; 

module.exports = routes;