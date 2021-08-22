import Box from "@material-ui/core/Box";
import classes from './gameCover.module.scss';
const GameCover = ({image,...props}) => {
    return (
        <Box className={`${classes.wrapper}`}>
            <img src={image} className={`${classes.image}`} alt="game cover" />
        </Box>
    )
}
export default GameCover;