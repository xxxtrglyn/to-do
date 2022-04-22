import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <Btn onClick={props.onClick}>{props.label}</Btn>;
};

export default Button;

const Btn = styled.button`
  height: 4rem;
  background-color: transparent;
  font-weight: bold;
  position: relative;
  border: none;
  margin-left: 1rem;
  color: white;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid white;
  }
`;
