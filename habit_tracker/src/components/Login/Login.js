import React, { Component } from 'react'

export class Login extends Component {

    handleChangeOfPassword = (input) => {
        this.setState({currentInputPassword: input})
    }
    handleChangeOfUsername = (input) => {
        this.setState({currentInputUsername: input})
    }

    render() {

        return (
            <div>
                <h3>Put your login info here</h3>
                <label for="userName">Username
                <input type="text" className = "userName" name="userName" onChange={(event) => this.handleChangeOfUsername(event.target.value)}></input>
                </label>
                <label for="password">Password
                <input type="text" className = "password" name="password" onChange={(event) => this.handleChangeOfPassword(event.target.value)}></input>
                </label>
                <button type="button" id="loginButton" onClick={() => this.props.checkCredentials(this.state.currentInputUsername, this.state.currentInputPassword)}>Log in</button>
            </div>
        )
    }
}

export default Login
