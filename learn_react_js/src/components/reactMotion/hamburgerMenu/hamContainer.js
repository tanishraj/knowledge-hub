import React from "react";
import styled from "styled-components";
import Hamburger from "./hamburgerMenu";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const HamContainer = () => {
  return (
    <>
      <h1>Hamburger Menu Example</h1>
      <Wrapper>
        <Hamburger />
      </Wrapper>
    </>
  );
};

export default HamContainer;
