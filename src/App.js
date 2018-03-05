import React, { Component } from 'react';
import './styling/App.css';
import QuoteGenerator from "./components/quoteGenerator"
import Header from './components/header'

class App extends Component {
 
  render() {
    
    return (
      <div className="parent-container"> 
        <Header />
        <QuoteGenerator />
      </div>
    );
  }
}

export default App;
