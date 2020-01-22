import React from 'react'
import axios from 'axios'
import './Task.css'
import tickImage from '../../pics/tick.png'
import crossImage from '../../pics/cross.png'
import exclamationMarkImage from '../../pics/urgent.png'
import streakFlameImage from '../../pics/streakFlame.png'



export default function Task(props) {
    return (
        <div className={props.className}>
            <h5 className="headbar">Activity Name</h5>
            <h5 className="headbar">Streak</h5>
            <h5 className="headbar">Priority?</h5>
            <h5 className="headbar">Done?</h5>

            <p className="activityName coloumns">{props.activity.activityName}</p>
            <p className="columns">This is the frequency: {props.activity.frequency}</p>
            <p className="columns streak"><img src={streakFlameImage} className="tick" alt="flame"></img>{props.activity.streak}</p>
            <p className="columns">{props.activity.isPriority ? <img src={exclamationMarkImage} className="tick" alt="big red exclamation mark"></img> : null}</p>
            <div className="columns">
            <p className="done">{props.activity.completed ? <img src={tickImage} className="tick" alt="tick"></img> : <img src={crossImage} className="tick" alt="tick"></img>}</p>
            <button className="completedBtn done" type = "button" onClick= {() => axios.post('http://localhost:4000/mark_task_as_complete', {activityName: props.activity.activityName})}>Mark task as complete</button>
            <p className="lastCompleted done">Last completed: {props.activity.lastCompleted.toString().substring(0, 10)}  @  {props.activity.lastCompleted.toString().substring(11, 16)}</p>
            </div>
        </div>
    )
}


