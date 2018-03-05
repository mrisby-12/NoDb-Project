import React, { Component } from 'react';
import axios from 'axios';
import './styling/App.css';
import QuoteGenerator from "./components/quoteGenerator"
import Header from './components/header'
import FavoritesList from './components/favoritesList'
import FavoriteButton from './components/favoriteButton'


class App extends Component {
 
  
  
 
  render() {
    
    return (
      <div className="parent-container"> 
        <Header />
        <QuoteGenerator />
        {/* <FavoritesList /> */}
        
        
      </div>
    );
  }
}

export default App;
