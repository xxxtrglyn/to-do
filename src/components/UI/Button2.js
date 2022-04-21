import React from "react";
import styled from "styled-components";

const Button2 = (props) => {
  return <Btn>{props.label}</Btn>;
};

export default Button2;

const Btn = styled.button`
  min-width: 10rem;
  height: 4.5rem;
  background-color: transparent;
  font-weight: bold;
  position: relative;
  border: 2px solid white;
  margin-left: 1rem;
  color: white;
  cursor: pointer;
  &:hover {
    border: 2px solid #07e798;
  }
`;
