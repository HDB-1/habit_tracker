import React, { Component } from 'react'

export class AddActivity extends Component {
    state = {
        frequency: "Daily",
        isPriority: false
    }

    handleChangeOfActivityName = (input) => {
        this.setState({activityName: input})
    }
    handleChangeOfFrequency = (input) => {
        this.setState({frequency: input})
    }
    
    togglePriority = () => {
        if(this.state.isPriority){
            this.setState({isPriority : false})
        } else { 
            this.setState({isPriority: true})
        }
    }
    
    render() {
        return (
            <div>
            <form>
                <label for="activityName">Name of activity
                <input type="text" name="activityName" 
                onChange = {(event) => this.handleChangeOfActivityName(event.target.value)}>
                </input>
                </label>
                <label for="frequency">Frequency
                <select name="frequency" onChange = {(event) => this.handleChangeOfFrequency(event.target.value)}>
                    <option value = "Daily">Daily</option>
                    <option value = "Weekly">Weekly</option>
                    <option value = "Monthly">Monthly</option>
                </select>
                </label>
                <label for="priority">Priority (probs actually a radio button)
                <input type="checkbox" name="priority" onClick = {() => this.togglePriority()}/>This task is a priority
                </label>
                <button type="button" id="addActivityButton" onClick={() => this.props.addNewActivity(this.state)}>Add an activity! (jsx needs updating)</button>
            </form>
        </div>
        )
    }
}

export default AddActivity
