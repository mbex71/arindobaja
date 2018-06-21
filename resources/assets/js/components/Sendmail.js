import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Sendmail extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email:'',
            phone:'',
            message:'',                        
            errmsg: {
                name:null,
                email: null,
                phone: null,
                message: null
            }
            
        }
        
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleMessage = this.handleMessage.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleName(e){
        this.setState({
            name: e.target.value,
            errmsg: false
            
        });
    }
    handleEmail(e){
        this.setState({
            email: e.target.value,
            errmsg: false
        });
    }
    handlePhone(e){
        this.setState({
            phone: e.target.value,
            errmsg: false
        });
    }
    handleMessage(e){
        this.setState({
            message: e.target.value,
            errmsg: false
        });
    }
    
    handleSubmit(){
        const fd = new FormData();

        fd.append('name',this.state.name);
        fd.append('email',this.state.email);
        fd.append('phone',this.state.phone);
        fd.append('message',this.state.message);

        Axios.post('/sendmail',fd).then( Response => {
            console.log(Response.data);
            if(Response.data.er){
                this.setState({                    
                    errmsg: {
                        name: Response.data.errors.name ? Response.data.errors.name[0] : null,
                        email: Response.data.errors.email ?  Response.data.errors.email[0] : null,
                        phone: Response.data.errors.phone ? Response.data.errors.phone[0] : null,
                        message: Response.data.errors.message ? Response.data.errors.message[0] : null
                    }
                });                
                
            }
            else{
                this.setState({
                    err: false,
                    name:'',
                    email:'',
                    phone:'',
                    message:'',
                    errmsg: ''
                    
                })
                
                alert(Response.data.response);
            }

            
            
        }).catch( Error => {
            console.log(Error)
        });
        
    }

    render() {
        

        return (
            <div>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Nama" 
                        value={this.state.name}
                        onChange={this.handleName}

                    />
                    {
                        this.state.errmsg ? <small className="text-danger">{this.state.errmsg.name}</small> : null
                    }
                    
                </div>
                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="Email" 
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />
                    {
                        this.state.errmsg ? <small className="text-danger">{this.state.errmsg.email}</small> : null
                    }
                </div>
                <div className="form-group">
                    <input type="text" name="phone" className="form-control" placeholder="Phone" 
                        value={this.state.phone}
                        onChange={this.handlePhone}
                    />
                    {
                        this.state.errmsg ? <small className="text-danger">{this.state.errmsg.phone}</small> : null
                    }
                </div>
                <div className="form-group">
                    <textarea name="message" id="" cols="30" rows="10" className="form-control" placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleMessage}
                    ></textarea>
                    {
                        this.state.errmsg ? <small className="text-danger">{this.state.errmsg.message}</small> : null
                    }
                </div>
                <button type="submit" className="btn btn-default"
                    onClick={this.handleSubmit}
                >Submit</button>

            </div>
        );
    }
}

if (document.getElementById('sendmail')) {
    ReactDOM.render(<Sendmail />, document.getElementById('sendmail'));
}