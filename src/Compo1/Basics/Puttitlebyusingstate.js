import React, { Component } from 'react'

 class Puttitlebyusingstate extends Component {
    state = {
        title : "About how to add a title by using a state"  
    }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}
export default Puttitlebyusingstate