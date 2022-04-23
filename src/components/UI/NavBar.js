import React from "react";
import styled from "styled-components";
import Button from "./Button";

const NavBar = (props) => {
  return (
    <Navbar>
      <Title>TODO-APP</Title>
      <RightSide>
        <Button label="LOGIN" onClick={props.onShowLogInForm} />
        <Button label="SIGN UP" onClick={props.onShowSignUpForm} />
      </RightSide>
    </Navbar>
  );
};

export default NavBar;

const Title = styled.h2`
  color: white;
  margin-left: 2rem;
`;

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
