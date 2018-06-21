import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Editproduct extends Component{
    constructor(props){
        super(props);

        this.state = {
            id:'',
            title:'',
            desc:''
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleTitle(e){
        this.setState({
            title:e.target.value
        });
    }

    handleDesc(e){  
        this.setState({
            desc: e.target.value
        })
    }

    handleUpdate(){

        if(this.state.title == '' || this.state.desc == '')
        {
            alert('Semua Harus Diisi!!');
        }
        else{
            const fd = new FormData();
            fd.append('title',this.state.title);
            fd.append('desc',this.state.desc);

            Axios.post('/product/'+this.state.id,fd).then( Response => {
                console.log(Response.data);
                window.location = '/product'
            }).catch( Error => {
                console.log(Error);
            });
        }        
        
    }

    handleDelete(){
        
        Axios.post('/product/delete/'+this.state.id).then( Response => {
            console.log(Response.data);
            window.location = '/product'
        }).catch( Error => {
            console.log(Error)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Title</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control"
                            value={this.state.title}
                            onChange={this.handleTitle}
                        />  
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Description</label>
                    <div className="col-md-8">
                        <textarea cols="30" rows="10" className="form-control"
                            value={this.state.desc}
                            onChange={this.handleDesc}
                        ></textarea>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-8 offset-2">
                        <button className="btn btn-info mr-3"
                            onClick={this.handleUpdate}
                        >Update</button>
                        <button className="btn btn-success"
                            onClick={
                                () => {
                                    window.location = '/product'
                                }
                            }
                        >Back</button>
                        <button className="btn btn-danger float-right"
                            onClick={this.handleDelete}
                        >Delete</button>
                    </div>
                </div>

            </div>
        );
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            title:this.props.title,
            desc:this.props.desc
        });
    }
    
}

if (document.getElementById('editproduct')) {
    ReactDOM.render(<Editproduct 
        id = {document.getElementById('ideditproduct').innerHTML}
        title = {document.getElementById('titleeditproduct').innerHTML}
        desc = {document.getElementById('desceditproduct').innerHTML}
    />, document.getElementById('editproduct'));
}
