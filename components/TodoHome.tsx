import React from "react";
import CreateTodo from "./CreateTodo";
import Done from "./Done";
import Remaining from "./Remaining";
import ThemeToggle from "./ThemeToggle";

// Main Function
function TodoHome(props: any) {
  const { colorScheme, toggleColorScheme } = props;
  const [todoList, setTodoList] = React.useState([
    {
      caption: "lore vvdsfvv",
      data: "llvlsdfv",
      color: "#7950f2",
      status: "done",
    },
    {
      caption: "aniket Rana",
      data: "vsvds",
      color: "#fa5252",
      status: "done",
    },
  ]);

  return (
    <div>
      {/* Theme Toggle */}
      <ThemeToggle
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      />

      {/* Todo Continers */}
      <div className="todos-container">
        <Remaining todoList={todoList} setTodoList={setTodoList} />
        <Done todoList={todoList} setTodoList={setTodoList} />
      </div>

      {/* Create a new todo */}
      <CreateTodo todoList={todoList} setTodoList={setTodoList} />

      {/* Style */}
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
