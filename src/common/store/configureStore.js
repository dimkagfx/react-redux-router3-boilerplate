import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {browserHistory} from "react-router-3";
import {routerMiddleware} from "react-router-redux";

import rootReducer from "../reducers";

const middleware = routerMiddleware(browserHistory);

const composeEnhancers = (process.env.NODE_ENV === 'development' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunkMiddleware, middleware)),
	);

	return store;
}
