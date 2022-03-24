import React from "react";
import { Text } from "@mantine/core";

function Remaining(props: any) {
  const todoList = props.todoList;
  const setTodoList = props.setTodoList;
  return (
    <div className="remaining-container">
      <Text align="center" size="xl">
        Remaining
      </Text>
      <hr />
      <style>{`
      .remaining-container {
        width: 40%;
        min-width: 20rem;
        margin: 1rem;
    }
      `}</style>
    </div>
  );
}

export default Remaining;
