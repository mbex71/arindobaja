import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Createcarousel extends Component{
    constructor(props){
        super(props);

        this.state = {
            file: null,
            isloading: false,
            load: ''
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(event){
        this.setState({
            file: event.target.files[0]
        });

    }

    handleSubmit(){       

        if(this.state.file.size > 2048000){
            alert('File Anda Kebesaran!!');
        }
        else{
            var fd = new FormData();

            fd.append('images',this.state.file,this.state.file.name);
            fd.append('name',this.state.file.name);          

    
            Axios.post('/carousel/store',fd,{
                onUploadProgress: ProgressEvent => {
                    const count = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100);
    
                    this.setState({                    
                        load: count,
                        isloading: true
                    });
                }
            }).then( Response => {
                this.setState({
                    isloading: false
                });
                alert(Response.data.msg);
                window.location = '/carousel';
            }).catch( Error => {
                console.log(Error)
            })
        }


    }

    render(){
        

        return(
            <div className="container">
                <h3>Carousel</h3>
                <br />
                <div className="row">
                    <div className="col-md-8">
                    
                        <div className="form" >
                            
                            <div className="form-group">
                                <input type="file" name="images" className="form-control" onChange={this.handleFile}/>
                                
                                {
                                    this.state.isloading? 
                                    (
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: this.state.load+'%'}} aria-valuenow={this.state.load} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    ):null
                                }

                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>    
                    </div>
                </div>


                
            </div>
            
        )
    }
}

if (document.getElementById('createcarousel')) {
    ReactDOM.render(<Createcarousel />, document.getElementById('createcarousel'));
}


