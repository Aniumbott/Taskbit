import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import TodoHome from "../components/TodoHome";
import ThemeToggle from "../components/ThemeToggle";
import GitHubCorner from "../components/GitHubCorner";

import styles from "../styles/Home.module.css";
import { Paper } from "@mantine/core";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

const Home: NextPage = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <div className={styles.container}>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GitHubCorner />

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <Paper className={styles.paper}>
            <TodoHome
              colorScheme={colorScheme}
              toggleColorScheme={toggleColorScheme}
            />
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default Home;