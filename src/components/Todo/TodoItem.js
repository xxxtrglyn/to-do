import React, { useState } from "react";
import styled from "styled-components";
import YBtn from "../UI/YellowButton";
import RBtn from "../UI/RedButton";
import EditTodoForm from "./EditTodoForm";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(props.status);

  const changeCheckHandler = () => {
    setIsChecked(!isChecked);
  };

  const [isShowEditTodoForm, setIsShowEditTodoForm] = useState(false);
  const showEditTodoFormHandler = () => {
    setIsShowEditTodoForm(true);
  };
  const hideEditTodoFormHandler = () => {
    setIsShowEditTodoForm(false);
  };

  return (
    <Item>
      <TickButton
        className={isChecked && "valid"}
        onClick={changeCheckHandler}
      />
      <Content>{props.title}</Content>
      <YBtn label="EDIT" onClick={showEditTodoFormHandler}></YBtn>
      <RBtn label="DEL"></RBtn>
      {isShowEditTodoForm && (
        <EditTodoForm
          title={props.title}
          onHideEditTodoForm={hideEditTodoFormHandler}
        />
      )}
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

  &.valid::after {
    content: "v";
    font-weight: bold;
    color: red;
    transform: translate(8px, 2px);
    position: absolute;
  }

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
