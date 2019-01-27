import React from 'react'

// const Desfunct = (props) => {

//   return (
//     <div>
//         <h1>
//         {props.name} | {props.age}
//         </h1>
      
//     </div>
//   )
// }
// we can use above method as destruction as belwo.
const Desfunct = (props) => {
    const {name , age} = props

    return (
      <div>
          <h1>
          {name} | {age}
          </h1>
        
      </div>
    )
  }

export default Desfunct
// in above example, we can see how we can destruct the props or how can 
// put the props in an other way.