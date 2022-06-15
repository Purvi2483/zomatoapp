import React from 'react';
import{BrowserRouter,Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './component/Home/home';
import Listing from './component/Listing/listing';
import Details from './component/Details/restDetails';
import ViewOrder from './component/Booking/viewOrder';
import PlaceOrder from './component/Booking/placeOrder';
import Login from './component/Login/login'
import Register from './component/Login/register'

const Router =() =>{
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:mealId" component={Listing}/>
                <Route path="/Details" component={Details}/>
                <Route path="/viewOrder" component={ViewOrder}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </div>:
            <Footer/>
        </BrowserRouter>
    )
}

export default Router