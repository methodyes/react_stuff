import React, { Component } from 'react'
import If1 from './If1'

class If extends Component {
  render() {
    return (
      <div>
        <h1>Learn about IF</h1>
        <If1 age="30">Metho</If1>
        <If1 age="29">Arashad</If1>
        <If1 age="26">Huzni</If1>
        
        <If1 >ammar</If1>
        <If1 age="26"></If1>
        <If1 ></If1>
      </div>
    )
  }
}

export default  If