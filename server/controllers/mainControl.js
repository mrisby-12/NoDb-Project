import FavoritesList from '../../src/components/favoritesList';

const axios = require('axios');
const apiUrl = "http://api.forismatic.com/api/1.0/";

let favorites = [];


const deleteFromFavorites = (req, res, next) => {
    const { id } = req.params;
    favorites = favorites.filter(quote => quote.quoteText !== id);
    res.send(favorites);
}

const getData = (req, res, next) => {
   axios
     .get("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
     .then(response => res.status(200).json(response.data))
     .catch(error => console.log(error)); 
 };

const addToFavorites = (req, res, next) => {
    res.send(favorites);
}

const updateFavListTitle = (req, res, next) => {
    const { id } = req.params;

}

const getNewQuote = (req, res, next) => {

}

module.exports = {
    deleteFromFavorites,
    getData,
    addToFavorites,
    updateFavListTitle,
    getNewQuote
}