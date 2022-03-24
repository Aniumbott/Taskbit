import React from "react";
import { Button } from "@mantine/core";

function CreateTodo(props: any) {
  const { colorScheme, toggleColorScheme } = props;
  return (
    <div className="create-todo-container">
      <Button>CreateTodo</Button>
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
