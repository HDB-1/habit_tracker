import React, { Component } from 'react'
import axios from 'axios'
import Tasks from '../components/Tasks/Tasks'
import AddActivity from '../components/AddActivity/AddActivity'

export class accountOverview extends Component {
    state = {}

    getAllActivities = () => {
    axios.get('http://localhost:4000/activities/' + this.props.userInfo.username)
    .then((res) => {
      this.setState({allActivities: res.data})
    })
    .catch((err) => {
        console.log('erro in account overview' + err)
      })
  }

  displayAddActivityComponent = () => {
      this.setState({displayAddActivityComponent : true})
  }

  addNewActivity = (newTaskInfo) => {
    axios.post('http://localhost:4000/activities/add', {
      username: this.props.userInfo.username,
      activityName: newTaskInfo.activityName,
      frequency: newTaskInfo.frequency,
      completed: false,
      isPriority: newTaskInfo.isPriority,
      lastCompleted: '',
      streak: 0
    })
    .then(this.setState({displayAddActivityComponent: false}))
  }

componentDidUpdate() {
    this.getAllActivities()
}
componentDidMount() {
    this.getAllActivities()
}

    render() {
        // console.log(this.props.userInfo)
        return (
            <div>
                {this.state.displayAddActivityComponent ? null : 
                <div>
                <h1>Welcome {this.props.userInfo.fn} {this.props.userInfo.ln}</h1>
                <h1>Activities:</h1>
                {this.state.allActivities ? <Tasks activitiesArray = {this.state.allActivities}/> : null}
                </div>
                }
                {this.state.displayAddActivityComponent ? 
                <AddActivity addNewActivity = {this.addNewActivity}/> : 
                <button type="button" onClick={this.displayAddActivityComponent}>Add activity</button>}
            </div>
        )
    }
}

export default accountOverview
