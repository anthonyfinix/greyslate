import { useParams } from 'react-router-dom';
import React from 'react';
import axios from '../../util/axios';
import LoadingGif from '../loading';
import GamePage from './GamePage';

const SinglePage = () => {
    const [game, setGame] = React.useState(null);
    const [loading, setLoading] = React.useState(true)
    const { gameId } = useParams();


    React.useEffect(() => {
        axios.get(`api/game/${gameId}`)
            .then((res) => {
                setGame(res.data)
                setLoading(false)
            })
    }, [])

    return loading ? <LoadingGif /> : <GamePage game={game} />
}
export default SinglePage