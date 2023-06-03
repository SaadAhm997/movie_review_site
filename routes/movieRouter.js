const express = require('express'); // need access to router

function routes (Movie) {
    const movieRouter = express.Router() // gives back route so we can add more crud to it
    movieRouter.route('/movies')

    // POST new movie
    // .post((req, res) => {
    //     const movie = new Movie(req.body)
    //     movie.save();
    //     return res.status(201).json(movie);
    // })
    
    // GET all movies
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

    //GET BY ID
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
    
    // .put(async (req, res) => {
    //     await Movie.findById(req.params.movieId)
    //     .then(((err, movie) => {
    //         if(err){
    //             return res.send(err);
    //         } else{
    //             movie.title = req.body.title;
    //             movie.genre = req.body.genre;
    //             movie.duration = req.body.duration;
    //             movie.year = req.body.year;
    //             movie.save();
    //         }
    //     }))
    // })
    // .delete((req, res) => {
    //     req.book.remove()
    // })
    return movieRouter; // will return it on app where it's being executed
}

module.exports = routes;

            