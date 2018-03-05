import React, { Component } from 'react';
import './../styling/App.css';

export default class FavoriteButton extends Component {
  
  render() {
    return (
      <div> 
        <br/>
        <button className={'button'} onClick={() => this.props.add()}>Add To Favorites</button>
        <br/>
      </div>
    );
  }
}

