import React, { Component } from 'react';
import axios from 'axios';
import FavoriteButton from "./favoriteButton";
import FavoritesList from './favoritesList';

export default class QuoteGenerator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            randomQuote: {},
            favoriteQuotes: []
        }

        this.addToFavs = this.addToFavs.bind(this);
        this.deleteFromFavorites = this.deleteFromFavorites.bind(this);
    }

    componentDidMount() {
        axios
        .get('/api/test').then(response => {this.setState( {randomQuote: response.data});})
        .catch(error => console.log(error));
    }

    addToFavs() {
        let {randomQuote} = this.state;
        if (JSON.stringify(this.state.favoriteQuotes).includes(JSON.stringify(this.state.randomQuote))) {
            alert('This quote is already in your favorites')
            } else {
            axios
            .post('/api/favorites', {randomQuote})
            .then(response => this.setState({ favoriteQuotes: response.data }) )
        }
    } 

    changeQuote() {
        axios
        .get('/api/test').then(response => {this.setState({ randomQuote: response.data });})
        .catch(error => console.log(error));
    }
    
    deleteFromFavorites(quote) {
        axios
        .delete(`/api/delete/${quote}`)
        .then(response => { this.setState( { favoriteQuotes: response.data })})
        .catch( () => console.log( 'deletion error'));
    }

    render() {
        const {randomQuote} = this.state
  
        return (
        <div className="middle-div"> 
            <div className="blockquote">
                <p>{randomQuote.quoteText} </p> 
                <br />
                <br />
                <p> --{randomQuote.quoteAuthor} </p>
            </div>
            <br/>
            <button className={'button'} onClick={ () => this.changeQuote()}>Get A New Quote</button>
            <br/>
            <FavoriteButton add={this.addToFavs}/>
            <FavoritesList favoriteQuotes={this.state.favoriteQuotes} delete={this.deleteFromFavorites}/>
        </div>
        );
    }
}




