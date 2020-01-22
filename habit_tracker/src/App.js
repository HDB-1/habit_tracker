import React, { Component } from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import MongoClient from 'mongodb'
import axios from 'axios';
import AccountOverview from './containers/AccountOverview'
import { resolve } from 'dns'
const url = 'mongodb://localhost:27017';

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {users: []}
  }

  getAllUsers(){
    axios.get('http://localhost:4000/users')
    .then((res) => {
      // const usersInfo = res.data;
      this.setState({
        users: res.data
      })
    })
    .catch((err) => {
      console.log('this is the error: ' + err)
    })
  }

  

  componentDidMount(){
    this.getAllUsers();
  }
  
  checkCredentials = (inputUsername, inputPassword) => {
    axios.get('http://localhost:4000/users/' + inputUsername)
    .then((result) => {
      this.setState({enteredDetails: result.data})
      if (result.data[0].password === inputPassword) {
        this.setState({currentUser: result.data[0]})
      }
    })
  }

  signupNewUser = (submittedDetails) => {
    console.log(submittedDetails)
    axios.post('http://localhost:4000/users/add', {
      fn: submittedDetails.fn,
      ln: submittedDetails.ln,
      username: submittedDetails.username,
      password: submittedDetails.password
    })
    .then(this.setState({currentUser: submittedDetails}))
  }

  render() {
    return (
      <Router>
        <h1>Welcome to your favorite habit tracker!</h1>
        {!this.state.currentUser ? <Login checkCredentials={this.checkCredentials}/> : null}
        {!this.state.currentUser ? <Signup signup={this.signupNewUser}/>: null}
      <div>
        {this.state.currentUser ? <AccountOverview  userInfo = {this.state.currentUser}/> : 'not currently logged in' }
      </div>
      </Router>
    )
  }
}

export default App
