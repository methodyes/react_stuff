import React, { Component } from "react";

// 1. we create a class component here-.
class Usermain extends Component {
  // 2.create a constructor here-
  constructor(props) {
    super(props);
// 3. inside the this.state, we create an array with objects-.
    this.state = {
      Users: [
        { name: "Metho", age: 30 },
        { name: "Huzni", age: 26 },
        { name: "Arshad", age: 29 }
      ]
    };
  }
  // 7. define the function here
  reduceage() {
    // 8. get the array by map here
    const newModifiedUsers = this.state.Users.map(userItem => {
      // option 1 as below
      // Users.age =Users.age + 10 ; 
      //  10. now we get the function to here which we hv changed the age by ten
      return this.increaseAgeBy10(userItem); 
      // option 2 - add the function here-
    });
// 11. now we create a this.setstate to change the state to a new state
    this.setState({
      Users: newModifiedUsers
    });
  }
// 9. create a function to change the age by 10
  increaseAgeBy10(user) {
    user.age = user.age + 10;
    return user;
  } 
  // option 2 - add the function here-

  render() {
    return (
      <div>
        {/* 4. given a subject name here- */}
        <h1>Student Details</h1>
        {/* 5. create a button line here- */}
        <button
        // 6. create a button event with a call function here
          onClick={() => {
            this.reduceage();
          }}
        >
          Increase Age
        </button>
        {/* 12. now we get the new array as blw to be displayed. */}
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


// important- since this map is the option to for loop option, so the user Item is the index here-