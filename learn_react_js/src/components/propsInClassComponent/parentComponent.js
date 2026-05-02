import React from "react";

import ChildComponent from "./childComponent";
import "./style.scss";

class parentComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      sendData: "Initial Number",
      childComponentData: "N/A"
    };
  }

  recieveHandler = (payload) => {
    this.setState({ childComponentData: payload });
  };

  generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  passDataToChild = () => {
    let randomNumber = this.generateRandomNumber();
    this.setState({ sendData: randomNumber });
  };

  render() {
    return (
      <div className="parent-container">
        <h1>Parent Component</h1>
        <button onClick={this.passDataToChild}>
          Click Here to Pass Data to Child
        </button>
        <p>
          Data that is coming from child:{" "}
          <strong>
            {this.state.childComponentData.message} -{" "}
            {this.state.childComponentData.data}
          </strong>
        </p>

        <ChildComponent
          data={this.state.sendData}
          recieveDataFromChild={this.recieveHandler}
        />
      </div>
    );
  }
}

export default parentComponent;
