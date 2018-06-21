import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Createproduct extends Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            desc:''
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    handleDesc(e){
        this.setState({
            desc:e.target.value
        })
    }

    handleSubmit(){
        const fd = new FormData();

        fd.append('title',this.state.title);
        fd.append('desc',this.state.desc);


        Axios.post('/product/store',fd).then( Response => {
            console.log(Response.data);
            window.location = '/product'
        }).catch( Error => {
            console.log(Error);
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Title</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control" placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleTitle}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Description</label>
                    <div className="col-md-8">
                        <textarea cols="30" rows="10" className="form-control" placeholder="Description"
                            value={this.state.desc}
                            onChange={this.handleDesc}
                        ></textarea>
                    </div>
                </div>

                <div className="form-group row">                    
                    <div className="col-md-8 offset-2">
                        <button className="btn btn-info"
                            onClick={this.handleSubmit}
                        >Submit</button>
                    </div>
                </div>

            </div>
        );
    }
}

if (document.getElementById('createproduct')) {
    ReactDOM.render(<Createproduct />, document.getElementById('createproduct'));
}
