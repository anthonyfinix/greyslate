import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from './rootReducer'
const middleware = [thunk]
middleware.push(logger)
const ReduxProvider = ({ children }) => {
    const store = createStore(rootReducer, applyMiddleware(...middleware))
    return (
        <Provider store={store}> {children} </Provider>
    )
}
export default ReduxProvider;