import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  };

  render() {
    return (
      <>
        <h1>Class Based Component:</h1>
        <ul>
          <li>
            <strong>Name: </strong> {this.props.name}
          </li>
          <li>
            <strong>Age: </strong> {this.props.age}
          </li>
        </ul>
      </>
    );
  }
}

export default ClassComponent;
