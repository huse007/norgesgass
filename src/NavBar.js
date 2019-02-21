import React, { Component } from 'react';
import logo from './nor.png';
import { Link } from 'react-router-dom';
import './App.css';
//import Home from './Home.js';
//import About from './About.js';
class NavBar extends Component {
    render() {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
		<Link className="navbar-brand ml-5" to="/"><img src={logo} alt="logo"/></Link>
		<ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-5">

		<li className="nav-item active">
		<Link className="nav-link" to="/About" id="gr">OM OSS</Link>
		</li>
		<li className="nav-item active">
		<Link className="nav-link" to="/About" id="gr">NYHETER <span className="sr-only">(current)</span></Link>
		</li>
		<li className="nav-item active">
		<Link className="nav-link" to="/Services" id="gr">TJENESTER <span className="sr-only">(current)</span></Link>
		</li>
		<li className="nav-item active">
		<Link className="nav-link" to="/About" id="gr">KONTAKT OSS <span className="sr-only">(current)</span></Link>
		</li>
		
		</ul>
		{/*		<form className="form-inline my-2 my-lg-0">
		<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
		<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>*/
		}
		</div>
		</nav>
	);
    }
}
export default NavBar;
