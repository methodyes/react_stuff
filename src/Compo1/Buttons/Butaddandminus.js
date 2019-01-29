import React, { Component } from 'react'

 class Butaddandminus extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           count : 1
          
       }
      
     }
     addition =()=>{
         this.setState({
             count : this.state.count + 1 
         })
     }
      substraction =()=>{
          this.setState ({
              count : this.state.count -1
          })
      }
      multiplication =()=>{
          this.setState({
              count : this.state.count*2
          })
      }
      division =()=> {
          this.setState ({
              count : this.state.count / 2
          })
      }
     
  render() {
    return (
      <div>
          <h1>Mathematics Operations</h1>
        <button onClick={this.addition}>Addition</button>
        <button onClick={this.substraction}>Substraction</button>
        <button onClick={this.multiplication}>Multiplication</button>
        <button onClick={this.division}>Division</button>
        <h2>{this.state.count}</h2>
       
      </div>
    )
  }
}

export default Butaddandminus