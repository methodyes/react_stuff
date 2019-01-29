import React from 'react'
import Basicsubcomponents1 from './Basicsubcomponents1'

const Basicsubcomponents = (props) => {
  const {name,age}=props
  return (
    <div>
      <h1> About sub components instead of using always app.js</h1>
      <h2>{name} {props.children}</h2>
      <Basicsubcomponents1></Basicsubcomponents1>
    </div>
  )
}

export default Basicsubcomponents

// *** this is the main component here , but App.js is the main compoent of this 
// so we have mention this component in App.js to render.