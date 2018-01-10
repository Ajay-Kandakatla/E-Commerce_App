"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getBooks } from '../../actions/booksActions';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';




class BooksList extends React.Component{
  componentDidMount(){
    this.props.getBooks();
  }
  render(){
    console.log('Book List Props-->',this.props);
	const booksList = this.props.books.map((booksArr,index)=>{
	  return(
	    <Col xs={12}sm={6} md={4} key={index}>
		  <BookItem
			_id={booksArr._id}
			title={booksArr.title}
			price={booksArr.price}
			description={booksArr.description}
		  />
		</Col>
		
	  );
	})
			
    return(<Grid>
		<Row>
		  <Cart/>
		</Row>
		<Row style={{marginTop:'15px'}}>
		  <Col xs={12} sm={6}>
			<BooksForm/>
		  </Col>
		  {booksList}
		</Row>
	  </Grid>
	)
  }
}
function mapStateToProps(state){
  return{
    books : state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getBooks:getBooks},dispatch)
}
export default connect( mapStateToProps, mapDispatchToProps )(BooksList);
