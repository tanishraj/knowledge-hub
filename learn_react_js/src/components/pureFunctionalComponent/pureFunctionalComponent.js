import React, { memo } from "react";

const PureFunctionalComponent = ({ data }) => {
  console.log("Rendering data:", data);

  return (
    <>
      <h3>Pure Functional Component</h3>
      <p>I am a pure functional component.</p>
      <p>
        <strong>
          memo() is a high order function that accepts a functional component as
          a parameter and returns a special component that handles the
          un-neccessary re-rendering.
        </strong>
      </p>
      <p>
        <strong>
          As we know that when ever the parent component will be rendered all
          its child will be re-rendered. Event though the props passed to those
          components have no change in their values.
        </strong>
      </p>

      <p>
        With React.memo(), you can now have memoized functional components that
        bail out of rendering on unnecessary updates using shallow comparison of
        props.
      </p>
      <p>
        <strong>Example:</strong> <em>{data}</em>
      </p>
    </>
  );
};

export default memo(PureFunctionalComponent);
