import React, { Component } from 'react';
import logo from '../_assets/images/logo.png';
import {Link} from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<nav className="navbar navbar-expand-sm bg-dark">

				  <img src={logo} alt="logo" height="50" width="100"/>
				  <ul className="navbar-nav">
				    <li className="nav-item">
				      <Link className="nav-link" to="/">Home</Link>
				    </li>
				    <li className="nav-item">
				      <Link className="nav-link" to="/shows">TV Shows</Link>
				    </li>
				    <li className="nav-item">
				      <Link className="nav-link" to="/movies">Movies</Link>
				    </li>
				    <li className="nav-item">
				      <Link className="nav-link" to="/mylist">My List</Link>
				    </li>
				  </ul>

				</nav>
			</div>
		);
	}
}

export default Navbar;