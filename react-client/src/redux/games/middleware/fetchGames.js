import http from '../../../util/axios';
import fetch_games from '../actions/fetch_games';
export default () => dispatch => {
    return http.get('/api/games')
        .then(response => {
            if (response.data) dispatch(fetch_games(response.data.results))
        })
}