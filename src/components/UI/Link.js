import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Btn to={props.link} onClick={props.onClick}>
      {props.label}
    </Btn>
  );
};

export default Button;

const Btn = styled(Link)`
  min-width: 10rem;
  padding: 1rem;
  background-color: transparent;
  font-weight: bold;
  position: relative;
  font-size: 1.8rem;
  border: none;
  margin-left: 1rem;
  color: white;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid white;
  }
`;
