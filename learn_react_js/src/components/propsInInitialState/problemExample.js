import React from "react";

class ProblemExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: this.props.randomNumber
    };
  }

  render() {
    return (
      <>
        <h3>Problem Example:</h3>
        <p>
          Below value is not getting updated when the props values are updated.
          Because, we are using state inside our constructor which will only
          used for initialization. And Even though the re-rendering happens, the
          constructor part wont be executed.
        </p>
        <p>{this.state.randomNumber}</p>

        {/* Solution */}
        <h3>Solution:</h3>
        {this.props.randomNumber}
      </>
    );
  }
}

export default ProblemExample;
