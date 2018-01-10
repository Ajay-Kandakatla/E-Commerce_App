import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, Well, Button} from 'react-bootstrap';
import {addToCart} from "../../actions/cartActions";
import {bindActionCreators} from 'redux';

class BoookItem extends React.Component{
  handleCart = ()=>{
    const book = [{
      _id:this.props._id,
	  title:this.props.title,
	  description: this.props.description,
	  price:this.props.price
	}]
    this.props.addToCart(book);
  }
  render(){
    const {title, description, _id , price} = this.props;
    return (
      <Well>
		<Row>
		  <Col xs={12}>
			  <h6>{title}</h6>
			  <p>{description}</p>
			  <h6> Usd. {price}</h6>
			<Button onClick={this.handleCart.bind(this)} bsStyle={'primary'}> Add to Cart </Button>
		  </Col>
		</Row>
	  </Well>
	  
    );
  }
}
function mapStateToProps(state){
  return{
	cart: state.cart.cart
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
	addToCart:addToCart
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BoookItem);