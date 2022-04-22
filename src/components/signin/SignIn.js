import React, { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button2";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const SignIn = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Sign Up sucessfully");
  };

  return (
    <FormSignUp onSubmit={submitHandler}>
      <XButton onClick={props.onHideLoginForm}>X</XButton>
      <Title>LOGIN</Title>
      <InputContainer>
        <Input
          id="email"
          label="email"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
        />
        <Input
          id="password"
          label="password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
        />
      </InputContainer>
      <Button label="LOGIN" />
    </FormSignUp>
  );
};

export default SignIn;

const XButton = styled.div`
  color: white;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    border: 2px solid red;
    color: red;
  }
`;

const FormSignUp = styled.form`
  width: 70rem;
  height: 50rem;
  padding: 0 10rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid white;
  position: relative;
`;

const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;
