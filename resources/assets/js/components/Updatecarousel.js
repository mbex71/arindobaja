import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Updatecarousel extends Component{

    constructor(props){
        super(props);

        this.state = {
            carouselid: '',
            carouselstatus:''
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelect(e){
        this.setState({
            carouselstatus: e.target.value
        })
    }

    handleSubmit(){
        const fd = new FormData();
        fd.append('newstatus',this.state.carouselstatus);


        Axios.post('/carousel/'+this.state.carouselid,fd).then( Response => {
            console.log(Response.data);
            window.location = '/carousel';
        }).catch( Error => {
            console.log(Error);
        })
    }

    render(){
        
        return(
            <div className="input-group">
            <select className="custom-select" value={this.state.carouselstatus} onChange={this.handleSelect}>
            
                <option value="1"  >Active</option>
                <option value="0" >Deactive</option>               
                
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button"
                    onClick={this.handleSubmit}
                >Ok</button>
            </div>
        </div>
        );
    }

    componentDidMount() {        

        this.setState({
            carouselid: this.props.id,
            carouselstatus: this.props.status
            
        });
    }    
    
}

if (document.getElementById('updatecarousel')) {
    ReactDOM.render(<Updatecarousel 
        status={document.getElementById('statuscarousel').value} 
        id = {document.getElementById('idcarousel').value}
        
        />, document.getElementById('updatecarousel'));
}
