import React, { Component } from 'react';
import logo2 from './nor2.png';
class BottomBar extends Component {
    render() {
	return(
		<div className="container-fluid bg-dark mt-5 pb-5 text-light">

		<div className="row">
		<div className="col-lg-3">
		<img className="mt-4 mb-4 ml-4" src={logo2} alt="logo"/>
		<p className="text-light ml-4">NorgeGass leverer propan med høy kvalitet og sikkerhet over hele Norge til titusenvis av kunder. Blant disse har man alt fra privatpersoner med privat forbruk eller små tanker til store prosessindustrier.</p> 
		</div>
		<div className="col-lg-3">
		</div>
		<div className="col-lg-3">
		</div>
		<div className="col-lg-3">
		<p className=" h2 mt-4 pt-2 mb-4">Kontakt oss</p>
		<p className=" pt-1">NorgesGass AS<br/>
		Rolfsbuktveien 4E<br/>
		1364 Fornebu<br/>
		Telefon: +47 913 24 125<br/>
		E-post: post@norgesgass.no<br/>
		</p>
		</div>

		</div>
		
		<div className="row">
		<div className="col-lg-3">

		</div>
		<div className="col-lg-3">
		</div>
		<div className="col-lg-3 text-light">

		
		</div>
				</div>
	</div>);
    }
}
export default BottomBar;
