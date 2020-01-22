import React from 'react'
import axios from 'axios'
import './Task.css'
import tickImage from '../../pics/tick.png'
import crossImage from '../../pics/cross.png'



export default function Task(props) {
    return (
        <div>
            <ul className={props.className}>
                <li className="activityName">{props.activity.activityName}</li>
                <li>This is the frequency: {props.activity.frequency}</li>
                {/* <li>{props.activity.completed ? "Task is complete" : "task outstanding"}</li> */}
                <li>Priority flagger: {props.activity.isPriority ? "This task is priority" : "this is not urgent"}</li>
                <li>Streak: {props.activity.streak}</li>

                <button type = "button" onClick= {() => axios.post('http://localhost:4000/mark_task_as_complete', {activityName: props.activity.activityName})}>Mark task as complete</button>
            <p className="lastCompleted">Last completed: {props.activity.lastCompleted.toString().substring(0, 21)}</p>
            </ul>
                {props.activity.completed ? <img src={tickImage} className="tick" alt="tick"></img> : <img src={crossImage} className="tick" alt="tick"></img>}
                
                
        </div>
    )
}


