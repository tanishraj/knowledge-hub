import React from "react";
import ProblemExample from "./problemExample";

const PropsInInitialState = () => {
  let [randomNumber, setRandomNumber] = React.useState(0);

  const handler = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };
  return (
    <>
      <h1>Props in initial state</h1>
      <p>
        If the props on the component are changed without the component being
        refreshed, the new prop value will never be displayed because the
        constructor function will never update the current state of the
        component. The initialization of state from props only runs when the
        component is first created.
      </p>

      <br />
      <hr />
      <button onClick={handler}>Click Me</button>
      <ProblemExample randomNumber={randomNumber} />
    </>
  );
};

export default PropsInInitialState;
