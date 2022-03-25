import { Text } from "@mantine/core";
import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";

function Done(props: any) {
  const todoList = props.todoList;
  const setTodoList = props.setTodoList;

  return (
    <div className="done-container">
      <Text align="center" size="xl">
        Done
      </Text>
      <hr />
      <div className="todo-list">
        {todoList.map((todo: any, id: number) => {
          console.log(todo, id);
          if (todo.status === "done") {
            return (
              // <div className=""></div>
              <TodoItem id={id} todoList={todoList} setTodoList={setTodoList} />
            );
          }
          id += 1;
        })}
      </div>
      <style>
        {`
                .done-container {
                    width: 40%;
                    min-width: 20rem;
                    margin: 1rem;
                }
                .todo-list{
                  position: relative;
                  padding: 0.5rem 0;
                  max-width: 100%;
                  margin: 1rem 0rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
              `}
      </style>
    </div>
  );
}

export default Done;
