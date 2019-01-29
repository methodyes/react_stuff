import React, { Component } from 'react'

class Alerthello extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          
         
      }
      this.alertmessage=this.alertmessage.bind(this)
    }
    
    alertmessage (){
      alert ("check")
    }
  render() {
    return (
      <div>
          
        <button onClick={this.alertmessage}>Click</button>
      </div>
    )
  }
}
export default   Alerthello
