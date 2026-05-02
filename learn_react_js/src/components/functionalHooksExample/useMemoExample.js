import React from "react";

const UseMemoExample = () => {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState([]);

  console.log("App rendered with count", count);

  const fetchData = () => {
    // Imagine here an API call which returns a random number
    return Math.random();
  };

  React.useEffect(() => {
    const data = fetchData();
    setData(data);
  }, []);

  const increaseCounterBy1 = () => {
    setCount(count + 1);
  };

  const runHeavyCalc = (data) => {
    if (!data) return;
    console.log("Computing heavy func with data", data);
    // Math.floor is not heavy, use your imagination again
    return Math.floor(data * 100);
  };

  const result = React.useMemo(() => runHeavyCalc(data), [data]);

  return (
    <>
      <h1>What is memoization?</h1>
      <p>
        Memoization is an optimization technique which passes a complex function
        to be memoized. In memoization, the result is remembered when the same
        parameters are passed-in subsequently.
      </p>

      <p>
        If we have a function compute 1+1, it will return 2. But if it uses
        memoization, the next time we run 1's through the gunction, it wont add
        them up; it will just remember the answer is 2 without executing the
        adding function.
      </p>

      <h2>useMemo:</h2>
      <p>
        useMemo() returns a memoized value, which helps avoiding expensive
        calculations on every render.
      </p>

      <br />
      <hr />
      <h3>Example:</h3>
      <p>Counter: {count}</p>
      <button onClick={increaseCounterBy1}>Increase by 1</button>

      <hr />
      <h3>Axios Data:</h3>
      {JSON.stringify(result)}
    </>
  );
};

export default UseMemoExample;
