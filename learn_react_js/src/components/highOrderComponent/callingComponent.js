import React from "react";
import MyHoc from "./highOrderComponent";

const CallingHOC = (props) => {
  return (
    <div>
      <h1>Calling HOC</h1>
      <p>We will be able to access the data from MYHOC: {props.bonus}</p>
      <button onClick={props.getCompanyName}>Get HOC Method</button>
    </div>
  );
};

export default MyHoc(CallingHOC);
