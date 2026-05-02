import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [number] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const computedFunction = useMemo(
    (params) => {
      console.log("Some number is being updated.");
      return number + 20;
    },
    [number]
  );

  return (
    <>
      <h1>
        useMemo Hook: <span>prevents un-necessary re-rendering</span>
      </h1>
      <button onClick={increment}>Counter</button> [{count}]
      <br />
      <br />
      <div>{computedFunction}</div>
    </>
  );
};

export default UseMemoHook;
