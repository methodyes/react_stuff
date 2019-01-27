import React, { Component } from 'react'

 class Butmul extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           count : 1
          
       }
     }
     multiplyby (){
      this.setState ({
        count : this.state.count * 5
      })

     }
     
  render() {
    return (
      <div>
          <h1>Button For Multiplication</h1>
          <h3>The value is-{this.state.count}</h3>
        <button onClick={()=> this.multiplyby()}>Multiply by 2</button>
      </div>
    )
  }
}
export default  Butmul