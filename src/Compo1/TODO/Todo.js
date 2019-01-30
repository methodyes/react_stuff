import React, { Component } from 'react'
import Addnewtask from './Addnewtask'
import Todoapplist from './Todoapplist'

 class Todo extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }
   
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <Addnewtask/>
       <Todoapplist/>
      </div>
    )
  }
}
export default Todo