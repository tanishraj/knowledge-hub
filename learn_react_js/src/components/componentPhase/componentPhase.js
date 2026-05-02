import React from "react";

const LifecyclePhase = () => {
  return (
    <>
      <h1>Different Phase of Component Lifecycle</h1>
      <p>
        There are 3 different phases of component lifecycle. which are given
        below...
      </p>

      <ul>
        <li>Mounting</li>
        <ol>
          <li>constructor</li>
          <li>getDerivedStateFromProps</li>
          <li>render</li>
          <li>componentDidMount</li>
        </ol>
        <li>Updating</li>
        <ol>
          <li>getDerivedStateFromProps</li>
          <li>shouldComponentUpdate</li>
          <li>getSnapshotBeforeUpdate</li>
          <li>componentDidUpdate</li>
        </ol>
        <li>Unmounting</li>
        <ol>
          <li>componentWillUnmount</li>
        </ol>
      </ul>
    </>
  );
};

export default LifecyclePhase;
