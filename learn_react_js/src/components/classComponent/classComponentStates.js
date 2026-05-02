import React from "react";

class ClassComponentWithStates extends React.Component {
  constructor() {
    super();

    this.state = {
      data:
        "I am just a variable which will be accessible anywhere on this component using this.state.data keyword."
    };
  }

  updateStateVariable = () => {
    // this.state.data = "Data has been updated without setState method.";
    console.log(this.state.data);
  };

  updateWithSetState = () => {
    this.setState({ data: "Data has been updated." });
  };

  render() {
    return (
      <div>
        <h1>Class Component with States</h1>
        <p>
          We prefer to use class component over the functional component because
          of the life cycle hooks and local state which make our component to
          hold some sort of data and this will be accessible anywhere in this
          component.
        </p>

        <h3>What is state in React?</h3>
        <p>
          State of a component is an object that holds some information that may
          change over the lifetime of the component. We should always try to
          make our state as simple as possible and minimize the number of
          stateful components.
        </p>

        <h3>Why should we not update the state directly?</h3>
        <p>
          If you try to update state directly then it won't re-render the
          component.
        </p>
        <button onClick={this.updateStateVariable}>
          Update without setState
        </button>

        <p>
          Instead use setState() method. It schedules an update to a component's
          state object. When state changes, the component responds by
          re-rendering.
        </p>

        <button onClick={this.updateWithSetState}>Update with setState</button>

        <h4>Example:</h4>
        <p>
          <strong>{this.state.data}</strong>
        </p>
      </div>
    );
  }
}

export default ClassComponentWithStates;
