import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../store/auth-context";
import ArrowButton from "../UI/ArrowButton";

const Mainpage = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Main>
      {authCtx.isLoggedIn && <Arrow to="/list">ARROW</Arrow>}
      {!authCtx.isLoggedIn && <WelcomeText>THIS IS TODO APP</WelcomeText>}
    </Main>
  );
};

export default Mainpage;

const Main = styled.div`
  width: 100%;
  height: 75vh;
`;

const Arrow = styled(ArrowButton)`
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WelcomeText = styled.div`
  font-size: 3rem;
  width: 25rem;
  color: white;
  margin: 20rem auto;
`;
