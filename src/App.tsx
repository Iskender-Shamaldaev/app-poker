import React, {useState} from 'react';
import './cards.css';
import './App.css';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/cardDeck";
import Card from "./lib/card";
import PokerHand from "./lib/pokerHand";

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);


    const getRandomCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards();
        setCards(newCards);
    }

    if (cards.length === 0) {
        return (
            <div className="App">
                <div className="noCards">Карт еще нет</div>
                <button className="btn" onClick={getRandomCards}>Раздать карты</button>
            </div>
        );
    }

    const pokerHand = new PokerHand(cards);

    return (
        <div className="App">
            <div className="noCards">{pokerHand.getOutcome()}</div>
            <div className="cards">
                <CardView rank={cards[0].rank} suit={cards[0].suit} />
                <CardView rank={cards[1].rank} suit={cards[1].suit} />
                <CardView rank={cards[2].rank} suit={cards[2].suit} />
                <CardView rank={cards[3].rank} suit={cards[3].suit} />
                <CardView rank={cards[4].rank} suit={cards[4].suit} />
            </div>

            <div>
                <button className="btn" onClick={getRandomCards}>Раздать карты</button>
            </div>
        </div>
    );
};

export default App;

