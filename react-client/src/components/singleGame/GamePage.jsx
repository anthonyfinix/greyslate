import React from 'react';
import "./gamepage.css";
const GamePage = ({ game }) => {
    console.log(game)
    return (
        <div id="game-page-wrapper">
            <div className="cover-image" style={{ backgroundImage: `url(${game.background_image})` }}></div>
            <div className="section-1">
                <div>
                    <h2 className="game-name">{game.name}</h2>
                    <div>
                        {game.publishers.map(publisher=><span className="publisher">{publisher.name} | </span>)}

                    </div>
                </div>
                <div className="buy-now-section">
                    
                </div>
            </div>
        </div>
    )
}

export default GamePage;