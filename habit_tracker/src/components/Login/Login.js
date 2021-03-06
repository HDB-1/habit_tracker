import React, { Component } from 'react'
import './Login.css'
// import { FormControl } from '@material-ui/core';

export class Login extends Component {

    handleChangeOfPassword = (input) => {
        this.setState({currentInputPassword: input})
    }
    handleChangeOfUsername = (input) => {
        this.setState({currentInputUsername: input})
    }

    render() {

        return (

            <div className="login">
            <h3>Sign in</h3>
            <div className="container">
        <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" name="userName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={(event) => this.handleChangeOfUsername(event.target.value)}></input>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => this.handleChangeOfPassword(event.target.value)}></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
        </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => this.props.checkCredentials(this.state.currentInputUsername, this.state.currentInputPassword)}>Submit</button>
       

            </div>
        )
            
        }    
    
    }

export default Login
