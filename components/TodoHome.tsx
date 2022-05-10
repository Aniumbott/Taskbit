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
      caption: "lore vvdsfvv",
      data: "llvlsdfv",
      color: "purple",
      status: "done",
    },
    {
      caption: "aniket Rana",
      data: "vsvds",
      color: "red",
      status: "done",
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
                align-items: flex-start;
                justify-content: space-around;
            }
          `}</style>
    </div>
  );
}

export default TodoHome;
