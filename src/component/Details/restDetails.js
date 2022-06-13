import React,{Component} from 'react';
import MenuDisplay from './menuDisplay';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './restDetails.css';
import Header from '../../Header';

const url ="https://augintern.herokuapp.com/details";
const menuUrl="https://augintern.herokuapp.com/menu";

class Details extends Component {
    constructor(props) {
        super(props)

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId: sessionStorage.getItem('mealId')
        }
    }

    addToCart = (data) => {
        console.log(">>>",data)
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        let details = this.state.details
        return(
        <>
        <Header/>
           <div className="main-container">
               <div className="IMG"><img src={details.restaurant_thumb}/></div>
               <div className="content-container"><h1>{details.restaurant_name}</h1>               
               <p>{details.address}</p>
               
               <Tabs>
  <TabList>
       <Tab>Details</Tab>
        <Tab>Oder Online</Tab>
        
  </TabList>  

  
  <TabPanel>
      <h2>About This Place</h2>
      <div className='measures'>
      <img src="https://thumbs.dreamstime.com/z/contactless-delivery-vector-concept-contact-free-to-protect-form-covid-coronavirus-quarantine-ordering-goods-secure-183331739.jpg" />
      Contactless Delivery
      </div>
      &nbsp;&nbsp;
      <div className='measures'>
      <img src="https://thumbs.dreamstime.com/b/cleaning-surface-hands-gloves-clean-spray-wipe-sanitizing-home-virus-bacteria-coronavirus-prevention-vector-204489540.jpg" />
      Sanitization
      </div>
      &nbsp;&nbsp;
      <div className='measures'>      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uUm2LwyxBLTeVEs9JLCRJtclgMg6_OlRMJicbcnjnFAmy6i0HGu1_982T04-XpGHwto&usqp=CAU" />
      Fast Delivery
      </div>
      
     
  </TabPanel>
  <TabPanel>
      <div>
  <MenuDisplay menuData={this.state.menuList} 
           finalOrder={(data) => {this.addToCart(data)}}/>
            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">back</Link>
               <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
               
       </div>
      
  </TabPanel>
</Tabs>               
        </div>  
      </div>
        </>
        )
    }
    
       
    
    async componentDidMount() {
        let restid=this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restid}`)
        let mealData = await axios.get(`${menuUrl}/${restid}`)
        this.setState({ details:response.data[0] ,menuList:mealData.data})
    }
}

export default Details






