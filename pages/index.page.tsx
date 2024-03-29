// Import Modules
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Paper } from "@mantine/core";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";

// Import Components
import Head from "next/head";
import GitHubCorner from "../components/GitHubCorner.page";
import SignIn from "../components/SignIn.page";
import ThemeToggle from "../components/ThemeToggle.page";
import SetUser from "../components/SetUser.page";
import base from "./firebase";

// Main Function
const Home: NextPage = () => {
  const auth = base.auth;
  const [isloged] = useAuthState(auth);
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
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
        <title>TASKBIT</title>
        <meta
          name="description"
          content="A smart way to organize your  tasks."
        />
        <link rel="icon" href="/taskbit-favicon.png" />
      </Head>
      <GitHubCorner />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <Paper className={styles.paper}>
            {/* Is Logged */}
            <>{isloged ? <SetUser /> : <SignIn />}</>
            {/* Theme Toggle */}
            <ThemeToggle
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
