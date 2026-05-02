import React from "react";

const ChildComponent = ({ reset }) => {
  console.log("re-rendering child component");

  return (
    <>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default React.memo(ChildComponent);
