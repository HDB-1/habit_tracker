import React, { Component } from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Login from './components/Login'

export class App extends Component {
  render() {
    return (
      <Router>
        <Login />
      <div>
        
      </div>
      </Router>
    )
  }
}

export default App
