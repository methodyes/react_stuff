import React, { Component } from 'react'

 class List3 extends Component {
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
       {/* {this.state.Names.map((user)=><h3>{user}</h3>)} */}
       
       {this.state.Names.map((user)=>{
         return user
       })}

       {/* {this.state.Names.map((user)=>user)} */}
       {/* {this.state.Names.map((user)=>{
        return user
         })} */}
      </div>
    )
  }
}
export default List3