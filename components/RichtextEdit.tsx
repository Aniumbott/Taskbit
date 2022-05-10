import dynamic from "next/dynamic";

function RichtextEdit(props: any) {
  const { readOnly, todoData, setTodoData } = props;
  const RichTextEdit = dynamic(import("@mantine/rte"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  return (
    <RichTextEdit
      readOnly={readOnly}
      value={todoData}
      onChange={(e) => {
        console.log(e);
      }}
    />
  );
}

export default RichtextEdit;
