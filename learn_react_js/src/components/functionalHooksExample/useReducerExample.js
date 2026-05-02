import React from "react";

const UseReducerExample = () => {
  const initialState = {
    count: 0
  };

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      default:
        throw new Error();
    }
  };

  const [state, dispatch] = React.useReducer(counterReducer, initialState);

  const decreaseCounter = () => {
    dispatch({ type: "DECREMENT" });
  };

  const increaseCounter = () => {
    dispatch({ type: "INCREMENT" });
  };

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
      <h1>useReducer Example</h1>
      <p>
        useReducer is usually preferable to useState when you have complex state
        logic that involves multiple sub-values or when the next state depends
        on the previous one.
      </p>
      <p>
        useReducer also lets you optimize performance for component that
        triggers deep updates becuase you can pass dispatch down instead of
        callbacks.
      </p>

      <ul>
        <li>Next state depends on previous state</li>
        <li>Complex state logic</li>
        <li>Easy to test</li>
      </ul>

      <br />
      <hr />
      <h3>Example: </h3>
      <div style={componentStyle}>
        <button style={buttonStyle} onClick={decreaseCounter}>
          -
        </button>
        <span style={spanStyle}>{state.count}</span>
        <button style={buttonStyle} onClick={increaseCounter}>
          +
        </button>
      </div>
    </>
  );
};

export default UseReducerExample;
