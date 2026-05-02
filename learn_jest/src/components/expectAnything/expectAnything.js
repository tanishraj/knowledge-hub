import React from "react";

const ExpectAnything = () => {
  return (
    <div>
      <h1>expect.anything()</h1>
      <p>
        expect.anything() matches anything but null or undefined. You can use it
        inside toEqual or toBeCalledWith instead of a literal value. For
        example, if you want to check that a mock function is called with a
        non-null argument:
      </p>
    </div>
  );
};

export default ExpectAnything;
