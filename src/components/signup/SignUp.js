import React, { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button2";
import Toaster from "../UI/Toaster";
import { useNavigate } from "react-router-dom";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 5 && action.val.trim().length < 20,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 5 && state.value.trim().length < 20,
    };
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

const SignUp = (props) => {
  const repasswordReducer = (state, action) => {
    const minAge = 12;
    const maxAge = 99;
    if (action.type === "USER_INPUT") {
      return {
        value: action.val,
        isValid: action.val > minAge && action.val < maxAge,
      };
    }
    if (action.type === "INPUT_BLUR") {
      return {
        value: state.value,
        isValid: state.value > minAge && state.value < maxAge,
      };
    }
    return { value: "", isValid: false };
  };

  const [formIsValid, setFormIsValid] = useState(false);

  const [isShowNoti, setIsShowNoti] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });

  const [repasswordState, dispatchRepassword] = useReducer(repasswordReducer, {
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
  const nameChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  };

  const repasswordChangeHandler = (event) => {
    dispatchRepassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateNameHandler = () => {
    dispatchName({ type: "INPUT_BLUR" });
  };

  const validateRepasswordHandler = () => {
    dispatchRepassword({ type: "INPUT_BLUR" });
  };

  let navigator = useNavigate();
  const moveToLoginPageHandler = () => {
    const path = "/login";
    navigator(path);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      name: nameState.value,
      age: repasswordState.value,
      email: emailState.value,
      password: passwordState.value,
    };

    try {
      fetch("https://khoa-task-manager1.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          setIsShowNoti(true);
          setTimeout(moveToLoginPageHandler, 3000);
        }
      });
    } catch {
      console.log("error ocurrs");
    }
  };

  return (
    <FormSignUp onSubmit={submitHandler}>
      <Title>SIGN UP</Title>
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
          id="name"
          label="first & lastname"
          type="text"
          value={nameState.value}
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
          isValid={nameState.isValid}
        />
        <Input
          id="age"
          label="age"
          type="number"
          value={repasswordState.value}
          onChange={repasswordChangeHandler}
          onBlur={validateRepasswordHandler}
          isValid={repasswordState.isValid}
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
      <Button label="SIGN UP" />
      {isShowNoti && <Toaster>Succesfully</Toaster>}
    </FormSignUp>
  );
};

export default SignUp;

const FormSignUp = styled.form`
  width: 70rem;
  height: 50rem;
  padding: 7rem 10rem;
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
