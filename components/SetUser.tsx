// Import Modules
import React, { useEffect } from "react";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { useState } from "react";

// Import Components
import TodoHome from "./TodoHome";
import base from "../pages/firebase";

// Main function
function SetUser() {
  const { auth, db } = base;
  // User State
  const currentUser =
    auth.currentUser != null
      ? auth.currentUser
      : {
          email: "",
          uid: "",
          todoList: [],
        };
  const [user, setUser] = useState({
    gmail: currentUser.email,
    id: currentUser.uid,
    todoList: [
      {
        caption: "New Todo",
        status: "remaining",
        data: "Default data",
        color: "#868e96",
      },
    ],
  });

  // Get from DB
  useEffect(() => {
    const getdoc = async () => {
      const usr = await getDoc(doc(db, "users", currentUser.uid));
      if (usr.exists()) {
        setUser({
          gmail: usr.data().gmail,
          id: usr.data().id,
          todoList: usr.data().todoList,
        });
        // console.log(user);
      } else {
        const addUser = async () => {
          const newUser = await setDoc(doc(db, "users", user.id), user);
        };
        addUser();
        // console.log("user added");
      }
    };
    getdoc();
  }, []);

  return (
    <div>
      <TodoHome user={user} setUser={setUser} />
    </div>
  );
}

export default SetUser;
