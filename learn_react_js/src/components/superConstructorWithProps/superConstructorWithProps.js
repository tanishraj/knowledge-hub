import React from "react";

export class SuperConstructorWithProps extends React.Component {
  constructor(props) {
    super();

    console.log("Scenario 1: ", props.data); // Object {name: "John", age: 42}
    // console.log("Scenario 1: ", this.props.data); // Error

    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <>
        <h1>Scenario 1:</h1>
        {this.props.data.name}
      </>
    );
  }
}

export class SuperConstructorWithProps2 extends React.Component {
  constructor(props) {
    super(props);

    console.log("Scenario 2: ", props.data); // Object {name: "John", age: 42}
    console.log("Scenario 2: ", this.props.data); // Error

    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <>
        <h1>Scenario 2:</h1>
        {this.props.data.name}
      </>
    );
  }
}
