import React,{Component} from 'react';
import Header from '../../Header';

const url="https://auginternapi.herokuapp.com/api/auth/register"

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            phone:"",
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
            <Header/>
            <div className="panel panel-primary">
                <div className="panel-heading">
                       Register Form
                </div>
                <div className="panel-body">
                    
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" For="fname">First Name</label>
                                    <input class="form-control" id="name" name="name" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" For="phone">Phone</label>
                                    <input class="form-control" id="phone" name="phone" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" For="email">Email</label>
                                    <input class="form-control" id="email" name="email" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" For="password">Password</label>
                                    <input class="form-control" id="password" type="password"    maxlength="8" name="password" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>                        
                    <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>

                </div>
            </div>
            </>
        )
    }
}

export default Register