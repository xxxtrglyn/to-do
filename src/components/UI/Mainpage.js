import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import Todo from "../Todo/Todo";
import Modal from "./Modal";
import NavBar from "./NavBar";

const Mainpage = () => {
  const [isShowLoginForm, setIsShowLogInForm] = useState(false);
  const [isShowSignUpForm, setIsShowSignUpForm] = useState(false);
  const showLogInFormHandler = () => {
    setIsShowSignUpForm(false);
    setIsShowLogInForm(true);
  };
  const hideLogInFormHandler = () => {
    setIsShowLogInForm(false);
  };

  const showSignUpFormHandler = () => {
    setIsShowLogInForm(false);
    setIsShowSignUpForm(true);
  };
  const hideSignUpFormHandler = () => {
    setIsShowSignUpForm(false);
  };
  return (
    <Main>
      <NavBar
        onShowLogInForm={showLogInFormHandler}
        onShowSignUpForm={showSignUpFormHandler}
      />
      {isShowSignUpForm && <SignUp onHideSignUpForm={hideSignUpFormHandler} />}
      {isShowLoginForm && <SignIn onHideLoginForm={hideLogInFormHandler} />}
      <Todo />
      <Modal />
    </Main>
  );
};

export default Mainpage;

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #222a42, #232a43);
`;
