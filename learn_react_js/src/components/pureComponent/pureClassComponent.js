import React from "react";

class PureClassComponent extends React.PureComponent {
  render() {
    const { label, score = 0, total = Math.max(100, score) } = this.props;

    console.log("Pure component rendered");

    return (
      <div>
        <h3>Pure Component</h3>
        <strong>{label}:</strong>
        <span>{Math.round((score / total) * 100)}%</span>
      </div>
    );
  }
}

export default PureClassComponent;
