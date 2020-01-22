import React from 'react'

export default function AddActivity() {
    return (
        <div>
            <form>
                    <label for="activityName">Name of activity
                    <input type="text" name="activityName"></input>
                    </label>
                    <label for="frequency">Frequency
                    <input type="text" name="frequency"></input>
                    </label>
                    <label for="priority">Priority (probs actually a radio button)
                    <input type="text" name="priority"></input>
                    </label>
                    <button type="button" id="addActivityButton" >Add an activity! (jsx needs updating)</button>
                </form>
        </div>
    )
}
