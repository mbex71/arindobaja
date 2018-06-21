import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Createvalue extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            desc: '',
            img: ''
        }

        this.titleChange = this.titleChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.imgChange = this.imgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    titleChange(e){
        this.setState({
            title: e.target.value
        });
    }

    descChange(e){
        this.setState({
            desc: e.target.value
        })
    }

    imgChange(e){
        this.setState({
            img:e.target.files[0]
        });
    }

    handleSubmit(){
        
        if(this.state.title == '' || this.state.desc == '')
        {
            alert('Masukan Title dan Description dengan benar');
        }
        else if(this.state.img == ''){
            alert('Gambar Kosong!!');
        }
        else{
            
            const fd = new FormData();

            fd.append('images',this.state.img,this.state.img.name)
            fd.append('title',this.state.title)
            fd.append('desc',this.state.desc);
            
            Axios.post('/value/store',fd).then( Response => {
                console.log(Response.data);
                window.location = '/value';
            }).catch( Error => {
                console.log(Error)
            })
        }
        
    }

    render(){
        return(
            <div className="container">
                <h3>Value</h3>
                <br />
                <div>
                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Judul</label>
                        <div className="col-md-8">

                            <input type="text" className="form-control" placeholder="Title" 
                                value={this.state.title}
                                onChange = {this.titleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Description</label>
                        <div className="col-md-8">

                            <textarea className="form-control" cols="30" rows="10" placeholder="Description here"
                                value={this.state.desc}
                                onChange={this.descChange}
                            ></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Image</label>
                        <div className="col-md-8">

                            <input type="file" className="form-control" placeholder="Title" 
                                onChange={this.imgChange}
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
            
            </div>

        );
    }
}

if (document.getElementById('createvalue')) {
    ReactDOM.render(<Createvalue />, document.getElementById('createvalue'));
}