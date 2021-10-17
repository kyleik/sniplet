import { createStore, applyMiddleware, combineReducers  } from "redux";
import thunk from "redux-thunk";
import playingReducer from "./reducers";

const allReducers = combineReducers({playingReducer});


export const Store = createStore(allReducers, /* preloadedState, */
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


