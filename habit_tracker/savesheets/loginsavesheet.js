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
                <h3>Sign in:</h3>
            <div className="form-row align-items-center">
                <div className="col-md-2">
                {/* <h3>Log-in here !</h3> */}
                <label className="sr-only" for="inlineFormInputGroupUsername">Username</label>
                <input type="text" class="form-control" id="inlineFormInputName" placeholder="Username" name="userName" onChange={(event) => this.handleChangeOfUsername(event)}></input>
                </div>
                

                <div className="col-md-2">
                <label className="sr-only" for="inputPassword3">Password</label>
                <div class="col-sm-10">    
                <input type="passwrod" className = "form-control" id="inputPassword3" placeholder="Password" name="password" onChange={(event) => this.handleChangeOfPassword(event)}></input>
                </div>
               
                </div>
                <div className="box-3">
                <button type="button" className="btn btn-three" onClick={() => this.props.checkCredentials(this.state.currenInputUsername, this.state.currenInputPassword)}>Enter</button>
                </div>
                </div>
            </div>
            
            
            )
    }
}

export default Login
