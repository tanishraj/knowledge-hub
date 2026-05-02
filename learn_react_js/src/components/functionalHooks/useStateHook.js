import React, { useState } from "react";

const UseStateHook = () => {
  const [title, setTitle] = useState("Default Title");

  const changeTitle = () => {
    setTitle("Functional Component State Mgmt");
  };
  return (
    <div>
      <h1>useState Hook:</h1>
      <p>
        Title is: <strong>{title}</strong>
      </p>
      <button onClick={changeTitle}>Click me to update Title</button>
    </div>
  );
};

export default UseStateHook;
