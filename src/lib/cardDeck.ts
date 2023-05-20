import Card from "./card";

class CardDeck {
    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['diams', 'hearts', 'clubs', 'spades'];
    public deck: Card[] = [];


    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card);
            });
        });
    };

    getCard(): Card {
        let random: number = Math.floor(Math.random() * this.deck.length);
        let randomInt = this.deck[random]; // Card
        this.deck.splice(random, 1);
        return randomInt;
    };

    getCards(howMany = 5): Card[] {
        const array: Card[] = [];

        for (let i = 0; i < howMany; i++) {
            array.push(this.getCard());
        }
        return array;
    }

}

export default CardDeck;