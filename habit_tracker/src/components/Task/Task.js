import React from 'react'
import axios from 'axios'
import './Task.css'

export default function Task(props) {
    return (
        <div>
            <ul className={props.className}>
                <li>{props.activity.activityName}</li>
                <li>{props.activity.frequency}</li>
                <li>{props.activity.completed ? "Task is complete" : "task outstanding"}</li>
                <li>{props.activity.isPriority ? "This task is priority" : "this is not urgent"}</li>
                <li>{props.activity.lastCompleted}</li>
                <li>{props.activity.streak}</li>
                <button type = "button" onClick= {() => axios.post('http://localhost:4000/mark_task_as_complete', {activityName: props.activity.activityName})}>Mark task as complete</button>

            </ul>
        </div>
    )
}
