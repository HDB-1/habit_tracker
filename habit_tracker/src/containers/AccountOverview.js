import React, { Component } from 'react'

export class accountOverview extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.userInfo.fn} {this.props.userInfo.ln}</h1>
            </div>
        )
    }
}

export default accountOverview
