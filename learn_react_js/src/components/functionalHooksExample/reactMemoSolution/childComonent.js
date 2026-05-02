import React from "react";

const ChildComponent = () => {
  console.log("re-rendering child component");

  return <></>;
};

export default React.memo(ChildComponent);
