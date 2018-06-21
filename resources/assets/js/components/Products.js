import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Products extends Component{
    constructor(props){
        super(props);

        this.state = {
            data:[],
            imgsrc:'',
            prodid:''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({
            prodid: e.target.value
        })
        console.log(e.target.value)
    }

    render(){

        const data = ['/img/pabrik.png','/img/Mesin.png','/img/kawat.png'];

        const list = this.state.data.map( (value,key) => {

                const str = "heading"
                const col = "collapse"
                const coltarget = "#collapse"

                return(                                                   

                <div key={key}>
                    <div id={str.concat(key)}>
                    <h5 className="mb-0">
                        <button className="btn btn-link prodjudul" data-toggle="collapse" data-target={coltarget.concat(key)} aria-expanded="true" aria-controls="collapseOne"
                        value={value.id}
                        onClick={this.handleClick}
                        >
                        {value.title}
                        </button>
                    </h5>
                    </div>

                    <div id={col.concat(key)} className="collapse " aria-labelledby={str.concat(key)} data-parent="#accordion">
                    <div className="px-5">                        
                        {value.desc}                        
                    </div>
                    </div>
                </div>
  
                )
            })


        return(            
            <div className="container-fluid py-5 my-5">            
                <div className="row">
                    <div className="col-md-6">
                        <div className="container productlist px-5 py-5">
                            <h3>Product</h3>
                            <div id="accordion">
                                {list}      
                            </div>
                        </div>               
                    </div>
                    <div className="col-md-6">

                        <img src={data[this.state.prodid]} className="img-fluid"/>
                    
                    </div>
                </div>
            </div>
        

        );
    }

    componentDidMount() {
        Axios.get('/productlist').then( Response => {
            this.setState({
                data: Response.data
            });
            // console.log(this.state.data);
        }).catch( Error => {
            console.log(Error);
        })
    }
    

}

if (document.getElementById('products')) {
    ReactDOM.render(<Products />, document.getElementById('products'));
}