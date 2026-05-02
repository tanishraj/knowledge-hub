import React from "react";
import ChildComponent from "./childComonent";

const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  console.log("re-rendering parent component");

  const reset = React.useCallback(() => {
    setCount(0);
  }, [setCount]);

  return (
    <>
      <h1>Solution using React.memo Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <ChildComponent reset={reset} />
    </>
  );
};

export default ParentComponent;
