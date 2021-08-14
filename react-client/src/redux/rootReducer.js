import { combineReducers } from "redux";
import gameReducer from './games/reducer'
export default combineReducers({
    games:gameReducer
})