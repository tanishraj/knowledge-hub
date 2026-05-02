import React from "react";
import Example from "./example";

const LoopInsideJsx = () => {
  const listItems = [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Sachin" },
    { id: 3, name: "Archana" },
    { id: 4, name: "Ajay" },
    { id: 5, name: "Nirupama" }
  ];
  return (
    <>
      <h1>Loop inside JSX</h1>
      <p>
        You can simply use Array.prototype.map with ES6 arrow function syntax.
      </p>

      <br />
      <hr />
      <h3>Example:</h3>
      <Example list={listItems} />
    </>
  );
};

export default LoopInsideJsx;
