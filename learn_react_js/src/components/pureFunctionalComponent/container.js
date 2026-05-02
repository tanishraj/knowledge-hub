import React from "react";
import PureFunctionalComponent from "./pureFunctionalComponent";

class ContainerComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Pure Functional Component"
    };
  }

  clickHandler = () => {
    // this.setState({ title: "I am updated Number" + Math.random(100) });
    this.setState({ title: "I am the updated title" });
  };

  render() {
    return (
      <>
        <h1>Pure Fucntional Component</h1>
        <button onClick={this.clickHandler}>
          Render current Class component
        </button>

        <PureFunctionalComponent data={this.state.title} />
      </>
    );
  }
}

export default ContainerComponent;
