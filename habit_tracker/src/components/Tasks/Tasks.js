import React from 'react'
import Task from '../Task/Task'
import './Tasks.css'


export default function Tasks(props) {
    return (
        <div>
            <ul>
                {props.activitiesArray.map((activity, index) => {
                    return <Task className= {activity.completed ? "completedTask" : "incompleteTask"} activity={activity}/>
                })}
            </ul>
        </div>
    )
}
