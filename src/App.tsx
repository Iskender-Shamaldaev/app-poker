import React, {useState} from 'react';
import './cards.css';
import './App.css';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/cardDeck";
import Card from "./lib/card";

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const getRandomCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards();
        setCards(newCards);
    }

    if (cards.length === 0) {
        return <button onClick={getRandomCards}>Раздать карты</button>;
    }

    const cardDeck = new CardDeck();
    // console.log(cardDeck.deck);
    // console.log(cardDeck.getCards('5'));
    // console.log(cardDeck.deck);
    const randomDeck = cardDeck.getCards();


    return (
        <div className="App">
            <CardView rank={randomDeck[0].rank} suit={randomDeck[0].suit}/>
            <CardView rank={randomDeck[1].rank} suit={randomDeck[1].suit}/>
            <CardView rank={randomDeck[2].rank} suit={randomDeck[2].suit}/>
            <CardView rank={randomDeck[3].rank} suit={randomDeck[3].suit}/>
            <CardView rank={randomDeck[4].rank} suit={randomDeck[4].suit}/>
            <div>
                <button onClick={getRandomCards}>Раздать карты</button>
            </div>

        </div>
    );
};

export default App;
