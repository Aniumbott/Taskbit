// Additionals
import React, { useEffect } from "react";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { db } from "../pages/firebase";
import TodoHome from "./TodoHome";
import { auth } from "../pages/firebase";
import { useState } from "react";
// Main function
function SetUser() {
  // User State
  const [user, setUser] = useState({
    gmail: auth.currentUser.email,
    id: auth.currentUser.uid,
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
      const usr = await getDoc(doc(db, "users", auth.currentUser.uid));
      if (usr.exists()) {
        setUser(usr.data());
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
