const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connect('mongodb://localhost/movie_review_site');

const movieRouter = express.Router();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send("My moview review website!");
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});