import React, { Component } from 'react'

export class AddActivity extends Component {
    state = {
        frequency: "Daily",
        isPriority: false
    }

    handleChangeOfActivityName = (event) => {
        this.setState({activityName: event.target.value})
    }
    handleChangeOfFrequency = (event) => {
        this.setState({frequency: event.target.value})
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
  <div class="form-group">
    <label for="exampleFormControlTextarea1">What do you need to do?</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"  onChange = {(event) => this.handleChangeOfActivityName(event)}></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Frequency</label>
    <select class="form-control" id="exampleFormControlSelect1" onChange = {(event) => this.handleChangeOfFrequency(event)}>
    <option value = "Daily">Daily</option>
    <option value = "Weekly">Weekly</option>
    <option value = "Monthly">Monthly</option>
    </select>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" name="priority" onClick = {() => this.togglePriority()}></input>
    <label class="form-check-label" for="exampleCheck1">Is this habit important?</label>
  </div>
  <button type="button" class="btn btn-primary" id="addActivityButton" onClick={() => this.props.addNewActivity(this.state)}>Add</button>

</form>
        </div>
        )
    }
}

export default AddActivity
