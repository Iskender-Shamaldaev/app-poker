import React from 'react';
import './cards.css';
import './App.css';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/cardDeck";

const App = () => {
    const cardDeck = new CardDeck();
    console.log(cardDeck.deck);
    console.log(cardDeck.getCards(5));
    console.log(cardDeck.deck);


    return (
        <div className="App">
            <CardView rank="K" suit="diams"/>
        </div>
    );
};

export default App;
