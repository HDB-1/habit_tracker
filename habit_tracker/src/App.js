import React, { Component } from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import MongoClient from 'mongodb'
const url = 'mongodb://localhost:27017';

export class App extends Component {

  getAllUsers() {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        const dbo = db.db('habit_tracker');
        dbo.collection('users').find({}).toArray(function(err, result) {
            if (err) throw err;
            this.setState({userInfo : result})
            db.close();
        });
    }); 
}

  componentDidMount(){
    this.getAllUsers()
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
