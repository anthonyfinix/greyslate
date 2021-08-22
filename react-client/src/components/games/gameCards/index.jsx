import React from 'react';
import './gamecard.css';
import Box from '@material-ui/core/Box';
import getPlatforms from './platform';
import getStarRatings from './star';
import GameCover from '../gameCover';

let GameCard = ({ game, onClick }) => {
    const handleClick = () => onClick ? onClick(game.id) : null

    return (
        <Box key={game.id} onClick={handleClick} className="game-card">
            <GameCover image={game.background_image} />
            <h3 className="game-name">{game.name}</h3>
            <div className="star-wrapper" >{getStarRatings(game.rating)}</div>
            <div className="platform-wrapper">{getPlatforms(game.platforms)}</div>
        </Box>
    );
}

export default GameCard;