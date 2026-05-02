import React from "react";

import "./style.scss";

const childComponent = (props) => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleChildBbuttonClick = () => {
    let randomNumber = generateRandomNumber();
    let dataToBeSentToParent = "I am coming from Child";
    props.recieveDataFromChild({
      message: dataToBeSentToParent,
      data: randomNumber
    });
  };

  return (
    <div className="child-container">
      <h1>Child Component</h1>
      <button onClick={handleChildBbuttonClick}>
        Click Here to Pass Data to Parent
      </button>

      <p>
        Random number is being generated on parent component:
        <strong>{props.data}</strong>
      </p>
    </div>
  );
};

export default childComponent;
