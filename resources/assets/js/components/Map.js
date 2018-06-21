import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Map extends Component{
    render(){
        return(
            <div id="map" className="space">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31732.451215721976!2d106.51390018968478!3d-6.190062957616734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff830de53259%3A0x303a681a8d09ff59!2sPT+Arindo+Baja+Cipta!5e0!3m2!1sen!2sid!4v1528864812992"
                className="d-block w-100" height="450" style={{border:0}} ></iframe>
            </div>
    
        );
    }
}

if (document.getElementById('map')) {
    ReactDOM.render(<Map />, document.getElementById('map'));
}
