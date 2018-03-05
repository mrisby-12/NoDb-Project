const axios = require('axios');
const apiUrl = "http://api.forismatic.com/api/1.0/";

let favorites = [];
let randomQuote = [];
let title = 'My Saved Quotes';

const deleteFromFavorites = (req, res, next) => {
    // console.log(req.params)
    const { id } = req.params;
    favorites.splice(id, 1)
    res.status(200).json(favorites);
}

const getData = (req, res, next) => {
   axios
     .get("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
     .then(response => res.status(200).json(response.data))
     .catch(error => console.log(error)); 
}

const addToFavorites = (req, res, next) => {
    favorites.push(req.body.randomQuote)
    res.status(200).json(favorites);
}

const updateFavListTitle = (req, res, next) => {
    const { id } = req.params;
    title = id;
    res.status(200).json(title);
}

module.exports = {
    deleteFromFavorites,
    getData,
    addToFavorites,
    updateFavListTitle,
}