const express = require('express');
const app = express();
const movieRouter = express.Router();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send("My moview review api!");
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});