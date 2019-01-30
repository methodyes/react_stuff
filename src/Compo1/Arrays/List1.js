import React, { Component } from 'react'

 class List1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Names : [
             "Metho" , "Huzni" , "Arshad", "Ammar"
         ]
      }
    }
    
  render() {
    return (
      <div>
       <h3>{this.state.Names}</h3> 
      </div>
    )
  }
}
export default List1