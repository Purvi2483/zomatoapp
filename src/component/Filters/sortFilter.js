/*import React,{Component} from 'react';
import axios from 'axios';

const url="https://augintern.herokuapp.com/filter"


class SortFilter extends Component {


    filterSort = (event) =>{
        let sort=event.target.value;
        let mealId=this.props.mealId;
        let sortUrl = ""
        if(sort ===""){
            sortUrl = `${url}/${mealId}`
        }else{
            sortUrl=`${url}/${mealId}?${}`
        }
        axios.get(sortUrl)
        .then((res) =>{this.props.restPerSort(res.data)})
    }


    render(){
        return(
            <>
            <center>sort filter</center>
            <div style={{marginLeft:'15%'}} onChange={this.filterSort}>
                <label className="radio">
                    <input type="radio" value="" name="cuisine"/>Low to High
                </label>
                <label className="radio">
                    <input type="radio" value="1" name="cuisine"/>High to Low
                </label>
               
            </div>
            </>
        )
    }
}

export default SortFilter*/