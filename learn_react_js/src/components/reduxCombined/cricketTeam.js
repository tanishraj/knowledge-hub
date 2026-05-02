import React from "react";
import IndiaTeam from "./indiaTeam";
import AustraliaTeam from "./australiaTeam";

import "./cricketTeam.scss";

const CricketTeam = (props) => {
  return (
    <>
      <h1>Redux Example with combinereducers</h1>
      <IndiaTeam />
      <br />
      <hr />
      <AustraliaTeam />
    </>
  );
};

export default CricketTeam;
