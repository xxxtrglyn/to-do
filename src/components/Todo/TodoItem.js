import React, { useState } from "react";
import styled from "styled-components";
import YBtn from "../UI/YellowButton";
import RBtn from "../UI/RedButton";
import EditTodoForm from "./EditTodoForm";
import Toaster from "../UI/Toaster";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(props.status);
  const [isShowNoti, setIsShowNoti] = useState(false);

  const changeCheckHandler = () => {
    fetch(`https://khoa-task-manager1.herokuapp.com/tasks/${props.id}`, {
      method: "PATCH",
      headers: {
        Authorization: props.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !isChecked }),
    });
    setIsChecked(!isChecked);
  };

  const [isShowEditTodoForm, setIsShowEditTodoForm] = useState(false);
  const showEditTodoFormHandler = () => {
    setIsShowEditTodoForm(true);
  };
  const hideEditTodoFormHandler = () => {
    setIsShowEditTodoForm(false);
  };

  const deleteTaskHandler = async () => {
    const res = await fetch(
      `https://khoa-task-manager1.herokuapp.com/tasks/${props.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: props.token,
        },
      }
    );
    const stt = res.ok;
    if (stt) {
      console.log("Succesfully delete");
      setIsShowNoti(true);
      props.onUpdate();
    }
  };

  return (
    <Item>
      <TickButton
        className={isChecked && "valid"}
        onClick={changeCheckHandler}
      />
      <Content>{props.title}</Content>
      <YBtn label="EDIT" onClick={showEditTodoFormHandler}></YBtn>
      <RBtn onClick={deleteTaskHandler} label="DEL"></RBtn>
      {isShowEditTodoForm && (
        <EditTodoForm
          id={props.id}
          title={props.title}
          onHideEditTodoForm={hideEditTodoFormHandler}
          token={props.token}
          onUpdate={props.onUpdate}
        />
      )}
      {isShowNoti && <Toaster>Succesfully</Toaster>}
    </Item>
  );
};

export default TodoItem;

const Content = styled.span`
  width: 65%;
  border-bottom: 2px solid white;
  margin-left: 5rem;
  font-size: 1.8rem;
  padding: 6px 0;
`;

const Item = styled.div`
  width: 100%;
  height: 3rem;
  color: white;
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
  font-size: 1.8rem;
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
