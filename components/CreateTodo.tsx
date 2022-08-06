// Import Modules
import React from "react";
import { ActionIcon } from "@mantine/core";
import { Plus } from "tabler-icons-react";

// Main Function
function CreateTodo(props: any) {
  const { setTodoList, todoList } = props;

  // Function to create new todo
  const createTodo = () => {
    let newTodo = {
      caption: "New Todo",
      status: "remaining",
      data: "Default data",
      color: "#868e96",
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="create-todo-container">
      <ActionIcon variant="filled" color="blue" onClick={() => {}}>
        <Plus onClick={() => createTodo()} />
      </ActionIcon>

      {/* Style */}
      <style>
        {`
            .create-todo-container {
                margin: 5rem auto;
                display: flex;
                justify-content: center;
            }
          `}
      </style>
    </div>
  );
}

export default CreateTodo;
