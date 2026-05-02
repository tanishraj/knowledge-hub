import React from "react";

const CountContext = React.createContext();

export const UseContextChild = () => {
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

export const UseContextExample = () => {
  const [count, setCount] = React.useState(0);

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  const increaseCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>useContext Example</h1>
      <p>
        Context in React makes it possible to pass props down from a parent
        component to a child component. This saves you from hassle of prop
        drilling. However, you could only make use of context in class
        components, but now you can make use of context in functional components
        using useContext() hook method.
      </p>

      <br />
      <hr />
      <h3>Example:</h3>
      <CountContext.Provider
        value={{ count, decreaseCounter, increaseCounter }}
      >
        <UseContextChild />
      </CountContext.Provider>
    </>
  );
};
