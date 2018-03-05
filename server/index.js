const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const mainControl = require(`${__dirname}/controllers/mainControl`);

app.get('/api/test', mainControl.getData);
app.delete('/api/delete/:id', mainControl.deleteFromFavorites)
app.put('/api/edit/:id', mainControl.updateFavListTitle);
app.post('/api/favorites', mainControl.addToFavorites);


app.listen(port, () => {
   console.log(`Listening on port: ${port}`);
});


