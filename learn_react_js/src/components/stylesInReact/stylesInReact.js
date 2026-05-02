import React from "react";
import StylesInReactExample from "./example";

const StylesInReact = () => {
  return (
    <>
      <h1>Styles in React</h1>
      <p>
        The 'style' attribute accepts a Javascript object wuth camelCased
        properties rather than a CSS string. Sthis is consistent with th DOM
        style Javascript property, is more efficient and prevents XSS security
        holes.
      </p>

      <br />
      <hr />
      <h3>Example: </h3>
      <StylesInReactExample />
    </>
  );
};

export default StylesInReact;
