import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './redux.js';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Route } from 'react-router';

import Controversy from './Controversy.jsx';
import './index.scss';

const middlewareStoreEnhancer = applyMiddleware(
	thunkMiddleware.withExtraArgument({
		localStorage
	})
);

const devToolStoreEnhancer =
	(window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__()) ||
	((x) => x);

const
	history = createHistory(),
	routeMiddleware = routerMiddleware(history);

const store = createStore(
	combineReducers({
		reducer,
		router: routerReducer
	}),
	compose(middlewareStoreEnhancer, devToolStoreEnhancer),
	applyMiddleware(routeMiddleware)
);

const
	Card = () => (
		<MuiThemeProvider>
			<Controversy />
		</MuiThemeProvider>
	);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				{/* <Route exact path="/" component={Home} /> */}
				<Route path="/controversy" component={Card} />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
