import { Group, Modal, Button } from "@mantine/core";
import React, { useState } from "react";
import RichtextEdit from "./RichtextEdit";

function TodoItem(props: any) {
  const todoList = props.todoList;
  const setTodoList = props.setTodoList;
  const id = props.id;

  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={todoList[id].caption}
      >
        <RichtextEdit />
      </Modal>
      <Group position="center">
        <Button color={todoList[id].color} onClick={() => setOpened(true)}>
          {todoList[id].caption}
        </Button>
      </Group>
    </div>
  );
}

export default TodoItem;
