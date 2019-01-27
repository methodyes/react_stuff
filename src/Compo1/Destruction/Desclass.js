import React, { Component } from 'react'

//  class Desclass extends Component {
//   render() {
//     return (
//       <div>
//           <h1>{this.props.name} | {this.props.age}</h1>
        
//       </div>
//     )
//   }
// }

// now we are going to destruct the props as blw

class Desclass extends Component {
    render() {
        const {name,age} = this.props
      return (
        <div>
            <h1>{name} | {age}</h1>
          
        </div>
      )
    }
  }
export default Desclass

// in above example, we saw how to put props in an another way.