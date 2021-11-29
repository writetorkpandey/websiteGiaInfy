import React, { useState } from "react";
import Login from "../Components/Login";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Loginpage() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <Header />
      {/* {console.log(user.email)} */}
      {user ? (
        <div>
          <h1 className="mt-5 p-5 text-center">{user.email} Admin Panel</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Login></Login>
      )}

      <Footer />
    </>
  );
}
