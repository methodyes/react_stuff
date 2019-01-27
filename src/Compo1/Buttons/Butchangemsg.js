import React, { Component } from 'react'

 class Butchangemsg extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message : " Jeewithe wenas weida ban?"

          
       }
     }
     changemessage (){
         this.setState ({
             message : "bayawenna epa ban, eka wenas wei"
                      
         })
     }
     
  render() {
    return (
      <div>
          <h1>Lets change the message from a button</h1>
          <h3> mokakda ban ube prashne ?</h3> 
          <h3> {this.state.message}</h3> 
        <button onClick={()=> this.changemessage()}>Click here to change the message</button>
      </div>
    )
  }
}
export default Butchangemsg

// important to note - here the base value is message " meka thamai wenas wenna ona".
// since we have already set this as state. now when we want to change the state, we have
// to create a setState . then when u put message, then the message will be changed