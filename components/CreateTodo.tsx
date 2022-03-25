import React from "react";
import { ActionIcon, Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";

function CreateTodo(props: any) {
  const { colorScheme, toggleColorScheme } = props;
  return (
    <div className="create-todo-container">
      <ActionIcon variant="filled" color="blue" onClick={() => {}}>
        <Plus />
      </ActionIcon>
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
