"use strict"
import {createStore ,applyMiddleware} from 'redux';
import reducers from './reducers/index';
import logger  from 'redux-logger';
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks} from './actions/booksActions';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './app.css';
import Header from './components/header';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';

import Main from "./main";

const Routes = (
  <Provider store={store}>
	<Router history={hashHistory}>
	  <Route path='/' component={Main} >
		<IndexRoute component={BooksList} />
	  </Route>
	  <Route path='/admin' component={BooksForm} />
	</Router>
  </Provider>
)
render(
  Routes
  , document.getElementById('app')
)