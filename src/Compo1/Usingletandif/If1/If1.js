import React from 'react'

const If1 = (props) => {
    
    let age=props.age ? props.age : "N/A";
    // if there is no age, then age will be N/A. i have = age to props.age, so 
    // so i can use age word instead of props.age. i use let for age for others
    // i used if function. we must use let also to avoid confuse.

    if (props.children){
        return (
            <div>
                <h3>
                Name: {props.children} | Age : {age}
                {/* here i have used age word instead of props.age.. in this if
                function i try to say that if there is the name, then 
                display both name and age */}
                </h3>
                </div>
        )
    
    } else if (props.age){
        return (
            <div>
                <h3>
                Name: N/A | Age : {age}
                </h3>
                </div>
        )
        /* here i try to say, if there is an age, then name should be N/A and 
        display the age as usual */
    }


  else {
      return (
    <div>
   
    
   <h3>  Invalid Entry</h3>
    </div>
     )
     // //   here i say, if there is no age or name, then should be invalid.
  }
      
   
}

export default If1
