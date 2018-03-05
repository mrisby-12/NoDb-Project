import React, { Component } from 'react';
import QuoteGenerator from './quoteGenerator'
import axios from 'axios';



export default class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesList: []
    };
    this.deleteFromFavorites = this.deleteFromFavorites.bind(this);
  }
 
  componentDidMount() {
    axios
      .get('/api/favorites')
      .then(response => this.setState( { favoritesList: response.data } ))
      .catch( () => console.log('error'));

  }

  deleteFromFavorites(quote) {
    axios
      .delete(`/api/delete/${quote.quoteText}`)
      .then(response => this.setState( { favoritesList: response.data } ))
      .catch( () => console.log( 'deletion error'));
  }

  render() {
    let favorites = this.props.favoriteQuotes.map((element) =>(  
      <div>
          <p>{element.quoteText}</p>
          <p>--{element.quoteAuthor}</p>
      </div>
 ));
    console.log('favorites', favorites);
    return (
     <div>
       <h2>My Saved Quotes</h2>
       <div className='favorites'>{favorites}</div>
     </div>   
  
    );
  }
}

