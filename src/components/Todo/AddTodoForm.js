import React from "react";
import styled from "styled-components";
import Input from "../UI/Input4.5";
import Modal from "../UI/Modal";
import Button from "../UI/Button2";
import { XButton } from "../UI/XButton";

const AddTodoForm = (props) => {
  return (
    <Modal>
      <AddForm>
        <XButton onClick={props.onHideAddTodoForm}>X</XButton>
        <Title>Add Todo</Title>
        <Input label="Title" type="text" />
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
`;
