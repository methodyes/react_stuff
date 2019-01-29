// import React, { Component } from 'react'

//  class Buttonteach extends Component {
    
//      state = {
//           count : 1
//        }
     
//        valueadd =()=>{
//            this.setState ({
//                count : this.state.count + 1
//            })
//        }
//   render() {
//     return (
//       <div>
//         <button onClick={this.valueadd}>{this.state.count}</button>
//       </div>
//     )
//   }
// }
// export default  Buttonteach

import React, { Component } from 'react'

 class Buttonteach extends Component {
  
     state = {
          count : 0
       }
     
       valueadd =()=>{
       this.setState((prevState)=>{
       return {
           count : prevState.count + 1
       }
       })

       }

     
  render() {
    return (
      <div>
        <button onClick={this.valueadd}>{this.state.count}</button>
      </div>
    )
  }
}






export default Buttonteach