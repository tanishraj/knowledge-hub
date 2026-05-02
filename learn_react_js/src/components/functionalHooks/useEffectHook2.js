import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [name, setName] = useState("Tanish");

  const changeName = () => {
    setName("I am busy.");
  };

  useEffect(() => {
    console.log("Name has been changed");
  }, [name]);

  return (
    <>
      <h1>
        useEffect Hook: <span>(componentDidMount + componentDidUpdate)</span>
      </h1>

      <button onClick={changeName}>Update Name</button>
      <p>{name}</p>
    </>
  );
};

export default UseEffectHook;
