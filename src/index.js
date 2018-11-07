import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router-3";
import {syncHistoryWithStore} from "react-router-redux";
import store from "./common/store/store";
import routes from "./routes";

import "./common/styles/main.css";
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>
	,
	document.getElementById('root')
);
registerServiceWorker();