import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Editvalue extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: '',
            title: '',
            desc:'',
            imgurl: ''

        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleImg = this.handleImg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    
    handleDesc(e){
        this.setState({
            desc:e.target.value
        })
    }

    handleImg(e){
        this.setState({
            imgurl: e.target.files[0]
        });
    }

    handleSubmit(){
        
        const fd = new FormData();
        fd.append('images',this.state.imgurl,this.state.imgurl.name);
        fd.append('title',this.state.title)
        fd.append('desc',this.state.desc)

        Axios.post('/value/'+this.state.id,fd).then( Response => {
            console.log(Response.data)
            window.location = '/value'
        }).catch( Error => {
            console.log(Error);
        })
    }

    handleDelete(){
        Axios.post('/value/delete/'+this.state.id).then( Response => {
            console.log(Response.data)
            window.location = '/value'
        }).catch( Error => {
            console.log(Error)
        })
    }

    render(){        
        
        return(
            <div className="container">
                <div>                    
                    <div className="form-group row">
                        <label htmlFor="" className="col-md-2 col-form-label">Title</label>    
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Title" 
                                value={this.state.title}
                                onChange={this.handleTitle}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="" className="col-md-2 col-form-label">Description</label>    
                        <div className="col-md-8">
                            <textarea className="form-control" cols="30" rows="10"
                                value={this.state.desc}
                                onChange={this.handleDesc}
                            ></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="" className="col-md-2 col-form-label">Image</label>    
                        <div className="col-md-8">
                            <input type="file" className="form-control" placeholder="Title"
                                onChange={this.handleImg}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                         
                        <div className="col-md-8 offset-2">
                            <button className="btn btn-info"
                                onClick={this.handleSubmit}
                            >Update</button>
                            <button className="btn btn-success mx-3"
                                onClick={ 
                                    (e) => {
                                        window.location = '/value'
                                    }
                                }
                            >Back</button>

                            <button className="btn btn-danger float-right"
                                onClick={this.handleDelete}
                            >Delete</button>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            desc: this.props.desc
        });
    }
    
    
}

if (document.getElementById('editvalue')) {
    ReactDOM.render(<Editvalue 
        id={document.getElementById('ideditvalue').innerHTML}
        title={document.getElementById('titleeditvalue').innerHTML}
        desc={document.getElementById('desceditvalue').innerHTML}
    />, document.getElementById('editvalue'));
}
