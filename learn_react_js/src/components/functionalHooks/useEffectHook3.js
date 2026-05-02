import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [name, setName] = useState("Archana");

  const changeName = () => {
    setName("Tanish");
  };

  useEffect(() => {
    console.log("componentDidMount will be called.");
    return () => {
      console.log("componentWillUnmount will be called.");
    };
  });

  return (
    <>
      <h1>
        useEffect Hook: <span>(componentDidMount + componentWillUnmount)</span>
      </h1>
      <button onClick={changeName}>Update Name</button>
      <p>{name}</p>
    </>
  );
};

export default UseEffectHook;
