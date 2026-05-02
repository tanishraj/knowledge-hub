import React from "react";

const StylesInReactExample = () => {
  const h1Style = {
    color: "blue",
    background: "grey"
  };

  return (
    <>
      <h1 style={h1Style}>I am the heading of this example</h1>
      <p>I am the detailed paragraph for this example.</p>
    </>
  );
};

export default StylesInReactExample;
