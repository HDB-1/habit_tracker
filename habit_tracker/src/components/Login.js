import React, { Component } from 'react'

export class Login extends Component {

    handleChangeOfPassword = (event) => {
        this.setState({currenInputPassword: event.target.value})
    }
    handleChangeOfUsername = (event) => {
        this.setState({currenInputUsername: event.target.value})
    }


    render() {


        return (
            <div>
                <h3>Put your login info here</h3>
                <label for="userName">Username
                <input type="text" className = "userName" name="userName" onChange={(event) => this.handleChangeOfUsername(event)}></input>
                </label>
                <label for="password">Password
                <input type="text" className = "password" name="password" onChange={(event) => this.handleChangeOfPassword(event)}></input>
                </label>
                <button type="button" id="loginButton" onClick={() => this.props.checkCredentials(this.state.currenInputUsername, this.state.currenInputPassword)}>Log in</button>
            </div
        )
    }
}

export default Login
