import React from "react";
import styled from "styled-components";
import Input from "../UI/Input4.5";
import Modal from "../UI/Modal";
import Button from "../UI/Button2";
import { XButton } from "../UI/XButton";

const EditTodoForm = (props) => {
  return (
    <Modal>
      <EditForm>
        <XButton onClick={props.onHideEditTodoForm}>X</XButton>
        <Title>Edit Todo</Title>
        <Input label="Title" type="text" value={props.title} />
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
