import React, { Component } from 'react'
import axios from 'axios'
export class accountOverview extends Component {
    
    getAllActivities(){
        console.log(this.props.userInfo.username)
    axios.get('http://localhost:4000/activities')
    .then((res) => {
        console.log(res.data)
      this.setState({allActivities: res.data})
    })
    .catch((err) => {
        console.log('erro in account overview' + err)
      })
  }
componentDidMount() {
    this.getAllActivities()
}

    render() {
        // console.log(this.props.userInfo)
        return (
            <div>
                <h1>Welcome {this.props.userInfo.fn} {this.props.userInfo.ln}</h1>

            </div>
        )
    }
}

export default accountOverview
