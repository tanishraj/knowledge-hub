import React from "react";
import ErrorBoundary from "./errorBoundariesExample";
import BuggyCounter from "./buggyCounter";

const ErrorBoundaries = () => {
  return (
    <>
      <h1>Error Boundaries</h1>
      <p>
        Error Boundaries are components that cathc Javascript error anywhere in
        their child component tree, log those errors, and siplay a fallback UI
        instead of the component tree that crashed.
      </p>

      <p>
        <strong>Note: </strong> A class component becomes an error boundary if
        it defines a new lifecycle method called componentDidCatch(error, info)
        or static getDerivedStateFromError()
      </p>

      <br />
      <hr />
      <h3>Example:</h3>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br />
          <br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a
          JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </>
  );
};

export default ErrorBoundaries;
