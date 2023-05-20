import Card from "./card";

class PokerHand {

    constructor(public cards: Card[] = []) {
    };


    getOutcome = () => {
        const cards = this.cards;

        // for (let i = 0; i < cards.length; i++) {
        //     let rank = cards[i].rank;
        //
        // if(rank === cards[i].rank) {
        //     console.log('Одна пара');
        // }
        // }

        return this.cards;
    };
}

export default PokerHand;