"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row, Well, Button,ButtonGroup, Label} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {deleteCartItem} from "../../actions/cartActions";


class Cart extends React.Component{
  constructor(){
    super();
    this.renderCart = this.renderCart.bind(this);
  }
  // onRemove(_id){
	
  // }
  renderEmpty(){
	return(<div></div>)
  }
  
  renderCart = ()=>{
    var self = this;
	const cartItemsList =
	  this.props.cart.map(function(cartArr){
		return(
		  <Panel key={cartArr._id}>
			<Row>
			  <Col xs={12} sm={4}>
				<h6>{cartArr.title}</h6><span>
</span>
			  </Col>
			  <Col xs={12} sm={2}>
				<h6>usd. {cartArr.price}</h6>
			  </Col>
			  <Col xs={12} sm={2}>
				<h6>qty. <Label bsStyle={'success'}></Label></h6>
			  </Col>
			  <Col xs={6} sm={4}>
				<ButtonGroup
				  style={{minWidth:'300px'}}>
				  <Button bsStyle="default"
						  bsSize="small">-</Button>
				  <Button bsStyle="default"
						  bsSize="small">+</Button>
				  <span> </span>
				  <Button
					onClick={()=>{
					  const currentBookToDelete = self.props.cart;
					  const indexToDelete = currentBookToDelete.findIndex(
					    function(cart){
					  	return cart._id === cartArr._id;
					    }
					  )
					  let cartAfterDelete = [...currentBookToDelete.slice(0, indexToDelete),...currentBookToDelete.slice(indexToDelete +1)]
					  self.props.deleteCartItem(cartAfterDelete);
					}}
					bsStyle="danger"
					bsSize="small">DELETE</Button>
				</ButtonGroup></Col>
			</Row>
		  </Panel>
		)
	  })
	return(
	  <Panel header="Cart" bsStyle="primary">
		{cartItemsList}
	  </Panel>
	)
  }
  render(){
    if(this.props.cart[0]){
	  return this.renderCart();
	} else {
	  return this.renderEmpty();
	}
  }
}
function mapStateToProps(state){
  return{
	cart: state.cart.cart
  }
}
function mapDisatchToProps(dispatch){
  return bindActionCreators({
	deleteCartItem:deleteCartItem
  },dispatch)
}
export default connect(mapStateToProps, mapDisatchToProps)(Cart);


