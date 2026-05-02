import React from "react";

import {
  SuperConstructorWithProps,
  SuperConstructorWithProps2
} from "./superConstructorWithProps";

class MyComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      data: { name: "John", age: 42 }
    };
  }

  render() {
    return (
      <div>
        <h1>Super Constructor with props</h1>
        <p>
          A child class constructor cannot make use of this reference until
          super() method has been called. The same applies for ES6 sub-classes
          as well. The main reason of passing props parameter to super() call is
          to access this.props in your child constructors.
        </p>

        <SuperConstructorWithProps data={this.state.data} />
        <SuperConstructorWithProps2 data={this.state.data} />
      </div>
    );
  }
}

export default MyComponent;
