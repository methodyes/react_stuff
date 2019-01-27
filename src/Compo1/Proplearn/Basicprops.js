import React from 'react'

const Basicprops = (props) => {
  return (
    <div>
      <h1>About props</h1>
       {props.name} | {props.age}

    </div>
  )
}

export default Basicprops

// *** this lesson shows that how to access props, props use is that we can access 
// something many times without repeat the sentence again and again. ***

