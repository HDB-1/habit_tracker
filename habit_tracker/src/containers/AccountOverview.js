import React, { Component } from 'react'
import axios from 'axios'
import Tasks from '../components/Tasks'
import AddActivity from '../components/AddActivity'

export class accountOverview extends Component {
    state = {}

    getAllActivities = () => {
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

  displayAddActivityComponent = () => {
      this.setState({addingNewActivity : true})
  }

  addNewActivity = (newTaskInfo) => {
    console.log(newTaskInfo)
    axios.post('http://localhost:4000/activities/add', {
      activityName: newTaskInfo.activityName,
      frequency: newTaskInfo.frequency,
      isPriority: newTaskInfo.isPriority
    })
    .then(this.setState({displayAddActivityComponent: false}))
  }

componentDidMount() {
    this.getAllActivities()
}

    render() {
        // console.log(this.props.userInfo)
        return (
            <div>
                {this.state.addingNewActivity ? null : 
                <div>
                <h1>Welcome {this.props.userInfo.fn} {this.props.userInfo.ln}</h1>
                <h1>Activities:</h1>
                {this.state.allActivities ? <Tasks activitiesArray = {this.state.allActivities}/> : null}
                </div>
                }
                {this.state.addingNewActivity ? 
                <AddActivity addNewActivity = {this.addNewActivity}/> : 
                <button type="button" onClick={this.displayAddActivityComponent}>Add activity</button>}
            </div>
        )
    }
}

export default accountOverview
