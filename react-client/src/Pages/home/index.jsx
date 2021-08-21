import { useCallback, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import classes from './home.module.scss';
import fetchGames from '../../redux/games/middleware/fetchGames';
import fetchMore from '../../redux/games/middleware/fetchMore';
import GameCard from "../../components/games/gameCards"
import isScrollEnd from '../../util/isScrollEnd';
import Loading from '../../components/loading';

const Home = ({ games, ...props }) => {
    const pageRef = useRef(props.page);
    const isLoading = useRef(false);
    const cardWrapperRef = useRef(null)
    const handleMore = ()=>{
        props.fetchMore(pageRef.current + 1)
        pageRef.current += 1;
        isLoading.current = !isLoading.current;
        setTimeout(()=>isLoading.current = !isLoading.current,1200)
    }
    const handleCardWrapperScroll = (e) => {
        console.log(pageRef.current);
        let element = e.currentTarget;
        if (!games.length && isScrollEnd(element) && !isLoading.current ) handleMore()
    }

    const cardWrapperRefCb = useCallback((wrapper) => {
        if (wrapper) {
            cardWrapperRef.current = wrapper;
            wrapper.addEventListener('scroll', handleCardWrapperScroll)
            if (isScrollEnd(wrapper) && !isLoading.current ) handleMore()
        }
    }, [])

    useEffect(() => {
        if (!games.length) props.fetchGames();
        return () => cardWrapperRef.current.removeEventListener('scroll', handleCardWrapperScroll)
    }, [])

    return (
        <>
            <div id="card-wrapper" ref={cardWrapperRefCb} className={`${classes.cards_wrapper}`}>
                {games.map((game, i) => <GameCard key={i} game={game} />)}
                {props.isFetching ? <Loading /> : null}
            </div>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);