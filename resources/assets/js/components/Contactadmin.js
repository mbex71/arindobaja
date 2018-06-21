import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Contactadmin extends Component{
    constructor(props){
        super(props)

        this.state = {
            alamat:'',
            website: '',
            email:'',
            phone:'',

        }
        this.handleAlamat = this.handleAlamat.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleWebsite = this.handleWebsite.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleAlamat(e){
        this.setState({
            alamat: e.target.value
        });

    }
    handleWebsite(e){
        this.setState({
            website:e.target.value
        });

    }
    handleEmail(e){
        this.setState({
            email:e.target.value
        });

    }
    handlePhone(e){
        this.setState({
            phone:e.target.value
        });

    }

    handleSubmit(){
        const fd = new FormData();
        fd.append('address',this.state.alamat);
        fd.append('website',this.state.website);
        fd.append('email',this.state.email);
        fd.append('phone',this.state.phone);
        

        Axios.post('/contact/store',fd).then( Response => {
            console.log(Response.data);
        }).catch( Error =>{
            console.log(Error);
        })

    }


    render() {
        return (
            <div className="container">  
                <h1>Hallo Contact</h1>
                <br/>

                <div className="form-group row">
                    <label htmlFor="" className="col-md-2 col-form-label">Alamat</label>
                    <div className="col-md-8">
                        {this.state.alamat}
                    </div>
                </div>                
                <div className="form-group row">
                    <label htmlFor="" className="col-md-2 col-form-label">Website</label>
                    <div className="col-md-8">
                        {this.state.website}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-md-2 col-form-label">Email</label>
                    <div className="col-md-8">
                        {this.state.email}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-md-2 col-form-label">Phone</label>
                    <div className="col-md-8">
                        {this.state.phone}
                    </div>
                </div>
                
                <br/>


                <div className="form-group row">
                    <label htmlFor="" className="col-md-2 col-form-label">Alamat</label>
                    <div className="col-md-8">
                        <input type="text" id="" className="form-control" 
                            value={this.state.alamat}
                            onChange={this.handleAlamat}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="" className="col-md-2 col-form-label">Website</label>
                    <div className="col-md-8">
                        <input type="text" id="" className="form-control" 
                            value={this.state.website}
                            onChange={this.handleWebsite}
                        />
                    </div>
                </div>                

                <div className="form-group row">
                    <label htmlFor="" className="col-md-2 col-form-label">Email</label>
                    <div className="col-md-8">
                        <input type="text" id="" className="form-control" 
                            value={this.state.email}
                            onChange={this.handleEmail}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="" className="col-md-2 col-form-label">Phone</label>
                    <div className="col-md-8">
                        <input type="text" id="" className="form-control" 
                            value={this.state.phone}
                            onChange={this.handlePhone}
                        />
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

    componentDidMount() {
        this.setState({
            alamat:this.props.alamat,
            website: this.props.website,
            email:this.props.email,
            phone:this.props.phone,

        });
    }
    
}

if (document.getElementById('contactadmin')) {
    ReactDOM.render(<Contactadmin  
        alamat={document.getElementById('addresscontact').innerHTML}
        phone={document.getElementById('phonecontact').innerHTML}
        website={document.getElementById('websitecontact').innerHTML}
        email={document.getElementById('emailcontact').innerHTML}
    
    />, document.getElementById('contactadmin'));
}