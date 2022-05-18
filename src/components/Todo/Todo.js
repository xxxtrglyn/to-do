import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button2 from "../UI/Button2";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

const Todo = () => {
  const [isUpdated, setisUpdated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const item = JSON.parse(localStorage.getItem("isLoggedIn"));
  const bearerToken = "Bearer " + item.token;
  const [isShowAddTodoForm, setIsShowAddTodoForm] = useState(false);
  const showAddTodoFormHandler = () => {
    setIsShowAddTodoForm(true);
  };
  const hideAddTodoFormHandler = () => {
    setIsShowAddTodoForm(false);
  };

  const updateHandler = () => {
    setisUpdated(!isUpdated);
  };

  useEffect(() => {
    console.log("Run again");
    fetch("https://khoa-task-manager1.herokuapp.com/tasks?limit=99&skip=1", {
      method: "GET",
      headers: {
        Authorization: bearerToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const transformedData = res.map((item) => {
          return {
            id: item._id,
            title: item.description,
            status: item.completed,
          };
        });
        setTasks(transformedData);
      });
  }, [isUpdated]);

  return (
    <TodoForm>
      <Title>TODO-LIST</Title>
      <TodoList>
        {tasks.length === 0 && <NoTask>There's no task at this time</NoTask>}
        {tasks.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
            token={bearerToken}
            onUpdate={updateHandler}
          />
        ))}
      </TodoList>
      <Wrapper>
        <Button2 label="NEW" onClick={showAddTodoFormHandler} />
      </Wrapper>
      {isShowAddTodoForm && (
        <AddTodoForm
          onUpdate={updateHandler}
          onHideAddTodoForm={hideAddTodoFormHandler}
          token={bearerToken}
        />
      )}
    </TodoForm>
  );
};

export default Todo;

// const XButton = styled.div`
//   color: white;
//   font-size: 2rem;
//   width: 3rem;
//   height: 3rem;
//   border: 2px solid white;
//   text-align: center;
//   position: absolute;
//   top: 0;
//   right: 0;
//   font-weight: bold;
//   cursor: pointer;
//   &:hover {
//     border: 2px solid red;
//     color: red;
//   }
// `;

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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0;
  height: 70%;
  gap: 2rem;
  margin-bottom: 1rem;
  overflow-y: scroll;
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

const NoTask = styled.div`
  font-size: 1.8rem;
  color: white;
  margin: auto 0;
`;
