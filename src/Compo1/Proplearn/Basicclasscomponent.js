import React, { Component } from 'react'

 class Basicclasscomponent extends Component {
  render() {
    return (
      <div>
        <h1>About Class Component and props</h1>
        <h4>{this.props.name} , age {this.props.age} {this.props.children}</h4>

      </div>
    )
  }
}
export default Basicclasscomponent

// *** in class component, we dont use props like in functional components.Basicclasscomponent
// we have to use this keyword here, so learn this way from above***