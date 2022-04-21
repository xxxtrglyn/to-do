import React from "react";
import styled from "styled-components";
import Button from "./Button";

const NavBar = () => {
  return (
    <Navbar>
      <h2>TODO-APP</h2>
      <RightSide>
        <Button label="LOGIN" />
        <Button label="SIGN UP" />
      </RightSide>
    </Navbar>
  );
};

export default NavBar;

const Navbar = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightSide = styled.div`
  margin-right: 4rem;
`;
