import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <InputWrapper>
      <Ip
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.isValid === false ? "inValid" : ""}
      />
      <Label htmlFor={props.id}>{props.label}</Label>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
  margin: 1rem 3rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: white;
  margin-top: 0.7rem;
  cursor: pointer;
`;

const Ip = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.6rem;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: white;
  &:focus {
    border-bottom: 2px solid #07e798;
  }
  &:focus ~ ${Label} {
    color: #07e798;
  }
  &.inValid {
    border-bottom: 2px solid red;
  }
  &.inValid ~ ${Label} {
    color: red;
  }
`;
