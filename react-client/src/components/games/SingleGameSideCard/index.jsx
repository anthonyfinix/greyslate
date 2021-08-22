import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import classes from './singleGameSideCard.module.scss';
import getStarRatings from '../../singleGame/star';
import getHighestRatingTitle from '../../singleGame/getHighestRatingTitle';
import Paper from '@material-ui/core/Paper'
import GameCover from '../gameCover';
import { connect } from 'react-redux';
import Loading from '../../loading';
const SingleGameSideCard = ({ open, handleClose, ...props }) => {
    console.log(props)
    if (!open) return null;
    if (props.loading) return <Loading />
    return (
        <Paper elevation={5} className={`${classes.wrapper}`}>
            <div className={`${classes.row}`}>
                <div className={`${classes.status}`}>
                    <div className="rating-start-wrapper">{getStarRatings(props.rating)}</div>
                    <p className={`${classes.rating_title}`}>{getHighestRatingTitle(props.ratings)}</p>
                    <p className={`${classes.rating}`}>{props.rating}</p>
                </div>
                <GameCover image={props.background_image} />
            </div>
            <div className={`${classes.details}`}>
                <h2 className={`${classes.game_title}`}>{props.name}</h2>
                {props.developers.map(developer => <span className="publisher">{developer.name} | </span>)}
            </div>
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    ...state.games.currentGame,
    loading: state.games.isFetchingCurrentGame
});

const mapDispatchToProps = ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleGameSideCard);