import React from "react";
import styled from "styled-components";
import SignUp from "../signup/SignUp";
import NavBar from "./NavBar";

const Mainpage = () => {
  return (
    <Main>
      <NavBar />
      <SignUp />
    </Main>
  );
};

export default Mainpage;

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #222a42, #232a43);
`;
