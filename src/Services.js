import React, { Component } from 'react';
import logo1 from './services01.png';
import logo2 from './services02.png';
import logo3 from './services03.png';
import logo4 from './services04.png';
import logo5 from './services05.png';
import logo6 from './services06.png';
class Services extends Component {
    render() {
	return(<div className="container">
	       <div className="row mt-5">

	       <div className="col-lg-4">
	       <img className="img-fluid" src={logo1} alt="picture"/>
	       <p className="h3 mt-3 mb-3 greenheader">Bulk</p>
	       <p>NorgesGass AS leverer gass i bulk-leveranser til hele landet. På Østlandet tør vi å påstå at ingen i markedet kan matche oss på service, leveranse og pris. Propanen som leveres er av høyeste kvalitet og våre transportører er meget solide.<br/><br/> For bedriftter med behov for bulk gass levert jevnlig til sine lokasjoner, ta kontakt med salgssjef Thomas Milligan (400 50 027 eller tgm@norgesgass.no) for et godt tilbud.</p>
	       </div>

	       <div className="col-lg-4">
	       <img className="img-fluid" src={logo2} alt="picture"/>
	       <p className="h3 mt-3 mb-3 greenheader">Fyllestasjoner</p>
	       <p>NorgesGass opererer 5 lokale gasstasjoner, hhv. Fornebu, Trondheim, Drammen, Fredrikstad og Ørje. Våre gasstasjoner optimaliserer distribusjonslogistikken samt sørger for lokale pick-up point av gass rundt om i landet for våre kunder. <br/><br/>NorgesGass sine kunder kan selv hente alt fra 2kg primusflasker til 33kg industribeholdere på våre lokale stasjoner eller gjøre avtale om direkte levering.</p>
	       </div>
	       
	       <div className="col-lg-4">
	       <img className="img-fluid" src={logo3} alt="picture"/>
	       <p className="h3 mt-3 mb-3 greenheader">Flaskegass-distribusjon</p>
	       <p>NorgesGass leverer både gass og gassflasker i alle størrelser til svært gunstig pris. Våre privat og bedriftskunder er alltid velkomne innom en av våre Gasstasjoner for mer informasjon. NorgesGass opererer også et antall automatiske flaskeautomater, der privatkunder selv kan bytte sin gassflaske utenom stasjonenes åpningstider. NB: Se etter NorgesGass automatene, det eksisterer dessverre aktører i gassautomatbransjen som ikke følger alleregelverk, med tilhørende sikkerhetsrisiko for deg som kunde ved bruk.</p>
	       </div>
	       </div>

	       <div className="row mt-5">
	       <div className="col-lg-4">
	       <img className="img-fluid" src={logo4} alt="picture"/>
	       <p className="h3 mt-3 mb-3 greenheader">Gassautomat</p>
	       <p>NorgesGass leverer både gass og gassflasker i alle størrelser til svært gunstig pris. Våre privat og bedriftskunder er alltid velkomne innom en av våre Gasstasjoner for mer informasjon. NorgesGass opererer også et antall automatiske flaskeautomater, der privatkunder selv kan bytte sin gassflaske utenom stasjonenes åpningstider. NB: Se etter NorgesGass automatene, det eksisterer dessverre aktører i gassautomatbransjen som ikke følger alleregelverk, med tilhørende sikkerhetsrisiko for deg som kunde ved bruk.</p>
	       </div>

	       <div className="col-lg-4">
	       <img className="img-fluid" src={logo5} alt="picture"/>
	       <p className="h3 mt-3 mb-3 greenheader">Bedrift</p>
	       <p>NorgesGass er totalleverandør av propan til bedrift og restaurant. Vi leverer propanflasker, propan på flaske, bulkleveranser og kan besørge komplett installasjon av propananlegg i samarbeid med våre gassmontører.
	       
	       For bedrifter eller restauranter med behov for propanflasker levert jevnlig til sine lokasjoner, ta kontakt med salgssjef Thomas Milligan (400 50 027 eller tgm@norgesgass.no) for et godt tilbud.</p>
	       </div>

	       <div className="col-lg-4">
	       <img className="img-fluid" src={logo6} alt="picture"/>
	       <p className="h3 mt-3 mb-3 greenheader">Restaurant</p>
	       <p>NorgesGass er totalleverandør av propan til bedrift og restaurant. Vi leverer propanflasker, propan på flaske, bulkleveranser og kan besørge komplett installasjon av propananlegg i samarbeid med våre gassmontører.
	       
	       For bedrifter eller restauranter med behov for propanflasker levert jevnlig til sine lokasjoner, ta kontakt med salgssjef Thomas Milligan (400 50 027 eller tgm@norgesgass.no) for et godt tilbud.</p>
	       </div>
	       </div>
	       
	       </div>);
    }
}
export default Services;
