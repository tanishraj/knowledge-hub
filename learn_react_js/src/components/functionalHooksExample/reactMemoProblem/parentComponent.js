import React from "react";
import ChildComponent from "./childComonent";

const ParentComponent = () => {
  const [count, setCount] = React.useState(0);
  console.log("re-rendering parent component");
  return (
    <>
      <h1>Problem with React.memo Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <ChildComponent />
    </>
  );
};

export default ParentComponent;
