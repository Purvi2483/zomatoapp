import React,{Component} from 'react';
import axios from 'axios';

const url="https://augintern.herokuapp.com/filter"


class CostFilter extends Component {

    filterCost = (event) =>{
        let mealId=this.props.mealId
        let cost=(event.target.value).split('-');
        let lcost=cost[0];
        let hcost=cost[1];        
        let costUrl = ""
        if(event.target.value ===""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl=`${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) =>{this.props.restPerCost(res.data)})
    }


    render(){
        return(
            <>
            <center><b>Cost filter</b></center>
            <div style={{marginLeft:'15%'}} onChange={this.filterCost}>
                <label className="radio">
                    <input type="radio" value="" name="cost"/>All
                </label>
                <label className="radio">
                    <input type="radio" value="100-300" name="cost"/>100-300
                </label>
                <label className="radio">
                    <input type="radio" value="301-500" name="cost"/>301-500
                </label>
                <label className="radio">
                    <input type="radio" value="501-700" name="cost"/>501-700
                </label>
                <label className="radio">
                    <input type="radio" value="701-900" name="cost"/>701-900
                </label>
                <label className="radio">
                    <input type="radio" value="901-1500" name="cost"/>901-1500
                </label>
            </div>
            </>
        )
    }
}

export default CostFilter