import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import Todo from "../Todo/Todo";
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

  const DUMMY_DATA = [
    {
      id: "1",
      title: "Learn React",
      des: "Learn useState",
      status: true,
    },
    {
      id: "2",
      title: "Learn React 2",
      des: "Learn useState",
      status: false,
    },
    {
      id: "3",
      title: "Learn React 3",
      des: "Learn useState",
      status: false,
    },
    {
      id: "4",
      title: "Learn React 4",
      des: "Learn useState",
      status: false,
    },
  ];

  return (
    <Main>
      <NavBar
        onShowLogInForm={showLogInFormHandler}
        onShowSignUpForm={showSignUpFormHandler}
      />
      {isShowSignUpForm && <SignUp onHideSignUpForm={hideSignUpFormHandler} />}
      {isShowLoginForm && <SignIn onHideLoginForm={hideLogInFormHandler} />}
      <Todo data={DUMMY_DATA} />
    </Main>
  );
};

export default Mainpage;

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #222a42, #232a43);
`;
