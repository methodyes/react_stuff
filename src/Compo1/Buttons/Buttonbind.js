import React, { Component } from 'react'

class Buttonbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
      this.messageclick = this.messageclick.bind(this)
    }
    messageclick () {
        this.setState({
            message: 'Good bye'
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.messageclick}>Click here</button>
        <h3>{this.state.message}</h3>
      </div>
    )
  }
}
export default  Buttonbind