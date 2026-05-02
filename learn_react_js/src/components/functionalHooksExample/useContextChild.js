import React from "react";

const CountContext = React.createContext();

const UseContextChild = () => {
  const { count, decreaseCounter, increaseCounter } = React.useContext(
    CountContext
  );

  const componentStyle = {
    display: "flex"
  };

  const spanStyle = {
    color: "red",
    fontSize: "30px",
    fontWeight: 700,
    padding: "0 10px"
  };

  const buttonStyle = {
    fontSize: "30px",
    padding: "0 20px"
  };

  return (
    <>
      <div style={componentStyle}>
        <button style={buttonStyle} onClick={decreaseCounter}>
          -
        </button>
        <span style={spanStyle}>{count}</span>
        <button style={buttonStyle} onClick={increaseCounter}>
          +
        </button>
      </div>
    </>
  );
};

export default UseContextChild;
