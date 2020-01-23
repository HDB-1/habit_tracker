import React from 'react'
import axios from 'axios'
import './Task.css'
import tickImage from '../../pics/tick.png'
import crossImage from '../../pics/cross.png'
import exclamationMarkImage from '../../pics/urgent.png'
import streakFlameImage from '../../pics/streakFlame.png'



export default class Task extends React.Component {


    markTaskAsCompleteAndUpdateStreak = (activityName, newStreak) => {
        axios.post('http://localhost:4000/mark_task_as_complete', {activityName: activityName});
        axios.post('http://localhost:4000/update_activity_streak', {
            activityName: activityName,
            newStreak: newStreak
        })}
    

    render() {
        return (

            <div className={this.props.className}>
                <h5 className="headbar">Activity Name</h5>
                <h5 className="headbar">Streak</h5>
                <h5 className="headbar">Priority?</h5>
                <h5 className="headbar">Done?</h5>

                <p className="activityName coloumns">{this.props.activity.activityName}</p>
                <p className="columns">This is the frequency: {this.props.activity.frequency}</p>
                <p className="columns streak"><img src={streakFlameImage} className="tick" alt="flame"></img>{this.props.activity.streak}</p>
                <p className="columns">{this.props.activity.isPriority ? <img src={exclamationMarkImage} className="tick" alt="big red exclamation mark"></img> : null}</p>
                <div className="columns">
                <p className="done">{this.props.activity.completed ? <img src={tickImage} className="tick" alt="tick"></img> : <img src={crossImage} className="tick" alt="tick"></img>}</p>
                <button className="completedBtn done" type = "button" onClick= {() => this.markTaskAsCompleteAndUpdateStreak(this.props.activity.activityName, this.props.activity.streak + 1)}
                >Mark task as complete</button>
                <p className="lastCompleted done" name="submitBtn">Last completed: {this.props.activity.lastCompleted.toString().substring(0,10)}  @  {this.props.activity.lastCompleted.toString().substring(16, 21)}</p>
                </div>

            </div>
        )
            }
}



