import React, { Component } from 'react';
import ReactDOM from 'react-dom';


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  <div className="fb-customerchat"
    attribution="setup_tool"
    page_id="195262631045929">
  </div>



class Fbchat extends Component{
    render(){
        
        return(
            <div>
            <div className="fb-customerchat"
                attribution="setup_tool"
                page_id="195262631045929">
            </div>
            </div>
        )
    }
}

if (document.getElementById('fbchat')) {
    ReactDOM.render(<Fbchat />, document.getElementById('fbchat'));
}