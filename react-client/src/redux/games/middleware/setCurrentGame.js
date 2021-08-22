import start_fetching_single_game from "../actions/start_fetching_single_game";
import stop_fetching_single_game from "../actions/stop_fetching_single_game";
import set_current_game from "../actions/set_current_game";
import http from '../../../util/axios';

export default (id) => dispatch => {
    dispatch(start_fetching_single_game());
    return http.get(`/api/game/${id}`)
        .then(response => {
            if (response.data) dispatch(set_current_game(response.data))
        })
        .finally(() => dispatch(stop_fetching_single_game()))
}