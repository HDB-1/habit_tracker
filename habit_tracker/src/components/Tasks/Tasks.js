import React from 'react'
import Task from '../Task/Task'

export default function Tasks(props) {
    return (
        <div>
            <ul>
                {props.activitiesArray.map((activity, index) => {
                    return <Task activity={activity}/>
                })}
            </ul>
        </div>
    )
}
