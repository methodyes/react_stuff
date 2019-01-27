import React, { Component } from 'react'


 class Usermain  extends Component {
     constructor(props) {
       super(props)
     
       this.state = {

        Users :[{ name:"Metho" , age:30} , ]
        //    Users : [
        //    { name:"Metho" , age:30} , 
        //    { name:"Huzni" , age:26} , 
        //    { name:"Arshad" , age:29} , 

        //    ]
          
       }
     }
     reduceage () {
         this.setState ({
             Users : this.state.Users.age-5

             
            // Users : [
            //     { name:"Metho" , age:20} , 
            //     { name:"Huzni" , age:16} , 
            //     { name:"Arshad" , age:19} , 
     
            //     ]
         })
             

     }
  render() {
    return (
      <div>
          <h1>Student Details</h1>
          <button onClick={()=> this.reduceage()}>Reduce Age</button>
          <h3>{this.state.Users}</h3>
          {/* <h3> Name : {this.state.Users[0].name } | Age : { this.state.Users[0].age} <br/>
          Name : {this.state.Users[1].name } | Age : { this.state.Users[1].age} <br/>
          Name : {this.state.Users[2].name } | Age : { this.state.Users[2].age}
           </h3> */}
        
      </div>
    )
  }
}
export default Usermain
