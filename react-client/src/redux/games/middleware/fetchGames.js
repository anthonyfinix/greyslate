import http from '../../../util/axios';
import fetch_games from '../actions/fetch_games';
import start_fetching from '../actions/start_fetching';
import stop_fetching from '../actions/stop_fetching';
export default () => dispatch => {
    dispatch(start_fetching());
    return http.get('/api/games')
        .then(response => {
            if (response.data) dispatch(fetch_games(response.data.results))
        })
        .finally(() => dispatch(stop_fetching()))
}