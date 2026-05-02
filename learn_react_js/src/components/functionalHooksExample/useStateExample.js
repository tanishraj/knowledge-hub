import React from "react";

const useStateExample = () => {
  const [value, setValue] = React.useState(0);

  const generateValue = () => {
    setValue(Math.floor(Math.random() * 100));
  };

  return (
    <>
      <h1>useState Example</h1>
      <p>Value is {value}</p>
      <button onClick={generateValue}>Generate New Value</button>
    </>
  );
};

export default useStateExample;
