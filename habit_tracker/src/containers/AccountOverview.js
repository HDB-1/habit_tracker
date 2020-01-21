import React, { Component } from 'react'
import axios from 'axios'
import Tasks from '../components/Tasks'

export class accountOverview extends Component {
    state = {}
    
    getAllActivities(){
        console.log(this.props.userInfo.username)
    axios.get('http://localhost:4000/activities/' + this.props.userInfo.username)
    .then((res) => {
        console.log(res.data)
      this.setState({allActivities: res.data})
      console.log(this.state.allActivities)
    })
    .catch((err) => {
        console.log('erro in account overview' + err)
      })
  }
componentDidMount() {
    this.getAllActivities()
}

    render() {
        // console.log(this.props.userInfo)
        return (
            <div>
                <h1>Welcome {this.props.userInfo.fn} {this.props.userInfo.ln}</h1>
                <h1>Activities:</h1>
                {this.state.allActivities ? <Tasks activitiesArray = {this.state.allActivities}/> : null}
            </div>
        )
    }
}

export default accountOverview
