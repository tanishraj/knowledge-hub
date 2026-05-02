import React from "react";
import PureClassComponent from "./pureClassComponent";
import FunctionalComponent from "./fucntionalComponent";

class ContainerComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 50
    };
  }

  updateMarks = () => {
    // var randomMarks = Math.floor(Math.random() * 100);
    // var randomMarks = this.state.score;
    var randomMarks = 100;
    this.setState({ score: randomMarks });
  };

  render() {
    return (
      <div>
        <h1>What is Pure Component (Class)</h1>
        <p>
          React.PureComponent is exactly the same as React.Component except that
          it handles the shouldComponentUpdate() method for you. When props or
          state changes, PureComponent will do a shallow comparison on both
          props and state. Component on the other hand won't compare current
          props and state to next out of the box. Thus, the component will
          re-render by default whenever shouldComponentUpdate is called.
        </p>
        <p>
          Pure components have some performance improvements and render
          optimizations since React implements the shouldComponentUpdate()
          method for them with a shallow comparison for props and state.
        </p>
        <p>
          Lets compare, a stateless component and a Pure component and see which
          one is faster and efficient
        </p>
        <button onClick={this.updateMarks}>Update Marks</button>
        <hr />
        <PureClassComponent label="Math" score={this.state.score} />
        <hr />
        <FunctionalComponent label="Math" score={this.state.score} />
      </div>
    );
  }
}

export default ContainerComponent;
