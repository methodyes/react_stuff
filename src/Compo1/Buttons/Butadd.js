import React, { Component } from 'react'

 class Butadd extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           count : 0
          
       }
     }
     
     buttonadd(){
      this.setState({
          count : this.state.count + 1
      })
     }

  render() {
    return (
      <div>
          <h3> <u>Button For Adding</u></h3>
          <h4>The value is-{this.state.count}</h4>
        <button onClick={()=> this.buttonadd()}>Add One</button>
      </div>
    )
  }
}
export default Butadd

// These are the steps --
// first you have to create class component, then create a constructor with super MSInputMethodContext,
// then inside the div, create a button , then set the count as 0,so this is the base value Headers
// now you have to set an attribute for the button,when you create onclick, inside the 
// {} you have to create arrow function, then you have to create an event handler Headers
// then based on the event handler, create a function under the constructor and above the render
// and change the count to what you want to change, remember, here this.state.count is the base value of 0, this is
// what you are going to change here. thats it .