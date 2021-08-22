import { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classes from './home.module.scss';
import fetchGames from '../../redux/games/middleware/fetchGames';
import setCurrentGame from '../../redux/games/middleware/setCurrentGame';
import fetchMore from '../../redux/games/middleware/fetchMore';
import GameCard from "../../components/games/gameCards"
import isScrollEnd from '../../util/isScrollEnd';
import Loading from '../../components/loading';
import SingleGameSideCard from '../../components/games/SingleGameSideCard';

const Home = ({ games, ...props }) => {
    const pageRef = useRef(props.page);
    const isLoading = useRef(false);
    const cardWrapperRef = useRef(null);
    const [detailsCardIsOpen, setDetailsCardIsOpen] = useState(false);
    const handleMore = () => {
        props.fetchMore(pageRef.current + 1)
        pageRef.current += 1;
        isLoading.current = !isLoading.current;
        setTimeout(() => isLoading.current = !isLoading.current, 1200)
    }
    const handleCardWrapperScroll = (e) => {
        let element = e.currentTarget;
        if (!games.length && isScrollEnd(element) && !isLoading.current) handleMore()
    }

    const cardWrapperRefCb = useCallback((wrapper) => {
        if (wrapper) {
            cardWrapperRef.current = wrapper;
            wrapper.addEventListener('scroll', handleCardWrapperScroll)
            if (isScrollEnd(wrapper) && !isLoading.current) handleMore()
        }
    }, [])

    const handleCardOnClick = (gameId) => {
        if (!detailsCardIsOpen) props.setCurrentGame(gameId);
        setDetailsCardIsOpen(!detailsCardIsOpen)
    }

    useEffect(() => {
        if (!games.length) props.fetchGames();
        return () => cardWrapperRef.current.removeEventListener('scroll', handleCardWrapperScroll)
    }, [])

    return (
        <>
            <div id="card-wrapper" ref={cardWrapperRefCb} className={`${classes.cards_wrapper}`}>
                {games.map((game, i) => <GameCard key={i} onClick={handleCardOnClick} game={game} />)}
                {props.isFetching ? <Loading /> : null}
            </div>
            <SingleGameSideCard open={detailsCardIsOpen} />
        </>
    )
}

const mapStateToProps = (state) => ({
    games: [...state.games.games],
    page: state.games.page,
    isFetching: state.games.isFetching
})

const mapDispatchToProps = {
    fetchGames,
    fetchMore,
    setCurrentGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);