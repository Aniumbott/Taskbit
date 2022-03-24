import { Text } from "@mantine/core";
import React from "react";
import TodoItem from "./TodoItem";

function Done(props: any) {
  const todoList = props.todoList;
  const setTodoList = props.setTodoList;
  return (
    <div className="done-container">
      <Text align="center" size="xl">
        Done
      </Text>
      <hr />

      {/* <TodoItem todoList={todoList} setTodoList={setTodoList} id={0} /> */}
      <style>
        {`
                .done-container {
                    width: 40%;
                    min-width: 20rem;
                    margin: 1rem;
                }
              `}
      </style>
    </div>
  );
}

export default Done;
