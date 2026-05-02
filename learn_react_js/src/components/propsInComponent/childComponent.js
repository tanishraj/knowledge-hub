import React from "react";

import "./style.scss";

const ChildComponent = (props) => {
  const sendDataToParent = () => {
    props.childButtonHandler(
      `New Value from Child ${Math.floor(Math.random() * 100)}`
    );
  };
  return (
    <div className="child-container">
      <h1>Child Component</h1>
      <button onClick={sendDataToParent}>
        Click me to send data to Parent
      </button>
      <p>
        Data coming from parent component is: <strong>{props.data}</strong>
      </p>
    </div>
  );
};

export default ChildComponent;
