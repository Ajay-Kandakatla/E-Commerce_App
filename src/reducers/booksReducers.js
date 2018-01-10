"use strict"
export function booksReducers(state={
  books:
	[{
	  _id:1,
	  title:'this is the title',
	  description:'ths is the description',
	  price:'3.33'},
	{
	  _id:2,
	  title:'this is the title',
	  description:'ths is the description',
	  price:'5.00'},
  ]},action){
  switch (action.type){
	case "GET_BOOKS":
	  return {...state ,books : [...action.payload]};
	  break;
	case "POST_BOOK":
	  return {books:[...state.books,...action.payload]};
	  break;
	case "DELETE_BOOK":
	  const currentBookToDelete =
		[...state.books]
	  const indexToDelete =
		currentBookToDelete.findIndex(
		  function(book){
			return book._id === action.payload._id;
		  }
		)
	  return { books:
		  [...currentBookToDelete.slice(0,
			indexToDelete),
			...currentBookToDelete.slice(indexToDelete +
			  1)]}
	  break;
	case "UPDATE_BOOK":
	  const currentBookToUpdate = [...state.books]
	  const indexToUpdate =
		currentBookToUpdate.findIndex(
		  function(book){
			return book._id === action.payload._id;
		  }
		)
	  const newBookToUpdate = {
		...currentBookToUpdate[indexToUpdate],
		title: action.payload.title
	  }
		return {books:
			[...currentBookToUpdate.slice(0, indexToUp2d0ate),newBookToUpdate,
			  ...currentBookToUpdate.slice(indexToUpdate +
				1)]}
  }
  return state;
}
