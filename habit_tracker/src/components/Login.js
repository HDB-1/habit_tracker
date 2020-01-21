import React, { Component } from 'react'

export class Login extends Component {

    handleChangeOfPassword = (event) => {
        this.setState({currenInputPassword: event.target.value})
        console.log(event.target.value)
    }

    render() {


        return (
            <div>
                <h3>Put your login info here</h3>
                <form>
                    <label for="userName">Username
                    <input type="text" className = "userName" name="userName"></input>
                    </label>
                    <label for="password">Password
                    <input type="text" className = "password" name="password" onChange={(event) => this.handleChangeOfPassword(event)}></input>
                    </label>
                    <button type="submit" id="loginButton">Log in</button>
                </form>
            </div>
        )
    }
}

export default Login
