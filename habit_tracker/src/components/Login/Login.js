import React, { Component } from 'react'
import './Login.css'
// import { FormControl } from '@material-ui/core';

export class Login extends Component {

    handleChangeOfPassword = (event) => {
        this.setState({currenInputPassword: event.target.value})
    }
    handleChangeOfUsername = (event) => {
        this.setState({currenInputUsername: event.target.value})
    }


    render() {


        return (
            <div className="login">
            <h3>Sign in</h3>
            <div className="container">
        <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={(event) => this.handleChangeOfUsername(event)}></input>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => this.handleChangeOfPassword(event)}></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
        </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => this.props.checkCredentials(this.state.currenInputUsername, this.state.currenInputPassword)}>Submit</button>
       
            </div>
        )
            
        }    
    
    }

export default Login
