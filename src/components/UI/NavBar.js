import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../store/auth-context";
import Button from "./Link";
import Button2 from "./Button2";

const NavBar = (props) => {
  const user = localStorage.getItem("isLoggedIn");
  let username;
  if (!user) {
    username = "Lasao";
  } else {
    username = JSON.parse(user).user.name;
  }
  const authCtx = useContext(AuthContext);
  return (
    <Navbar>
      <Button link="/" label="TODO-APP" />
      <RightSide>
        {!authCtx.isLoggedIn && (
          <Button link="/login" label="LOGIN" onClick={props.onShowLogInForm} />
        )}
        {!authCtx.isLoggedIn && (
          <Button
            link="/signup"
            label="SIGN UP"
            onClick={props.onShowSignUpForm}
          />
        )}
        {authCtx.isLoggedIn && <WelcomeText>Hi {username} !</WelcomeText>}
        {authCtx.isLoggedIn && (
          <Button2 label="LOGOUT" onClick={authCtx.onLogout} />
        )}
      </RightSide>
    </Navbar>
  );
};

export default NavBar;

const Title = styled.h2`
  color: white;
  margin-left: 2rem;
  font-size: 2rem;
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
  display: flex;
`;

const WelcomeText = styled.h2`
  font-size: 1.8rem;
  color: white;
`;
