import React from "react";

const FunctionalComponent = (props) => {
  const { label, score = 0, total = Math.max(100, score) } = props;
  console.log("Functional component rendered.");

  return (
    <>
      <h3>Functional Component</h3>
      <p>I am recieving props from container component.</p>

      <strong>{label}:</strong>
      <span>{Math.round((score / total) * 100)}%</span>
    </>
  );
};

export default FunctionalComponent;
