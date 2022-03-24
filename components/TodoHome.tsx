import React from "react";
import { useState } from "react";
import CreateTodo from "./CreateTodo";
import Done from "./Done";
import Remaining from "./Remaining";
import ThemeToggle from "./ThemeToggle";

function TodoHome(props: any) {
  const { colorScheme, toggleColorScheme } = props;

  const [todoList, setTodoList] = React.useState([
    {
      caption: "yolo",
      value: "",
      color: "",
      status: "",
    },
  ]);

  return (
    <div>
      <ThemeToggle
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      />
      <div className="todos-container">
        <Remaining todoList={todoList} setTodoList={setTodoList} />
        <Done todoList={todoList} setTodoList={setTodoList} />
      </div>
      <CreateTodo todoList={todoList} setTodoList={setTodoList} />
      <style>{`
            .todos-container {
                width: 80%;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;
            }
          `}</style>
    </div>
  );
}

export default TodoHome;
