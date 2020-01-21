import React, { Component } from 'react'

export class Signup extends Component {

    handleChangeOfUsername = (event) => {
        this.setState({username: event.target.value})
    }
    handleChangeOfPassword = (event) => {
        this.setState({password: event.target.value})
    }
    handleChangeOfFn = (event) => {
        this.setState({fn: event.target.value})
    }
    handleChangeOfLn = (event) => {
        this.setState({ln: event.target.value})
    }
    

    render() {
        return (
            <div>
                <h3>Or if you're a first-time visitor, sign up below!</h3>
                <form>
                    <label for="firstName">First Name
                    <input type="text" className = "firstName" name="fn"onChange={(event) => this.handleChangeOfFn(event)}></input>
                    </label>
                    <label for="lastName">Last Name
                    <input type="text" className = "lastName" name="ln"onChange={(event) => this.handleChangeOfLn(event)}></input>
                    </label>
                    <label for="userName">Username
                    <input type="text" className = "userName" name="userName" onChange={(event) => this.handleChangeOfUsername(event)}></input>
                    </label>
                    <label for="password">Password
                    <input type="text" className = "password" name="password"onChange={(event) => this.handleChangeOfPassword(event)}></input>
                    </label>
                    <button type="button" id="signUpButton" onClick={() => this.props.signup(this.state)}>Sign up</button>
                </form>
            </div>
        )
    }
}

export default Signup
