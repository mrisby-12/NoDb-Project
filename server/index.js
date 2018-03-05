const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.use( (req, res, next) => {
//     console.log('Middleware firing off')
//     console.log('body: ', req.body)
//     console.log('Query:'. req.query)
//     next();
// });

// const { deleteFromFavorites } = require(`${__dirname}/controllers/mainControl`);
// const { getData } = require(`${__dirname}/controllers/mainControl`);
// const { addToFavorites } = require(`${__dirname}/controllers/mainControl`);
// const { updateFavListTitle } = require(`${__dirname}/controllers/mainControl`);
// const { getNewQuote } = require(`${__dirname}/controllers/mainControl`);

const mainControl = require(`${__dirname}/controllers/mainControl`);


app.get('/api/test', mainControl.getData);
app.get('/api/getNewQuote', mainControl.getNewQuote);
app.delete('/api/delete/:id', mainControl.deleteFromFavorites)
app.put('/api/edit/:id', mainControl.updateFavListTitle);
app.get('/api/favorites', mainControl.addToFavorites);


app.listen(port, () => {
   console.log(`Listening on port: ${port}`);
});


