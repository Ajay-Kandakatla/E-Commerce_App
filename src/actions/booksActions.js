"use strict"
import axios from 'axios';
export function getBooks(book){
  return function(dispatch){
    axios.get('/books')
	  .then(function(response){
	    dispatch({type:'GET_BOOKS', payload:response.data})
	  })
	  .catch(function(err){
		dispatch({type:"GET_BOOKS_REJECTED", payload: err || 'There was an error while Retrieving Books'})
	  })
  }
}
export function postBooks(book){
  return function(dispatch){
    axios.post("/books", book)
	  .then(function(response){
	    dispatch({type:"POST_BOOK", payload:response.data})
	  })
	  .catch(function(err){
	    dispatch({type:"POST_BOOK_REJECTED", payload: err || 'There was an error while posting'})
	  })
  }
}
export function deleteBooks(_id){
  return {
	type:"DELETE_BOOK",
	payload: _id
  }
}

