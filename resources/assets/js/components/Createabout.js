import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Createabout extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            id: '',
            desc: ''
        }

        this.handleDesc = this.handleDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDesc(e){
        this.setState({
            desc: e.target.value
        });
    }

    handleSubmit(){
        
        const fd = new FormData();
        fd.append('id',this.state.id);
        fd.append('desc',this.state.desc);

        Axios.post('/about/store',fd).then( Response => {
            console.log(Response.data);
            alert(Response.data);
        }).catch( Error => {
            console.log(Error);
            alert(Error);
        })
    }

    render() {
        
        return (
            <div>
                <div>
                    <p>
                        {this.state.desc}
                    </p>
                </div>

                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Description</label>
                    <div className="form-group col-md-8">
                        <textarea className="form-control" placeholder="About Description" cols="30" rows="10"
                            value={this.state.desc}
                            onChange={this.handleDesc}
                        ></textarea>
                    </div>
                </div>

                <div className="form-group row">                    
                    <div className="form-group col-md-8 offset-2">
                        <button className="btn btn-info"
                            onClick={this.handleSubmit}
                        >Submit</button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            desc: this.props.desc
        });
    }
    
}

if (document.getElementById('createabout')) {
    ReactDOM.render(<Createabout 
        id = {document.getElementById('aboutid').innerHTML}
        desc = {document.getElementById('aboutdesc').innerHTML}
    />, document.getElementById('createabout'));
}