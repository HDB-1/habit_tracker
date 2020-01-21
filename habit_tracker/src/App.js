import React, { Component } from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import MongoClient from 'mongodb'
import axios from 'axios';
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
    console.log('running')
    axios.get('http://localhost:4000/users/' + inputUsername)
    .then((result) => {
      console.log(result.data[0].password)
      this.setState({enteredDetails: result.data})
      if (result.data[0].password === inputPassword) {
        this.setState({currentUser: inputUsername})
        console.log('well done')
      }
    })
  }

  render() {
    return (
      <Router>
        <h1>Welcome to your favorite habit tracker!</h1>
        <Login checkCredentials={this.checkCredentials}/>
        <Signup />
      <div>
        
      </div>
      </Router>
    )
  }
}

export default App
