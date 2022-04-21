import React from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button2";

const SignUp = () => {
  return (
    <FormSignUp>
      <Title>SIGN UP</Title>
      <InputContainer>
        <Input id="name" label="first & lastname" />
        <Input id="email" label="email" />
        <Input id="password" label="password" />
        <Input id="confirmpsk" label="confirm password" />
      </InputContainer>
      <Button label="SIGN UP" />
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
