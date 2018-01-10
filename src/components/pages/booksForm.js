import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';
import {bindActionCreators} from 'redux';

import {postBooks} from '../../actions/booksActions';
class BooksForm extends React.Component{
  
  handleSubmit = ()=>{
	const book = [{
	  title:findDOMNode(this.refs.title).value,
	  description: findDOMNode(this.refs.description).value,
	  price:findDOMNode(this.refs.price).value,
	}];
	this.props.postBooks(book);
 
}
  render(){
    return(
      <Well>
		<Panel>
		  <FormGroup controlId={"title"}>
			<ControlLabel>Title</ControlLabel>
			<FormControl
				type={'text'}
				placeholder={'Enter Title'}
				ref={'title'}
			/>
		  </FormGroup>
		  <FormGroup controlId={"Description"}>
			<ControlLabel>Description</ControlLabel>
			<FormControl
			  type={'text'}
			  placeholder={'Enter Description'}
			  ref={'description'}
			/>
		  </FormGroup>
		  <FormGroup controlId={"price"}>
			<ControlLabel>Price</ControlLabel>
			<FormControl
			  type={'text'}
			  placeholder={'Enter Price'}
			  ref={'price'}
			/>
		  </FormGroup>
		  <Button bsStyle={'primary'}
				  onClick={this.handleSubmit.bind(this)}> Save book </Button>
		</Panel>
	  </Well>
	)
  }
}
function mapStateToProps(dispatch){
  return bindActionCreators({postBooks},dispatch)
}
export default connect(null, mapStateToProps)(BooksForm);