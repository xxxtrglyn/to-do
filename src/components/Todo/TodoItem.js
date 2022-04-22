import React from "react";
import styled from "styled-components";
import YBtn from "../UI/YellowButton";
import RBtn from "../UI/RedButton";

const TodoItem = () => {
  return (
    <Item>
      <TickButton />
      <Content></Content>
      <YBtn label="EDIT"></YBtn>
      <RBtn label="DEL"></RBtn>
    </Item>
  );
};

export default TodoItem;

const Content = styled.span`
  width: 65%;
  border-bottom: 2px solid white;
  margin-left: 5rem;
`;

const Item = styled.div`
  width: 100%;
  height: 3rem;
  color: white;
  font-size: 1.6rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TickButton = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  position: absolute;
  top: 0;
  left: 3rem;
  cursor: pointer;

  &:hover {
    &::after {
      content: "v";
      font-weight: bold;
      color: #07e798;
      transform: translate(8px, 2px);
      position: absolute;
    }
  }
`;
