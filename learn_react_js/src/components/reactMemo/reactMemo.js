import React, { memo } from "react";

const PureFunctionalComponent = (props) => {
  console.log("I am the data:", props.data);

  return (
    <>
      <h3>Pure Fucntional Component (React.memo())</h3>
      <p>
        With React.memo(), you can now have memoized functional components that
        bail out of rendering on unnecessary updates using shallow comparison of
        props.
      </p>

      <p>
        Using the new React.memo() API, the previous functional component can be
        wrapped
      </p>

      <h3>Custom bailout condition</h3>
      <p>
        The React.memo() API can take a second argument, which is the
        arePropsEqual() function.
      </p>

      <p>
        The default behavior of React.memo() is to shallowly compare the
        component props. However, with the arePropsEqual() function, you can
        customize the bailout condition for component updates.
      </p>

      <p>
        he arePropsEqual() function is defined with two parameters: prevProps
        and nextProps.
      </p>

      <p>
        The arePropsEqual() function returns true when the props are compared to
        be equal (thereby preventing the component from re-rendering) and
        returns false when the props are not equal.
      </p>

      <p>
        The arePropsEqual() function acts much like the shouldComponentUpdate()
        lifecycle method in class components, but in the reverse manner.
      </p>

      <p>
        <strong>Example:</strong> <em>{props.data}</em>
      </p>
    </>
  );
};

function isCurrentPropsGreater(prevProps, nextProps) {
  if (nextProps.data >= prevProps.data) {
    return true;
  }
  return false;
}

export default memo(PureFunctionalComponent, isCurrentPropsGreater);
