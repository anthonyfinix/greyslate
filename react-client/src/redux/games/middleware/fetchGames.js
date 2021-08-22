import http from '../../../util/axios';
import set_games from '../actions/set_games';
import start_fetching from '../actions/start_fetching';
import stop_fetching from '../actions/stop_fetching';
export default () => dispatch => {
    dispatch(start_fetching());
    return http.get('/api/games')
        .then(response => {
            if (response.data) dispatch(set_games(response.data.results))
        })
        .finally(() => dispatch(stop_fetching()))
}