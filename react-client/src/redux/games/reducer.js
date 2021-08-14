import initialState from "./initialState"
import { FETCH_GAMES } from "./actions/fetch_games";
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return { ...state, games: [...state.games, ...action.payload], isLoading: false }
        default:
            return state
    }
}