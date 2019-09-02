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
			hover: false
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
  	this.setState({hover: true});	  	
  }

  mouseLeave = () => {
  	this.setState({hover: false});	  	
  }

	render() { 
		let toggle = this.state.hover ? 'show' : 'hide';
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

export default connect(null, { addShowToMyList, removeShowFromMyList, addShowToRecom })(Show);





