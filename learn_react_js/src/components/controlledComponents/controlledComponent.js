import React from "react";

class ControlledComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      // This variable can not be null as none of the inpur controls can not be assigned with the value as "null"
      inputName: ""
    };
    this.convertToUpper = this.convertToUpper.bind(this);
  }

  convertToUpper(e) {
    let result = e.target.value.toUpperCase();
    this.setState({ inputName: result });
  }

  render() {
    return (
      <>
        <h1>Controlled Component</h1>
        <p>
          A component that controls the input elements within the forms on
          subsequent user input is called Controlled Component, i.e, every state
          mutation will have an associated handler function.
        </p>

        <hr />
        <p>
          <strong>Example</strong>
        </p>

        {/* By default all input controls creates their own state, but to override those state, to make our state controllable by the component's state */}
        <input
          type="text"
          onChange={this.convertToUpper}
          value={this.state.inputName}
        />
      </>
    );
  }
}

export default ControlledComponent;
