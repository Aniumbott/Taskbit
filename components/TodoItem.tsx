import { Group, Modal, Button, Input } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Trash } from "tabler-icons-react";
import dynamic from "next/dynamic";

// temp variable for todo data
let tododata = "";

// Richtext Editor Component
function RichtextEdit(props: any) {
  const { readOnly, todoData } = props;
  const RichTextEdit = dynamic(import("@mantine/rte"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  return (
    <RichTextEdit
      readOnly={readOnly}
      value={todoData}
      onChange={(e) => {
        tododata = e;
        console.log(tododata);
      }}
    />
  );
}

// TodoItem Component
function TodoItem(props: any) {
  const todoList = props.todoList;
  const setTodoList = props.setTodoList;
  const id = props.id;
  const [readable, setReadable] = useState(true);
  const [opened, setOpened] = useState(false);
  const [todoData, setTodoData] = useState(todoList[id].data);

  return (
    <div>
      <Modal
        opened={opened}
        title="Todo Details"
        onClose={() => setOpened(false)}
      >
        <Input
          className="todo-caption"
          variant="filled"
          placeholder={todoList[id].caption}
          disabled={readable}
          onChange={(e: any) => {
            todoList[id].caption = e.target.value;
          }}
        />
        <div className="richtext">
          <RichtextEdit readOnly={readable} todoData={todoData} />
        </div>
        <div className="modal-buttons">
          <Button
            className="edit-save-delete"
            onClick={() => {
              readable ? setReadable(false) : setReadable(true);
              setTodoData(tododata);
              todoList[id].data = todoData;
              setTodoList([...todoList]);
            }}
          >
            {readable ? "Edit" : "Save"}
          </Button>

          <Button
            className="edit-save-delete"
            color="red"
            onClick={() => {
              todoList.splice(id, 1);
              setTodoList([...todoList]);
              setOpened(false);
            }}
          >
            <Trash />
          </Button>
        </div>
      </Modal>

      <Group className="todo-item" position="center">
        <div
          className="todo-color"
          style={{ backgroundColor: todoList[id].color }}
          onClick={() => {
            todoList[id].status =
              todoList[id].status === "done" ? "remaining" : "done";
            setTodoList([...todoList]);
            console.log(todoList[id]);
          }}
        ></div>
        <Button
          className="todo-data"
          variant="default"
          onClick={() => setOpened(true)}
        >
          <p>&nbsp;{todoList[id].caption}</p>
        </Button>
      </Group>
      <style>{`
        .todo-item{
          margin-top: 1rem;
          min-height: 4rem;
        }

        .todo-caption{
          width: fit-content;
          margin: 0.5rem 0;
          pading: 0.5rem;
        }

          .todo-data{
            position: absolute;
            left: 0;
            margin-left: 2rem;
            border-radius: 0;
            max-width: calc(100% - 2rem);
            min-width: calc(100% - 2rem);
            min-height: 4rem;
          }
          .todo-color{
            position: absolute;
            left: 0;
            min-height: 4rem;
            min-width: 2rem;
          }

          .modal-buttons{
            padding: 0.5rem 0;
            minwidth:100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }

          .edit-save-delete{
            margin-left: 0.5rem;
          }
        `}</style>
    </div>
  );
}

export default TodoItem;
