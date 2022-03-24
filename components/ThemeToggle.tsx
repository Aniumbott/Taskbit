import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

function ThemeToggle(props: any) {
  const { colorScheme, toggleColorScheme } = props;
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => {
        toggleColorScheme();
        console.log(colorScheme);
      }}
      className="toggle"
      title="Toggle color scheme"
    >
      <style>
        {`.toggle{
            margin-bottom: 1rem;
                top: 0;
                left : 0;
            }`}
      </style>
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
}

export default ThemeToggle;
