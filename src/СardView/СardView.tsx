import React from 'react';

interface IPersonProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<IPersonProps> = props => {
    const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

    let symbol = '';

    if (props.suit === 'diams') {
        symbol = '♦'
    } else if (props.suit === 'hearts') {
        symbol = '♥'
    } else if (props.suit === 'clubs') {
        symbol = '♣'
    } else if (props.suit === 'spades') {
        symbol = '♠'
    }

    return (
        <div className="playingCards faceImages">
            <span className={cardClasses}>
              <span className="rank">{props.rank}</span>
              <span className="suit">{symbol}</span>
            </span>
        </div>
    );
};

export default CardView;