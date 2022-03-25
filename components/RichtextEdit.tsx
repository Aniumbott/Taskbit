import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

function RichtextEdit(props: any) {
  const { readOnly, todoData, setTodoData } = props;
  return (
    <RichTextEditor
      readOnly={readOnly}
      value={todoData}
      onChange={setTodoData}
    />
  );
}

export default RichtextEdit;
