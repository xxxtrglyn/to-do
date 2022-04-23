import React, { useState } from "react";
import styled from "styled-components";
import Button2 from "../UI/Button2";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

const Todo = (props) => {
  const [isShowAddTodoForm, setIsShowAddTodoForm] = useState(false);
  const showAddTodoFormHandler = () => {
    setIsShowAddTodoForm(true);
  };
  const hideAddTodoFormHandler = () => {
    setIsShowAddTodoForm(false);
  };

  return (
    <TodoForm>
      <XButton>X</XButton>
      <Title>TODO-LIST</Title>
      <TodoList>
        {props.data.map((item) => (
          <TodoItem key={item.id} title={item.title} status={item.status} />
        ))}
      </TodoList>
      <Wrapper>
        <Button2 label="ADD TODO" onClick={showAddTodoFormHandler} />
      </Wrapper>
      {isShowAddTodoForm && (
        <AddTodoForm onHideAddTodoForm={hideAddTodoFormHandler} />
      )}
    </TodoForm>
  );
};

export default Todo;

const XButton = styled.div`
  color: white;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    border: 2px solid red;
    color: red;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 4rem 0;
  height: 3rem;
`;

const TodoForm = styled.div`
  width: 70rem;
  height: 50rem;
  margin: 0 auto;
  border: 2px solid white;
  position: relative;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  height: 70%;
  overflow-y: scroll;
  gap: 3rem;
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;
