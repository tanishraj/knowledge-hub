import React from "react";

class ClassStateLessComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Stateless Component Using Class</h1>
        <p>
          If the behaviour is independent of its state then it can be a
          stateless component. You can use either a function or a class for
          creating stateless components. But unless you need to use a lifecycle
          hook in your components, you should go for function components. There
          are a lot of benefits if you decide to use function components here;
          they are easy to write, understand, and test, a little faster, and you
          can avoid the this keyword altogether.
        </p>
        <ul>
          <li>We can create an stateless component using Class Component.</li>
          <li>
            We can create an stateless component using Functional Component.
          </li>
        </ul>
      </>
    );
  }
}

export default ClassStateLessComponent;
