import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShowToMyList, removeShowFromMyList } from '../actions/mylistActions';
import { addShowToRecom } from '../actions/recomActions';

class Show extends Component {
	constructor(props) {
    super(props);
		this.state = {
			show: props.show,
			type: props.type,
			toggle: false
		}
	}
 
  addToMyList = () => {
  	this.props.addShowToMyList(this.state.show);
  }

  removeFromMyList = () => {
  	this.props.removeShowFromMyList(this.state.show);	
  	this.props.addShowToRecom(this.state.show);	
  }

  mouseEnter = () => {
  	this.setState({toggle: true});	  	
  }

  mouseLeave = () => {
  	this.setState({toggle: false});	  	
  }

	render() { 
		let toggle = this.state.toggle ? 'show' : 'hide';
		let button = this.state.type === 'mylist' ? 
			(<button className={"btn btn-danger "+toggle} 
				onClick={ () => this.removeFromMyList() }>&minus;</button>) : 
			(<button className={"btn btn-success "+toggle} 
				onClick={ () => this.addToMyList() }>&#43;</button>);
		return (
			<div className="Show" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
				<figure>
			    	<img src={this.state.show.img} alt="thumbnail"/>
			    {button}
	      </figure> 
			</div>
		);
	}
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps, { addShowToMyList, removeShowFromMyList, addShowToRecom })(Show);





