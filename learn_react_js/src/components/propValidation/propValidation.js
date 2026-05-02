import React from "react";
import ClassComponent from "./classComponent";
import FunctionalComponent from "./functionalComponent";

const PropValidation = () => {
  return (
    <>
      <h1>Prop Validation</h1>
      <p>
        When the application is running in development mode, React will
        automatically check all props that we set on components to make sure
        they have correct type. if the type is incorrect, React will generate
        warning messages in the console. Its disabled in production mode due to
        performance impact.
      </p>

      <p>The set of predefined prop types are here....</p>

      <ul>
        <li>ProTypes.number</li>
        <li>ProTypes.string</li>
        <li>ProTypes.array</li>
        <li>ProTypes.object</li>
        <li>ProTypes.func</li>
        <li>ProTypes.node</li>
        <li>ProTypes.element</li>
        <li>ProTypes.bool</li>
        <li>ProTypes.symbol</li>
        <li>ProTypes.any</li>
      </ul>

      <br />
      <hr />
      <h3>Example:</h3>
      <ClassComponent name={"Tanish"} age={25} />
      <FunctionalComponent name={"Sachin"} age={20} />
    </>
  );
};

export default PropValidation;
