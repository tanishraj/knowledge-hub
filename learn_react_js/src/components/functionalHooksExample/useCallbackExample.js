import React from "react";
import ParentComponentProblem from "./reactMemoProblem/parentComponent";
import ParentComponentSolution from "./reactMemoSolution/parentComponent";
import ParentComponentUseCallback from "./useCallbackExample/parentComponent";

const UseCallbackExample = () => {
  return (
    <>
      <h1>useCallback Example:</h1>
      <p>Lets start the story with 2 components...</p>
      <ul>
        <li>Parent</li>
        <li>Child</li>
      </ul>

      <p>
        Parent component has a button that increments the count state in the
        same component while Child component will have nothing to do with it.
      </p>

      <p>
        Note the console logs as you click re-render. both child and parent will
        re-render with logs.
      </p>

      <ul>
        <li>re-render parent component</li>
        <li>re-render child component</li>
      </ul>

      <p>
        Even though child component has nothing to do with the state at all.
      </p>
      <p>
        Now, we have to prevent the child component from re-rendering. keeping
        the functional component we can use React.memo to achieve this.
      </p>

      <br />
      <hr />
      <ParentComponentProblem />

      <br />
      <hr />
      <p>
        With this we solved the problem of un-neccessary rendering for child
        component
      </p>
      <ParentComponentSolution />

      <br />
      <hr />
      <p>
        Now you can click on the reset button to reset the count to 0. But you
        will notice that the memo magic that we applied earlier is not working
        anymore. The logs suggest that both child and parent are being
        re-rendered.
      </p>

      <p>Why is this happening?</p>

      <p>
        As we already know that memo depends on the referential equality
        prevProps and currentProps to work. But the reset() function is being
        created on ever render of Parent and hence prevProps and props is not
        the same anymore.
      </p>

      <p>
        Now, to apply the memo magic again, we need to make sure that reset() is
        not un-neccessarily recreated on every render of Parent. This is when
        useCallback can be useful.
      </p>
      <ParentComponentUseCallback />
    </>
  );
};

export default UseCallbackExample;
