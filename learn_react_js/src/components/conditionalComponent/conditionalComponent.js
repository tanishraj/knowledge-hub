import React from "react";
import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";

const ConditionalComponent = () => {
  const [flag, setFlag] = React.useState(true);
  const clickHandler = () => {
    setFlag(!flag);
  };
  return (
    <>
      <h1>Conditional Component Rendering</h1>
      <p>
        In some cases you want to render different components depending on some
        state. JSX does not render 'false' or 'undefined', so you can use
        conditional short-circuiting to render a given part of your component
        only if a certain condition is true
      </p>

      <br />
      <hr />
      <h3>Example:</h3>
      <button onClick={clickHandler}>Click to toggle</button>

      {flag ? <FirstComponent /> : <SecondComponent />}
    </>
  );
};

export default ConditionalComponent;
