import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [title] = useState("useEffect Hook:");
  const [userList, setUserList] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("Calling useEffect Hook.");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []); // This will act like componentDidMount and will render only once

  return (
    <>
      <h1>{title}</h1>
      <p>
        If you’re familiar with React class lifecycle methods, you can think of
        useEffect Hook as componentDidMount, componentDidUpdate, and
        componentWillUnmount combined.
      </p>
      <ul>
        {userList.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectHook;
