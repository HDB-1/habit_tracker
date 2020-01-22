import React, { Component } from 'react'

export class AddActivity extends Component {

    handleChangeOfActivityName = (event) => {
        this.setState({activityName: event.target.value})
    }
    handleChangeOfFrequency = (event) => {
        this.setState({frequency: event.target.value})
    }
    handleChangeOfPriority = (event) => {
        this.setState({priority: event.target.value})
    }
    
    render() {
        return (
            <div>
            <form>
                    <label for="activityName">Name of activity
                    <input type="text" name="activityName" 
                    onChange = {(event) => this.handleChangeOfActivityName(event)}>
                    </input>
                    </label>
                    <label for="frequency">Frequency
                    <select name="frequency" onChange = {(event) => this.handleChangeOfFrequency(event)}>
                        <option value = "Daily">Daily</option>
                        <option value = "Weekly">Weekly</option>
                        <option value = "Monthly">Monthly</option>
                    </select>
                    </label>
                    <label for="priority">Priority (probs actually a radio button)
                    <input type="checkbox" name="priority" onChange = {(event) => this.handleChangeOfPriority(event)}/>This task is a priority
                    </label>
                    <button type="button" id="addActivityButton" >Add an activity! (jsx needs updating)</button>
                </form>
        </div>
        )
    }
}

export default AddActivity
