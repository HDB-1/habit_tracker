import React, { Component } from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import axios from 'axios';
import AccountOverview from './containers/AccountOverview';
import './App.css';


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

  logOutUser = () => {
    this.setState({currentUser: false})
  }

  

  componentDidMount(){
    this.getAllUsers();
  }
  
  checkCredentials = (inputUsername, inputPassword) => {
    axios.get('http://localhost:4000/users/' + inputUsername)
    .then((result) => {
      if(!result.data[0]){
        this.setState({incorrectLoginProvided: true})
      }
      else{
      this.setState({enteredDetails: result.data})
      if (result.data[0].password === inputPassword) {
        this.setState({currentUser: result.data[0], incorrectLoginProvided: false})
        
      }
      else{
        this.setState({incorrectLoginProvided: true})
      }
    }
    })
  }

  signupNewUser = (submittedDetails) => {
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
        <div className='app'>
          <h1>Welcome to your favorite habit tracker!</h1>
          {!this.state.currentUser && this.state.incorrectLoginProvided ? (
            <h3 className="wrongLoginBanner">Wrong login details provided! Please try again.</h3>
          ) : null}
          {!this.state.currentUser ? <Login checkCredentials={this.checkCredentials}/> : null}
          {!this.state.currentUser ? <Signup signup={this.signupNewUser}/>: null}
          {this.state.currentUser ? <AccountOverview logOutUser={this.logOutUser} userInfo = {this.state.currentUser}/> : null }
        </div>
      </Router>
    )
  }
}

export default App
