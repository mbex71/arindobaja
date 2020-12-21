import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));


//   <div className="fb-customerchat"
//     attribution="setup_tool"
//     page_id="195262631045929">
//   </div>



class Fbchat extends Component{
    constructor(props){
        super(props);
        this._kirimpesan = this._kirimpesan.bind(this);
    }

    _kirimpesan(){
        window.open('https://wa.me/628119327889','__blank');
    }
    render(){
        
        return(
            <div className="container-fluid fixed-bottom">
                
                
                <button className="btn btn-success float-right btn-lg my-3 shadow" onClick={this._kirimpesan}>
                <i className="fab fa-whatsapp mr-3"></i>
                Chat Or Call</button>
                
            </div>

            // <div>
            // <div className="fb-customerchat"
            //     attribution="setup_tool"
            //     page_id="195262631045929">
            // </div>
            // </div>
        )
    }
}

const style = {
    roundbutton:{

    }
}

if (document.getElementById('fbchat')) {
    ReactDOM.render(<Fbchat />, document.getElementById('fbchat'));
}