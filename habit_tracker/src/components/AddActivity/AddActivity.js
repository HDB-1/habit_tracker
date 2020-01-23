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
            <div className="container">
            <form>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">What do you need to do?</label>
    <textarea name="activityName" className="form-control" id="exampleFormControlTextarea1" rows="2"  onChange = {(event) => this.handleChangeOfActivityName(event.target.value)}></textarea>
  </div>

  <div className="form-group">
    <label for="exampleFormControlSelect1">Frequency</label>
    <select name="frequency" className="form-control" id="exampleFormControlSelect1" onChange = {(event) => this.handleChangeOfFrequency(event.target.value)}>
    <option value = "Daily">Daily</option>
    <option value = "Weekly">Weekly</option>
    <option value = "Monthly">Monthly</option>
    </select>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="priority" onClick = {() => this.togglePriority()}></input>
    <label className="form-check-label" for="exampleCheck1">Is this habit important?</label>
  </div>
  <button type="button" className="btn btn-primary" id="addActivityButton" onClick={() => this.props.addNewActivity(this.state)}>Add</button>

</form>

        </div>
        )
    }
}

export default AddActivity
