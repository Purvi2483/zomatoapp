import React, { Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const lurl = "https://augintern.herokuapp.com/location";
const rurl = "https://augintern.herokuapp.com/restaurants?state_id="

class Search extends Component {

    constructor(props){
        super(props);
        this.state={
            location:'',
            restData:'',
        }
    }

    renderCity=(data) => {
        if(data){return data.map((item) => {
            return (
                <option value={item.state_id} key={item.state_id}>{item.state}</option>
            )
        })
    }
    }

    handleCity = (event) =>{
        let stateId=event.target.value;
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data)=> {
            this.setState({restData:data})           
        })
    }

    handleRest= (event) => {
        let restId=event.target.value
        this.props.history.push(`/details?restId=${restId}`)
    }

    renderRestaurant=(data) => {
        if(data){return data.map((item) => {
            return (
                <option value={item.restaurant_id} key={item.restaurant_id}>
                    {item.restaurant_name} |  {item.address}
                    </option>
            )
        })
    }
    }

    render() {
        return (
            <div id="search"> 
            <div id="logo">
            <i class="fas fa-concierge-bell"></i>
             </div>
             <div id="heading">
                 Find The Best Restaurants Near You 
             </div>
             <div id="dropdown" >
             <select id="city" onChange={this.handleCity}>
                 <option>----SELECT CITY----</option>
                 {this.renderCity(this.state.location)}
             </select>
             <select id="hotel" onChange={this.handleRest} >
             <option>----SELECT RESTAURANT----</option>
             {this. renderRestaurant(this.state.restData)} 
             </select>
             
             </div>
         </div>
        )
    }
    //call api on page load
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search)