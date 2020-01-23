import React, { Component } from 'react'
import './Signup.css'
export class Signup extends Component {

    handleChangeOfUsername = (input) => {
        this.setState({username: input})
    }
    handleChangeOfPassword = (input) => {
        this.setState({password: input})
    }
    handleChangeOfFn = (input) => {
        this.setState({fn: input})
    }
    handleChangeOfLn = (input) => {
        this.setState({ln: input})
    }
    

    render() {
        return (
          <div>
            <h4>If you're a first-time visitor, sign up below!</h4>
    <div className="signup">
            <form clasName="needs-validation" novalidate>
              <div clasName="form-row">
                <div clasName="col-md-4 mb-3">
                  {/* <label for="validationCustom01">First name</label> */}
                  <input type="text" clasName="form-control" id="validationCustom01" placeholder="First name" name="fn" required onChange={(event) => this.handleChangeOfFn(event.target.value)}></input>
                  
                </div>
              </div>
              <div clasName="col-md-4 mb-3">
                {/* <label for="validationCustom02">Last name</label> */}
                <input type="text" clasName="form-control" id="validationCustom02" placeholder="Last name" name="ln" onChange={(event) => this.handleChangeOfLn(event.target.value)} required></input>
                </div>
              
              <div clasName="col-md-4 mb-3">
                {/* <label for="validationCustom02">Username</label> */}
                <input type="text" clasName="form-control" id="validationCustom02" placeholder="Username" name="userName" onChange={(event) => this.handleChangeOfUsername(event.target.value)} required></input>
                </div>
              <div clasName="col-md-4 mb-3">
                {/* <label for="validationCustom02">Password</label> */}
                <input type="password" clasName="form-control" id="validationCustom03" placeholder="Password" name="password" onChange={(event) => this.handleChangeOfPassword(event.target.value)} required></input>
                </div>
              
             
              <div clasName="form-row">
                <div clasName="col-md-6 mb-3">
                  <button className="btn btn-primary" type="submit" onClick={() => this.props.signup(this.state)}>Sign up</button>
                </div>
              </div>
            </form>
            </div>
          </div>
        )
    }
}

export default Signup
