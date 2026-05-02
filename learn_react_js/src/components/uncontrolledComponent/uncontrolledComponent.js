import React from "react";

class UnControlledComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };

    // Create Refs is basically used to query the DOM to access that DOM element. (Traditional way of accessing DOM)
    this.input = React.createRef();

    // binding "this" reference to the normal function (instead you can use arrow function so that you dont need to bind the "this" reference)
    this.convertToUpper = this.convertToUpper.bind(this);
  }

  convertToUpper() {
    this.input.current.value = this.input.current.value.toUpperCase();
  }

  render() {
    return (
      <>
        <h1>Uncontrolled Component</h1>
        <p>
          The Uncontrolled Components are the ones that store their own state
          internally, and you query the DOM using a ref to find its current
          value when you need it. This is a bit more like traditional HTML.
        </p>

        <hr />

        <p>
          <strong>Example</strong>
        </p>

        {/* By default all input controls creates their own state, and here we are not controlling it's default state. Its using its default state internally, and we are trying to modify the data using refs, whic is the traditional way of doing stuff */}
        <input type="text" onChange={this.convertToUpper} ref={this.input} />
      </>
    );
  }
}

export default UnControlledComponent;
