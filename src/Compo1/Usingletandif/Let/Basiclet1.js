import React from 'react'

const Basiclet1 = (props) => {
    let age=props.age ? props.age: " is unknown"
    let name=props.children ? props.children : " is unknown"
  return (
    <div>
      <h3>Name: {name} | Age: {age}</h3>
    </div>
  )
}

export default Basiclet1

// *** this is the sub component in main component of Basiclet. we have added
// the props and let details here but the original content is in main comonent.