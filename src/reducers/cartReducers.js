"use strict"
 export function cartReducers(state={cart:[]}, action) {
 	switch(action.type){
	  case("ADD_TO_CART"):
	    return {cart :[...state.cart, ...action.payload]}
	    break;
	  case("DELETE_CART_ITEM"):
		const currentCartToDelete =
		  [...state.cart]
		const indexToDelete =
		  currentCartToDelete.findIndex(
			function(book){
			  return book._id === action.payload._id;
			}
		  )
		return { cart:
			[...currentCartToDelete.slice(0,
			  indexToDelete)]}
		break;
	}
	return state;
 }