import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Services from './Services';
import BottomBar from './BottomBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
    render() {
	return (
		<Router>
		<div>
		<NavBar/>
		<Route exact path="/" component={Home}/>
		<Route path="/About" component={About}/>
		<Route path="/Services" component={Services}/>
		<BottomBar/>
		</div>
		</Router>
    );
  }
}

export default App;
