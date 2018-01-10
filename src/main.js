import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

class Main extends React.Component{
  render(){
    return(
      <div>
		<Header/>
		{this.props.children}
		<Footer/>
	  </div>
    
	);
  }
}
export default Main;