import React, { Component } from 'react';

class Home extends Component {
    render() {
	return(<div>
	       <div className="slider-inner">
	       <div id="da-slider" className="da-slider" style={{backgroundPosition:"0% 0%"}}>
	       <div id="da-slide da-slide-from-right da-slide-current">
	       <h2><i>Sikker gass til alle</i></h2>
	       <p><i>NorgesGass leverer sikkerhet og kvalitet til riktig pris</i></p>
	       </div>
	       <div className="da-slide da-slide-toLeft">
	       <h2>
	       <i>Når kun det beste er godt nok</i>
	       </h2>
	       <p>
	       <i>NorgesGass er din foretrukne gassleverandør</i>
	       </p>
	       </div>

	       <div className="da-arrows">
	       <span className="da-arrows-prev"></span>
	       <span className="da-arrows-next"></span>
	       </div>

	       <div className="da-slide da-slide-toright">
	       <h2>
	       <i>Hele Norges totalleverandør</i>
	       </h2>
	       <p>
	       <i>NorgesGass kan dekke alle dine propan- og gassbehov</i>
	       </p>
	       </div>
	       </div>
	       	       	       </div>
	       
	       
	      </div>);
    }
}
export default Home;
