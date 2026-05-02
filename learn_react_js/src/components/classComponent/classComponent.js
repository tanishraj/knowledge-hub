import React from "react";

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>
          You can also use ES6 class to define a component. The above function
          component can be written using class keyword.
        </p>

        <h3>When to use a Class Component over a Function Component?</h3>
        <p>
          If the component needs state or lifecycle methods then use class
          component otherwise use function component. However, from React 16.8
          with the addition of Hooks, you could use state , lifecycle methods
          and other features that were only available in class component right
          in your function component.
        </p>
      </div>
    );
  }
}

export default ClassComponent;
