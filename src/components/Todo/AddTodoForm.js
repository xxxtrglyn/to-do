import React, { useState } from "react";
import styled from "styled-components";
import Input from "../UI/Input4.5";
import Modal from "../UI/Modal";
import Button from "../UI/Button2";
import { XButton } from "../UI/XButton";
import Toaster from "../UI/Toaster";

const AddTodoForm = (props) => {
  const [title, setTitle] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const newTask = { description: title, completed: false };
    fetch("https://khoa-task-manager1.herokuapp.com/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        Authorization: props.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        props.onUpdate();
        props.onHideAddTodoForm();
      });
  };
  const changeHandler = (event) => {
    setTitle(event.target.value);
  };
  return (
    <Modal>
      <AddForm onSubmit={submitHandler}>
        <XButton onClick={props.onHideAddTodoForm}>X</XButton>
        <Title>Add Todo</Title>
        <Input
          label="Title"
          type="text"
          value={title}
          onChange={changeHandler}
        />
        <Input label="Description" type="text" />
        <Button label="ADD" />
      </AddForm>
    </Modal>
  );
};

export default AddTodoForm;

const Title = styled.h2`
  height: 2rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const AddForm = styled.form`
  width: 100%;
  height: 22rem;
  & button {
    left: 50%;
    transform: translateX(-50%);
  }

  & input {
    font-size: 1.8rem;
  }
`;
