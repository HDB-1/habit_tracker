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
      this.setState({users: res.data})
    })
    .catch((err) => {
      console.log('this is the error: ' + err)
    })
  }

  componentDidMount(){
    this.getAllUsers();
  }

  render() {
    return (
      <Router>
        <h1>Welcome to your favorite habit tracker!</h1>
        <Login />
        <Signup />
      <div>
        
      </div>
      </Router>
    )
  }
}

export default App
