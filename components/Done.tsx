import { Divider, Text } from "@mantine/core";
import React from "react";
import TodoItem from "./TodoItem";

// MAin Function
function Done(props: any) {
  const { todoList, setTodoList } = props;

  return (
    <div className="done-container">
      {/* Title */}
      <Text align="center" size="xl">
        Done
      </Text>

      {/* HR */}
      <Divider size={5} style={{ margin: "1rem 0" }} />

      {/* List */}
      <div className="todo-list">
        {todoList.map((todo: any, id: number) => {
          if (todo.status === "done") {
            return (
              <TodoItem
                id={id}
                todoList={todoList}
                setTodoList={setTodoList}
                key={id}
              />
            );
          }
          id += 1;
        })}
      </div>

      {/* Style */}
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
