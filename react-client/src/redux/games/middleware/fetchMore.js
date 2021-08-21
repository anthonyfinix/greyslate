import http from '../../../util/axios';
import add_more_games from '../actions/add_more_games';
import increase_page from '../actions/increase_page';
import start_fetching from '../actions/start_fetching';
import stop_fetching from '../actions/stop_fetching';
export default (pageNo) => dispatch => {
    dispatch(start_fetching())
    return http.get('/api/games', { params: { page: pageNo + 1 } })
        .then(response => {
            if (response.data) {
                dispatch(increase_page())
                dispatch(add_more_games(response.data.results))
            }
        }).finally(() => dispatch(stop_fetching()))
}