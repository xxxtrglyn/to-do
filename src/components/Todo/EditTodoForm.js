import React, { useState } from "react";
import styled from "styled-components";
import Input from "../UI/Input4.5";
import Modal from "../UI/Modal";
import Button from "../UI/Button2";
import { XButton } from "../UI/XButton";

const EditTodoForm = (props) => {
  const [title, setTitle] = useState(props.title);
  const changeHandler = (event) => {
    setTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (title.trim().length > 0) {
      fetch(`https://khoa-task-manager1.herokuapp.com/tasks/${props.id}`, {
        method: "PATCH",
        headers: {
          Authorization: props.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: title }),
      })
        .then((res) => {
          if (res.ok) {
            props.onHideEditTodoForm();
            props.onUpdate();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Modal>
      <EditForm onSubmit={submitHandler}>
        <XButton onClick={props.onHideEditTodoForm}>X</XButton>
        <Title>Edit Todo</Title>
        <Input
          label="Title"
          type="text"
          value={title}
          onChange={changeHandler}
        />
        <Input label="Description" type="text" value={props.description} />
        <Button label="UPDATE" />
      </EditForm>
    </Modal>
  );
};

export default EditTodoForm;

const Title = styled.h2`
  height: 2rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const EditForm = styled.form`
  width: 100%;
  height: 22rem;
  & button {
    left: 50%;
    transform: translateX(-50%);
  }
`;
