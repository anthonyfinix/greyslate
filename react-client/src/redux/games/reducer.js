import initialState from "./initialState"
import { SET_GAMES } from "./actions/set_games";
import { START_FETCHING_SINGLE_GAME } from "./actions/start_fetching_single_game";
import { STOP_FETCHING_SINGLE_GAME } from "./actions/stop_fetching_single_game";
import { SET_CURRENT_GAME } from "./actions/set_current_game";
import { START_FETCHING } from "./actions/start_fetching";
import { STOP_FETCHING } from "./actions/stop_fetching";
import { ADD_MORE_GAMES } from "./actions/add_more_games";
import { INCREASE_PAGE } from "./actions/increase_page";

export default (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return { ...state, isFetching: true }
        case START_FETCHING_SINGLE_GAME:
            return { ...state, isFetchingCurrentGame: true }
        case STOP_FETCHING:
            return { ...state, isFetching: false }
        case STOP_FETCHING_SINGLE_GAME:
            return { ...state, isFetchingCurrentGame: false }
        case SET_GAMES:
            return { ...state, games: [...action.payload] }
        case SET_CURRENT_GAME:
            return { ...state, currentGame: action.payload }
        case ADD_MORE_GAMES:
            return { ...state, games: [...state.games, ...action.payload] }
        case INCREASE_PAGE:
            return { ...state, page: state.page + 1 }
        default:
            return state
    }
}