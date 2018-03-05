import React, { Component } from 'react';
import axios from 'axios';

export default class FavoritesList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        favoritesList: [],
        title: 'My Saved Quotes'    
      };
    
  this.updateFavListTitle = this.updateFavListTitle.bind(this);
  }
 
  componentDidMount() {
    axios
      .get('/api/favorites')
      .then(response => this.setState( { favoritesList: response.data } ))
      .catch(error => console.log(error));
  }

  updateFavListTitle() {
    let update = prompt('Please update your favorite list name');
      axios
      .put(`/api/edit/${update}`)
      .then(response => { this.setState( { title: response.data } ); })
      .catch(error => console.log(error));  
  }

  render() {
    let favorites = this.props.favoriteQuotes.map((element, index) => (  
      <div>
          <p onClick={() => this.props.delete(index)} >{element.quoteText}</p>
          <p>--{element.quoteAuthor}</p>
      </div>
    ));

    return (
     <div className='favorites'>
       <h2 onClick={ () => this.updateFavListTitle()}> <span>{this.state.title}</span>
       <br /> <p>(Click on title to change list name)  (Click on a saved quote to delete from list)</p>
       </h2>
       
       <div className='fav-list'>{favorites}</div>
     </div>   
    );
  }
}

