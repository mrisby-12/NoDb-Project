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
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/test').then(response => {
         this.setState( {randomQuote: response.data} );
        })
        .catch(err => console.log(err));
    }

    addToFavs() {
        let addTo = this.state.favoriteQuotes;
        if (JSON.stringify(this.state.favoriteQuotes).includes(JSON.stringify(this.state.randomQuote))) {
            alert('This quote is already in your favorites')
        } else {
       
            addTo.push( this.state.randomQuote)
         this.setState( { favoriteQuotes: addTo } )
           
        }
    } 

    changeQuote() {
        axios.get('http://localhost:3001/api/getNewQuote').then(response => {
         this.setState( {randomQuote: response.data} );
        })
        .catch(err => console.log(err));
      }
    

    render() {
        const {randomQuote, favoriteQuotes} = this.state
        console.log(favoriteQuotes);
    //     let favorites = favoriteQuotes.map((element) =>(  
    //         <div>
    //             <p>{element.quoteText}</p>
    //             <p>--{element.quoteAuthor}</p>
    //         </div>
    //    ));
        return (
        <div> 
            <div className="blockquote"> <p>{randomQuote.quoteText} </p> 
                    <br />  <br />          <p> --{randomQuote.quoteAuthor} </p>
            </div>
            <div>  </div>
            <br/>
            <button className={'button'} onClick={ () => this.changeQuote()}>Get A New Quote</button>
            <br/>
            <FavoriteButton add={this.addToFavs}/>
            {/* <div className='favorites'>{favorites}</div> */}
            <FavoritesList favoriteQuotes={this.state.favoriteQuotes}/>
          </div>
        );
      }
}




