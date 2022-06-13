import React, {Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "https://augintern.herokuapp.com/quicksearch"

class QuickSearch extends Component {
    constructor(){
        super()

        this.state = {
            mealType:''
        }
    }
    

    render() {
        return (
            <>
            <div id="Quicksearch">
           <div id="quickheading">
               Quick Search</div>
           <div id="quickSubheading">
               Discover Restaurants By Meals
           </div> 
                <QuickDisplay mealData={this.state.mealType}/>
                </div>
            </>
        )
    }

    //api on pageLoad
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch





