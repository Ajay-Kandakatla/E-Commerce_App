"use strict"
import { combineReducers } from 'redux';
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';
// Here combine the Reducers
export default combineReducers({
  books:booksReducers,
  cart:cartReducers
  });