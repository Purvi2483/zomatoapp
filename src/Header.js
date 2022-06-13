import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './Header.css';

const url= "https://auginternapi.herokuapp.com/api/auth/userinfo";

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            userData:''
        }        
    }

    handleLogout =() =>{
        sessionStorage.removeItem('userInfo');
            sessionStorage.setItem('loginStatus','loggedout');
            sessionStorage.getItem('ltk');
            this.setState({userData:''})
            this.props.history.push('/')
    }

    conditionalHeader = ()=>{
        if(this.state.userData.name){
           let data = this.state.userData;
            let outArray = [data.name,data.email,data.phone,data.role];
            sessionStorage.setItem('userInfo',outArray);
            sessionStorage.setItem('loginStatus','loggedIn');
        return(
        <>
            <Link className="btn btn-primary" to='/'>Hii &nbsp; {data.name}
                    </Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout} >Logout
                    </button>
        </>
        )
        }else{
            return(
                <>
                <Link className="btn btn-primary" to="/register" >Sign up
                    </Link>
                    &nbsp;
                    <Link className="btn btn-primary" to="/login">Login
                    </Link>                     
                </>
            )
        }
    }

    render(){
        return(
            <>
            <div className="header">
                <div id="brand">
                    Zomato
                </div>
                
                <div id="social" >
                    {this.conditionalHeader()}                
                </div>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);