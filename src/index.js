import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './redux.js';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Route, Switch } from 'react-router';

import Home from './Home/Home.jsx';
import News from './News/News.jsx';
import Search from './Search/Search.jsx';

import Controversy from './Card/Controversy.jsx';
import CardText from './CardText/CardText.jsx';
import Comments from './Comments/Comments.jsx';

import FeedCardList from './FeedCardList/FeedCardList.jsx';
import FeedCard from './FeedCard/FeedCard.jsx';

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
	),

	NoMatch = ({ location }) => (
		<div>
			<h3>No match for <code>{location.pathname}</code></h3>
		</div>
	);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/news" component={News} />
					<Route path="/search" component={Search} />

					<Route path="/:controversy/worldview/card" component={Card} />
					<Route path="/:controversy/worldview/text" component={CardText} />
					<Route path="/:controversy/:worldview?/comments" component={Comments} />

					<Route path="/:controversy/:level(worldview|model|propositional|conceptual|narrative)/:feed" component={FeedCard} />
					<Route path="/:controversy/:level(worldview|model|propositional|conceptual|narrative)" component={FeedCardList} />

					<Route component={NoMatch} />
				</Switch>
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
