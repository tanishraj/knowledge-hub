import React from "react";
import SetStateInConstructorExample from "./example";

const SetStateInConstructor = () => {
  return (
    <>
      <h1>Using setState() in constructor</h1>
      <p>
        When you use setState(), then apart from assigning to the object state
        React also re-renders the component and all its children. You would get
        error like this: 'Can only update a mounted or mounting component.' So
        we need to use this.state ti initialize variables inside constructor.
      </p>

      <br />
      <hr />

      <h3>Example:</h3>
      <SetStateInConstructorExample />
    </>
  );
};

export default SetStateInConstructor;
