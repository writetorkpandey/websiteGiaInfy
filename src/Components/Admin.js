import React ,{useState} from "react";
import { auth } from "../firebaseConfig";
import {
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

export default function Admin() {

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      const logout = async () => {
        await signOut(auth);
      };


  return (
    <div>
      <h1 className ="mt-5"> This is Admin page </h1>

      <div>
        <h1 className="mt-5 p-5 text-center">{user.email} Admin Panel</h1>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
