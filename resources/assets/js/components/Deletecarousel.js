import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Deletecarousel extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: this.props.id
        }

        this.handleClick = this.handleClick.bind(this);
        this.backButton = this.backButton.bind(this);
    }

    handleClick(){

        Axios.post('/carousel/delete/'+this.state.id).then( Response => {
            console.log(Response.data);
            window.location = '/carousel';
        }).catch( Error => {
            console.log(Error);
        })
    }

    backButton(){
        window.location = '/carousel';
    }

    render(){
        console.log(this.state.id);
        return(
            <div>
                <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
                <button className="btn btn-info" onClick={this.backButton}>Back</button>
            </div>
        );
    }


    

}

if (document.getElementById('deletecarousel')) {
    ReactDOM.render(<Deletecarousel 
        id = {document.getElementById('iddeletecarousel').value}
    />, document.getElementById('deletecarousel'));
}
