import React from 'react';

interface IPersonProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<IPersonProps> = props => {
    const cardClasses = `card rank-${props.rank} ${props.suit}`;

    return (
        <div className="playingCards faceImages">
            <span className={cardClasses}>
              <span className="rank">{props.rank.toLowerCase()}</span>
              <span className="suit">{props.suit}</span>
            </span>
        </div>
    );
};

export default CardView;