import React from "react";

const ExpectExtend = () => {
  return (
    <div>
      <h1>What is a matcher?</h1>
      <p>
        A matcher (or an assertion) is a function that is used to check for a
        specific condition. Most often, it compares two values.
      </p>

      <h1>expect.extend(matchers)</h1>
      <p>
        You can use expect.extend to add your own matchers to Jest. For example,
        let's say that you're testing a number utility library and you're
        frequently asserting that numbers appear within particular ranges of
        other numbers. You could abstract that into a toBeWithinRange matcher:
      </p>

      <hr />

      <h1>Async Matchers</h1>
      <p>
        expect.extend also supports async matchers. Async matchers return a
        Promise so you will need to await the returned value. Let's use an
        example matcher to illustrate the usage of them. We are going to
        implement a matcher called toBeDivisibleByExternalValue, where the
        divisible number is going to be pulled from an external source.
      </p>

      <hr />

      <h1>Custom Matchers API</h1>
      <p>
        Matchers should return an object (or a Promise of an object) with two
        keys. pass indicates whether there was a match or not, and message
        provides a function with no arguments that returns an error message in
        case of failure. Thus, when pass is false, message should return the
        error message for when expect(x).yourMatcher() fails. And when pass is
        true, message should return the error message for when
        expect(x).not.yourMatcher() fails.
      </p>

      <p>
        Matchers are called with the argument passed to expect(x) followed by
        the arguments passed to .yourMatcher(y, z):
      </p>

      <p>
        These helper functions and properties can be found on this inside a
        custom matcher:
      </p>

      <p>
        <strong>this.isNot:</strong> A boolean to let you know this matcher was
        called with the negated .not modifier allowing you to display a clear
        and correct matcher hint (see example code).
      </p>

      <p>
        <strong>this.promise:</strong> A string allowing you to display a clear
        and correct matcher hint:
        <ul>
          <li>
            'rejects' if matcher was called with the promise .rejects modifier
          </li>
          <li>
            'resolves' if matcher was called with the promise .resolves modifier
          </li>
          <li>'' if matcher was not called with a promise modifier</li>
        </ul>
      </p>
    </div>
  );
};

export default ExpectExtend;
