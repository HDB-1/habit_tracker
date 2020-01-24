import React, { Component } from 'react'
import axios from 'axios'
import Tasks from '../components/Tasks/Tasks'
import AddActivity from '../components/AddActivity/AddActivity'

export class accountOverview extends Component {
    state = {}
// N.B this is disabled and replaced with updateAllActivities for the presentation so that streak reset calculations can be demonstrated
    getAllActivities = () => {
    axios.get('http://localhost:4000/activities/' + this.props.userInfo.username)
    .then((res) => {
      this.setState({allActivities: res.data})
    })
    .then(() => {
        this.updateActivityStreaks(this.state.allActivities)
    })
    .catch((err) => {
        console.log('erro in account overview' + err)
      })
  }
// Same function but without this.updateActivityStreaks so that this only happens on first loading
  updateAllActivities = () => {
    axios.get('http://localhost:4000/activities/' + this.props.userInfo.username)
    .then((res) => {
      this.setState({allActivities: res.data})
    })
    .catch((err) => {
        console.log('error in account overview' + err)
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
      lastCompleted: new Date(),
      streak: 0
    })
    .then(this.setState({displayAddActivityComponent: false}))
  }

  calculateDaysSinceADate = dateProvided => {
    let dateForChanging = new Date (dateProvided);
    let dateNowForComparison = new Date();
    dateForChanging.setHours(12, 0, 0);
    dateNowForComparison.setHours(12, 0, 0);
    return Math.round((dateNowForComparison - dateForChanging) / 86400000)
}
// N.B. Do we want this function to run on a button click instead to demonstrate that the logic's there?
  updateActivityStreaks = activitiesArray => {
      for(let i = 0; i < activitiesArray.length; i++){
          let activity = activitiesArray[i]
          let daysSinceTask = this.calculateDaysSinceADate(activity.lastCompleted)
          let overDue = false;
          if(activity.frequency === 'daily' && daysSinceTask > 1){
            overDue = true;
          }
          else if(activity.frequency === 'weekly' && daysSinceTask > 7){
              overDue = true;
          }
          else if(activity.frequency === 'monthly' && daysSinceTask > 31){
              overDue = true;
          }
          if(overDue){
              axios.post('http://localhost:4000/update_activity_streak', {
                  activityName: activity.activityName,
                  newStreak: 0
              })
          }
      }
  }



    componentDidUpdate = () => {
        this.updateAllActivities();
    }

    componentDidMount = () => {
        this.updateAllActivities();
    }

    render() {
        return (
            <div>
                <button type="button" name="logOutButton" onClick={this.props.logOutUser}>Log out</button>
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
                {!this.state.displayAddActivityComponent ? 
                <button type="button" onClick={() => this.updateActivityStreaks(this.state.allActivities)}>Click here to update streaks</button>:
                null}

            </div>
        )
    }
}

export default accountOverview
