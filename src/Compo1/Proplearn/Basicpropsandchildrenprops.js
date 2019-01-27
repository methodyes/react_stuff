import React from 'react'


const Basicpropsandchildrenprops = (props) => {
  return (
    <div>
      <h1> About props and children props in functional component </h1>
      <h5>{props.name} {props.children} {props.age} years old</h5>
      <h5>{props.name} |   {props.age} </h5>
      <h5>Name: {props.name} |  Age:  {props.age} </h5>
    </div>
  )
}

export default Basicpropsandchildrenprops

// *** first we have to add name and age attribute to the App.js.(will mention the name and age component in App.js first)
// then we access those atributes in sub component (Basicpropsandchildrenprops)  added to the sub component). 