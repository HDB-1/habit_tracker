import React from 'react'

export default function Signup() {
    return (
        <div>
            <h3>Or if you're a first-time visitor, sign up below!</h3>
            <form>
                <label for="userName">Username
                <input type="text" className = "userName" name="userName"></input>
                </label>
                <label for="password">Password
                <input type="text" className = "password" name="password"></input>
                </label>
                <label for="firstName">First Name
                <input type="text" className = "firstName" name="fn"></input>
                </label>
                <label for="lastName">Last Name
                <input type="text" className = "lastName" name="ln"></input>
                </label>
                <button type="submit" id="signUpButton">Sign up</button>
            </form>
        </div>
    )
}
