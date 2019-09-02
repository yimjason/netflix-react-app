import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMyList } from '../actions/mylistActions';
import { getRecom } from '../actions/recomActions';
import Show from './Show';

class Home extends Component {	
  componentDidMount() {
    this.props.getMyList();
    this.props.getRecom();
  }
 
  render() {	
    const myListItems = this.props.mylist.map( show => (    		    	
      <Show key={show.id} show={show} type={"mylist"}></Show>      
    ));
    const recomItems = this.props.recom.map( show => (    		    	      
      <Show key={show.id} show={show} type={"recom"}></Show>      
    ));    
    return (
      <div className="Home">
      	<section className="categories">
	        <h3>My List</h3>
	        {myListItems}
	      </section>  
	      <section className="categories">
	        <h3>Recommendations</h3>
	        {recomItems}
	      </section>  
      </div>
    );
  }
}

Home.propTypes = {
	getRecom: PropTypes.func.isRequired,
  getMyList: PropTypes.func.isRequired,
  recom: PropTypes.array.isRequired,
  mylist: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  mylist: state.mylist.items,
  recom: state.recom.items,
  show: state.mylist.item
});

export default connect(mapStateToProps, { getMyList, getRecom })(Home);
