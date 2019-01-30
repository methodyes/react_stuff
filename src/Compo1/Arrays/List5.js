import React, { Component } from "react";

class List5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }

  render() {
    const nameList = this.state.Names.map(list => {
      // if we put list inside the html Element, then we hv to use curly Braces- if no just put list word is ok
      return <h3>{list}</h3>;
    });
    return (
      <div>
        <h4>List 5</h4>
        {nameList}
      </div>
    );
  }
}
export default List5;
