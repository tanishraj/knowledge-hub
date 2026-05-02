import React from "react";
import PureFunctionalComponent from "./reactMemo";

class ContainerComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      val: 50
    };
  }

  clickHandler = () => {
    var randomNumber = Math.floor(Math.random() * 100);
    this.setState({ val: randomNumber });
  };

  render() {
    return (
      <>
        <h1>Pure Fucntional Component</h1>
        <button onClick={this.clickHandler}>
          Render current Class component
        </button>

        <PureFunctionalComponent data={this.state.val} />
      </>
    );
  }
}

export default ContainerComponent;
