import React, { Component } from "react";

class Usermain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Users: [
        { name: "Metho", age: 30 },
        { name: "Huzni", age: 26 },
        { name: "Arshad", age: 29 }
      ]
    };
  }
  reduceage() {
    const newModifiedUsers = this.state.Users.map(userItem => {
      return this.increaseAgeBy10(userItem);
    });

    this.setState({
      Users: newModifiedUsers
    });
  }

  increaseAgeBy10(user) {
    user.age = user.age + 10;
    return user;
  }

  render() {
    return (
      <div>
        <h1>Student Details</h1>
        <button
          onClick={() => {
            this.reduceage();
          }}
        >
          Increase Age
        </button>
        {this.state.Users.map(userItem => {
          return (
            <h3 key={userItem.name}>
              {userItem.name} -> {userItem.age}
            </h3>
          );
        })}
      </div>
    );
  }
}
export default Usermain;
