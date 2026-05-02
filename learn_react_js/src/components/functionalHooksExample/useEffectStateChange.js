import React, { useEffect } from "react";

const UseEffectEveryRender = () => {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  useEffect(() => {
    console.log("Rendered.");
  }, [value1]);

  const generateValue1 = () => {
    setValue1(Math.floor(Math.random() * 100));
  };

  const generateValue2 = () => {
    setValue2(Math.floor(Math.random() * 100));
  };

  return (
    <>
      <h1>useEffect Example as state change</h1>
      <button onClick={generateValue1}>Generate New Value 1</button>
      <p>Value 1 is: {value1}</p>
      <button onClick={generateValue2}>Generate New Value 2</button>
      <p>Value 2 is: {value2}</p>
    </>
  );
};

export default UseEffectEveryRender;
