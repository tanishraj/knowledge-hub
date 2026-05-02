import React from "react";
import { connect } from "react-redux";

const ReduxCounterExample = (props) => {
  const decreaseCounter = () => {
    props.decreaseCounter();
  };

  const increaseCounter = () => {
    props.increaseCounter();
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
      <h1>Redux Counter Example:</h1>
      <div style={componentStyle}>
        <button style={buttonStyle} onClick={decreaseCounter}>
          -
        </button>
        <span style={spanStyle}>{props.count}</span>
        <button style={buttonStyle} onClick={increaseCounter}>
          +
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseCounter: () => {
      dispatch({ type: "DECREMENT" });
    },
    increaseCounter: () => {
      dispatch({ type: "INCREMENT" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCounterExample);
