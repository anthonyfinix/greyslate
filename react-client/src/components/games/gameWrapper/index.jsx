import React from 'react';
import GameCard from "../gameCards";
import LoadingGif from "../../loading";
import { connect } from 'react-redux';

const GameWrapper = ({ gamesWrapperHandleScroll, games, loading, gamesWrapperRef, page }) => {
    return (
        <div
            // className="games-wrapper"
            // ref={gamesWrapperRef}
            // data-page={page}
            // onScroll={gamesWrapperHandleScroll}
        >
            game wrapper
            {games.map((game) => (
                <div key={game.id} className="game-card-wrapper">
                    <GameCard game={game} />
                </div>
            ))}
            {loading ? <LoadingGif /> : null}
        </div>
    )
}
const mapStateToProps = (state) => ({
    games: state.games.games
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(GameWrapper);