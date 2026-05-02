import React from "react";
import CallingHOC from "./callingComponent";

const NormalFuction = () => {
  return (
    <div className="normal-fuction">
      <h1>HOC (High Order Component)</h1>
      <p>
        A higher-order component is a function that takes a component and
        returns a new component.
      </p>
      <p>
        The goal of this pattern is to decompose the logic into simpler and
        smaller functions that can be reused.
      </p>
      <h3>High Order Function</h3>
      <p>
        A higher order function is a function that accepts another function as
        an argument. You would have already used the map function which falls
        under this category.
      </p>
      <hr />
      <CallingHOC />
    </div>
  );
};

export default NormalFuction;
