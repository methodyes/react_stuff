import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count : 0,
        tags : ['tag1','tag2','tag3']
        // to add a random image as blw.
        // imageUrl : "https://picsum.photos/150"

    }
    renderTags (){
      if(this.state.tags===0) {
        return <h1>No tags</h1>
      } else {
        return <h1>{this.state.tags}</h1>
      }
    }
    
  render() {
    return (
      <div>
          {/* // to add a random image as blw. */}
          {/* <img src={this.state.imageUrl}/> */}
        <span >{this.formatCount()}</span>
        <button>Increment</button>
        {this.renderTags()}
        <ul>
          {this.state.tags.map(tags=><li key={tags}>{tags}</li>)}
          
        </ul>
      </div>
    )
  }
formatCount(){
    const {count} = this.state
    
    return count===0 ? "Zero" : count ;
}
// we can write the code as below way, above is for short cutmethod.
    // formatCount (){
    //     return this.state.count===0 ? "Zero" : this.state.count
    // }


}
export default  Counter