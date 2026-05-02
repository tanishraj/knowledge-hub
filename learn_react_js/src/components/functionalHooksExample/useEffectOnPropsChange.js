import React, { useEffect } from "react";

const UseEffectAsPropsChange = ({ randomNumber }) => {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    console.log("Rendered.");
  }, [randomNumber]);

  const generateValue = () => {
    setValue(Math.floor(Math.random() * 100));
  };

  return (
    <>
      <h1>useEffect as Props Change</h1>
      <button onClick={generateValue}>Generate New Value 1</button>
      <p>Value is: {value}</p>
    </>
  );
};

export default UseEffectAsPropsChange;
