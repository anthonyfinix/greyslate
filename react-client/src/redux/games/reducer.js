import initialState from "./initialState"
import { FETCH_GAMES } from "./actions/fetch_games";
import { START_FETCHING } from "./actions/start_fetching";
import { STOP_FETCHING } from "./actions/stop_fetching";
import { ADD_MORE_GAMES } from "./actions/add_more_games";
import { INCREASE_PAGE } from "./actions/increase_page";

export default (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return { ...state, isFetching: true }
        case STOP_FETCHING:
            return { ...state, isFetching: false }
        case FETCH_GAMES:
            return { ...state, games: [...action.payload] }
        case ADD_MORE_GAMES:
            return { ...state, games: [...state.games, ...action.payload] }
        case INCREASE_PAGE:
            return { ...state, page: state.page + 1 }
        default:
            return state
    }
}