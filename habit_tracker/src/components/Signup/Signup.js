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
            <form clasName="needs-validation" novalidate>
              <div clasName="form-row">
                <div clasName="col-md-4 mb-3">
                  <label for="validationCustom01">First name</label>
                  <input type="text" clasName="form-control" id="validationCustom01" placeholder="First name" name="fn" required onChange={(event) => this.handleChangeOfFn(event)}></input>
                  <div clasName="valid-feedback">
                    Looks good!
                  </div>
                </div>
              </div>
              <div clasName="col-md-4 mb-3">
                <label for="validationCustom02">Last name</label>
                <input type="text" clasName="form-control" id="validationCustom02" placeholder="Last name" name="ln" onChange={(event) => this.handleChangeOfLn(event)} required></input>
                <div clasName="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div clasName="col-md-4 mb-3">
                <label for="validationCustomUsername">Username</label>
                <div clasName="input-group">
                  <div clasName="input-group-prepend">
                    <span clasName="input-group-text" id="inputGroupPrepend">@</span>
                  </div>
                  <input type="text" clasName="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" name="userName" onChange={(event) => this.handleChangeOfUsername(event)} required></input>
                  <div clasName="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div clasName="form-row">
                <div clasName="col-md-6 mb-3">
                  <label for="validationCustom03">Password</label>
                  <input type="password" clasName="form-control" id="validationCustom03" placeholder="Password" name="password" onChange={(event) => this.handleChangeOfPassword(event)} required></input>
                  <button className="btn btn-primary" type="submit" onClick={() => this.props.signup(this.state)}>Submit form</button>
                </div>
              </div>
            </form>
          </div>
        )
    }
}

export default Signup
