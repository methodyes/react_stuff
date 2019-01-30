import React, { Component } from "react";

class List4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Names: ["Metho", "Huzni", "Arshad", "Ammar"]
    };
  }

  render() {
    return (
      //   <div>
      //       <ol>
      //    {this.state.Names.map((user)=> <li>{user}</li> )}
      //    </ol>
      //   </div>

      <div>
        <ul>
          {this.state.Names.map(user => (
            <li>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default List4;
