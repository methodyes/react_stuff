import React, { Component } from 'react'
import Basiclet1 from './Basiclet1'

class Basiclet extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Basiclet1 age="30">Metho</Basiclet1>
        <Basiclet1 age="29">Arashad</Basiclet1>
        <Basiclet1 >Huzni</Basiclet1>
        <Basiclet1 age="20"></Basiclet1>
        
      </div>
    )
  }
}
export default  Basiclet

// *** this is the main component. this component elements are located in app.js
// all the subcompnenet details are added here. try to understand the architecture 
// of components