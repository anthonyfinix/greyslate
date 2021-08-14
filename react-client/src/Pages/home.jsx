import { connect } from 'react-redux';
import fetchGames from '../redux/games/middleware/fetchGames';
import GameCard from "../components/games/gameCards"
import { useEffect } from 'react';
const Home = ({ games, ...props }) => {
    useEffect(() => {
        if (props.isLoading) props.fetchGames()
    }, [])
    return (
        <>
            <div className="game-card-wrapper">
                {games.map((game) => <GameCard game={game} />)}
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    games: [...state.games.games],
    isLoading: state.games.isLoading,
})
const mapDispatchToProps = {
    fetchGames
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);