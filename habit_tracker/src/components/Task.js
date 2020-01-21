import React from 'react'

export default function Task(props) {
    return (
        <div>
            <ul>
                <li>{props.activity.activityName}</li>
                <li>{props.activity.frequency}</li>
                <li>{props.activity.completed ? "Task is complete" : "task outstanding"}</li>
                <li>{props.activity.isPriority ? "This task is priority" : "this is not urgent"}</li>
                <li>{props.activity.lastCompleted}</li>
                <li>{props.activity.streak}</li>
                <li>----------------------</li>
            </ul>
        </div>
    )
}
