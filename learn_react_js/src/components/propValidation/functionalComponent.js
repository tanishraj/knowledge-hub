import React from "react";
import PropTypes from "prop-types";

const FunctionalComponent = (props) => {
  return (
    <>
      <h1>Functional Component:</h1>
      <ul>
        <li>
          <strong>Name: </strong> {props.name}
        </li>
        <li>
          <strong>Age: </strong> {props.age}
        </li>
      </ul>
    </>
  );
};

FunctionalComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default FunctionalComponent;
