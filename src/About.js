import React, { Component } from 'react';
import building from './om.jpg';
class About extends Component {
    render() {
	console.log("about");
	return(<div className="container">

	       <img className="mt-5 mb-3 img-fluid" src={building} alt="building"/>
	       <hr/>
	       <p className="h2 text-center greenheader mt-5 mb-4">Om NorgesGass</p>
	       
	       <p><span className="firstcharacter">N</span>orgesGass er en norskeid totalleverandør av Propan. Vi har kontorer og gass-stasjoner i Oslo, Drammen, Fredrikstad og Trondheim. NorgesGass leverer en rentbrennende, effektiv og viktig kilde til energi i overgangen til et mer miljøvennlig samfunn.

Vi prioriterer sikkerhet fremfor alt annet, hvilket innebærer utstrakt bruk av markedets eneste godkjente sertifiserings og TQS system. Vi leverer konkurransedyktig gass i bulk eller flaske til hele Norge og har fokus på høyt service-nivå og fleksibilitet for å imøtegå være kunders varierende behov.

Alle våre medarbeidere, samarbeidspartnere, gassmontører, transportører og utstyrsleverandører har som ambisjon at vi skal være den foretrukne gassleverandøren i Norge. Dette gir deg som kunde en god oppfølging og trygghet ved bruk av propan fra NorgesGass.
<br/><br/>
NorgesGass leverer propan med høy kvalitet og sikkerhet over hele Norge til tusenvis av kunder. Blant disse har man alt fra privatpersoner med privat forbruk til tanker til store prosessindustrier. Dette har gitt oss mye kunnskap om hvordan propan kan benyttes og effektivisere innen ulike områder. Våre propanleveranser er hentet fra norsk sokkel og foredlet ved norske gassbehandlingsanlegg. Propan er energi for fremtiden. </p>
	       
	       </div>);
    }
}
export default About;
