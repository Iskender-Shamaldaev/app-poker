import Card from "./card";

class PokerHand {

    constructor(public cards: Card[] = []) {
    };


    getOutcome() {
        const cards = this.cards;
        let pairCount = 0;
        let flush = true;

        for (let i = 0; i < 4; i++) {
            const rankI = cards[i].rank;
            const suitI = cards[i].suit;
            for (let j = i + 1; j < 5; j++) {
                const rankJ = cards[j].rank;
                const suitJ = cards[j].suit;
                if (rankI === rankJ) {
                    pairCount++;
                }
                if (suitI !== suitJ) {
                    flush = false;
                    break;
                }
            }
        }

        if (flush) {
            return 'Флэш';
        } else if (pairCount === 1) {
            return 'Одна пара';
        } else if (pairCount === 2) {
            return 'Две пары';
        } else if (pairCount === 3) {
            return 'Тройка';
        } else {
            return 'Нет комбинации';
        }
    };


}

export default PokerHand;