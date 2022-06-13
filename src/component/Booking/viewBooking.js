import React , {Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../Header';

const url = "https://augintern.herokuapp.com/orders";

class ViewOrder extends Component {
    constructor(props){
        super (props);
        this.state={
            orders:''
        }
    }
    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                <Header/>
                <center>
                    <h2>Login First To Place Order</h2>
                </center>
                </>
            )
        }
        return(
            <>
            <Header/>
            <OrderDisplay orderData={this.state.orders}/>            
            </>
        )
    }
    componentDidMount(){
        if(this.props.location){
            let query=this.props.location.search;
            if(query){
                let data={
                    "status": query.split('&')[0].split('=')[1],
                    "date":query.split('&')[2].split('=')[1],
                    "bank_name":query.split('&')[3].split('=')[1],
                }
                let id= query.split('&')[1].split('=')[1].split('_')[1];
                fetch(`${url}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        let email = sessionStorage.getItem('userInfo').split(',')[1]
        axios.get(`${url}?email=${email}`).then((res)=>{this.setState({orders:res.data})})
    }
}

export default ViewOrder;