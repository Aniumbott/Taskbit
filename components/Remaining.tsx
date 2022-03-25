import React from "react";
import { Text } from "@mantine/core";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { useEffect } from "react";

function Remaining(props: any) {
  const todoList = props.todoList;
  const setTodoList = props.setTodoList;

  return (
    <div className="remaining-container">
      <Text align="center" size="xl">
        Remaining
      </Text>
      <hr />
      <div className="todo-list">
        {todoList.map((todo: any, id: number) => {
          console.log(todo, id);
          if (todo.status === "remaining") {
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
                .remaining-container {
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

export default Remaining;
