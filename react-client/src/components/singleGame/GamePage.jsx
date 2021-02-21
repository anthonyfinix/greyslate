import React from 'react';
import getStarRatings from './star';
import getHighestRatingTitle from './getHighestRatingTitle';
import BuyNowWrapper from './buyNow';
import Ratings from './ratings';
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
                        {game.developers.map(developer => <span className="publisher">{developer.name} | </span>)}
                        <div>
                            <div className="rating-start-wrapper">{getStarRatings(game.rating)}</div>
                            <p className="highest-rating-title">{getHighestRatingTitle(game.ratings)}</p>
                            <p className="rating">{game.rating}</p>
                        </div>
                    </div>
                </div>
                <div className="buy-now-section">
                    <p className="buy-now-title">BUY NOW</p>
                    <BuyNowWrapper className="buy-now-wrapper" gameId={game.id} />
                </div>
            </div>
            <div className="detailed-content-wrapper">
                <div className="main-contents">
                    <div className="description-wrapper">
                        <p className="title">Description</p>
                        <span className="description" dangerouslySetInnerHTML={{ __html: game.description }} />
                    </div>
                </div>
                <div className="sidebar-contents">
                    <div className="ratings-wrapper">
                        <p className="title">Rating</p>
                        {game.ratings.map(rating => <Ratings rating={rating} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;