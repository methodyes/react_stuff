import React, { Component } from "react";

class List6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }
    myFun () {
      const myArray = this.state.Names.map(list => {
        return <h5>{list}</h5>;
      }); 
      return  myArray
    }
    render() {
      return (
      <div>
        
        {this.myFun()}
      </div>
      )
    // return <div>{nameList}</div>;
  }
}
export default List6;
