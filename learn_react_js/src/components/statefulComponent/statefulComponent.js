import React from "react";

class ClassStatefulComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Stateful Component"
    };
  }

  render() {
    return (
      <>
        <h1>Stateful Component (Class Component)</h1>
        <p>
          If the behaviour of a component is dependent on the state of the
          component then it can be termed as stateful component. These stateful
          components are always class components and have a state that gets
          initialized in the constructor.
        </p>
        <ul>
          <li>
            We should always use class component to create an stateful
            component.
          </li>
        </ul>

        <p>
          <strong>Title: </strong> {this.state.title}
        </p>
      </>
    );
  }
}

export default ClassStatefulComponent;
