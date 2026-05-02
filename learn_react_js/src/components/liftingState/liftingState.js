import React from "react";
import SearchableList from "./searchableList";

const LiftingState = () => {
  const list = [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Archana" },
    { id: 3, name: "Sachin" },
    { id: 4, name: "Nirupama" },
    { id: 5, name: "Sujeet" },
    { id: 6, name: "Prince" }
  ];
  return (
    <>
      <h1>Lifting State Up & Down</h1>
      <p>
        When different component needs to share the same changing data then it
        is recommended to lift the state up to their closest common ancesstors.
        That means if two child components are sharing the same data from its
        parent then move the state to parent instead of maintaining the local
        state in both child component.
      </p>
      <br />
      <hr />
      <h3>Example:</h3>
      <div class="parent-container">
        <SearchableList list={list} />
      </div>
    </>
  );
};

export default LiftingState;
