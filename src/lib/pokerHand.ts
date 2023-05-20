import Card from "./card";

class PokerHand {

    constructor(public cards: Card[] = []) {
    };


    getOutcome() {

        let pairCount = 0;
        let flush = true;

        for (let i = 0; i < 4; i++) {
            const rankI = this.cards[i].rank;
            const suitI = this.cards[i].suit;
            for (let j = i + 1; j < 5; j++) {
                const rankJ = this.cards[j].rank;
                const suitJ = this.cards[j].suit;
                if (rankI === rankJ) {
                    pairCount++;
                }
                if (suitI !== suitJ) {
                    flush = false;
                }
            }
        }

        if (pairCount === 1) {
            return('Одна пара');
        } else if (pairCount === 2) {
            return('Две пары');
        } else if (pairCount === 3) {
            return('Тройка');
        } else if (pairCount === 4) {
            return ('Покер');
        }else if (flush) {
            return('Флэш');
        } else {
            return('Нет комбинации');
        }
    };


}

    export default PokerHand;