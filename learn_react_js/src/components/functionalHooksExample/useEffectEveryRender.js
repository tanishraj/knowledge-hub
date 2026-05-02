import React, { useEffect } from "react";

const UseEffectEveryRender = () => {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    console.log("Rendered.");
  });

  const generateValue = () => {
    setValue(Math.floor(Math.random() * 100));
  };

  return (
    <>
      <h1>useEffect Example as every render</h1>
      <button onClick={generateValue}>Generate New Value</button>
      <p>Value is: {value}</p>
    </>
  );
};

export default UseEffectEveryRender;
