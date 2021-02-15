import React from 'react';
import GameCard from "../gameCards";
import LoadingGif from "../loading";

const GameWrapper = ({ gamesWrapperHandleScroll, games, loading, gamesWrapperRef,page }) => {
    return (
        <div
            className="games-wrapper"
            ref={gamesWrapperRef}
            data-page={page}
            onScroll={gamesWrapperHandleScroll}
        >
            {games.map((game) => (
                <div key={game.id} className="game-card-wrapper">
                    <GameCard game={game} />
                </div>
            ))}
            {loading ? <LoadingGif /> : null}
        </div>
    )
}

export default GameWrapper;