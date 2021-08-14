import React from 'react';
import './gamecard.css';
import getPlatforms from './platform';
import getStarRatings from './star';
import { Link } from 'react-router-dom';

let GameCard = ({ game }) => {
    return (
        <Link to={`/game/${game.id}`} target="_blank" className="game-card">
            <div className="game-cover">
                <img src={game.background_image} alt="game cover" />
            </div>
            <h3 className="game-name">{game.name}</h3>
            <div className="star-wrapper" >{getStarRatings(game.rating)}</div>
            <div className="platform-wrapper">{getPlatforms(game.platforms)}</div>
        </Link>
    );
}

export default GameCard;