import React from "react";
import UseStateExample from "./useStateExample";
import UseEffectEveryRender from "./useEffectEveryRender";
import UseEffectStateChange from "./useEffectStateChange";
import UseEffectOnComponentMounted from "./useEffectOnComponentMounted";
import UseEffectAsPropsChange from "./useEffectOnPropsChange";
import UseReducerExample from "./useReducerExample";
import { UseContextExample } from "./useContextExample";
import UseCallbackExample from "./useCallbackExample";
import UseMemoExample from "./useMemoExample";

const FunctionalHooksExample = () => {
  const [randomNumber, setRandomNumber] = React.useState(0);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <>
      <h1>Functional Hook Example</h1>
      <p>
        A hook is a special function that lets you 'hook into' React features.
        For Example, 'useState' is a hook that lets you add React state to
        function components.
      </p>

      <h3>When would I use a hook?</h3>
      <p>
        If you write a functional component and realize that you need to add
        some state to it, previously you had to convert it to a class. Now you
        can use a hook inside the existing fucntional component.
      </p>

      <br />
      <hr />
      <UseStateExample />

      <br />
      <hr />
      <UseEffectEveryRender />

      <br />
      <hr />
      <UseEffectStateChange />

      <br />
      <hr />
      <UseEffectOnComponentMounted />

      <br />
      <hr />
      <UseEffectAsPropsChange randomNumber={randomNumber} />
      <button onClick={generateRandomNumber}>Click to Change props</button>

      <br />
      <hr />
      <UseReducerExample />

      <br />
      <hr />
      <UseContextExample />

      <br />
      <hr />
      <UseCallbackExample />

      <br />
      <hr />
      <UseMemoExample />
    </>
  );
};

export default FunctionalHooksExample;
