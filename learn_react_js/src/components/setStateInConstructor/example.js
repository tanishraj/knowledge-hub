import React from "react";

class SetStateInConstructorExample extends React.Component {
  constructor() {
    super();

    this.setState({ name: "Tanish" });
  }

  render() {
    return <>{/* <h3>Name: {this.state.name}</h3> */}</>;
  }
}

export default SetStateInConstructorExample;
