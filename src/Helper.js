import db from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const createRecord = async (tableDetails, idPayload) => {
  await addDoc(collection(db, tableDetails), idPayload);
  alert("Record Added successfully !!");
};

export const updateRecord = async (tableDetails, id, idPayload) => {
  console.log(id, tableDetails, idPayload);
  const userDoc = doc(db, tableDetails, id);
  //   const newFields = { age: age + 1 };
  await updateDoc(userDoc, idPayload);
  alert("Record updated successfully !!");
};

export const deleteRecord = async (tableDetails, id) => {
  const userDoc = doc(db, tableDetails, id);
  await deleteDoc(userDoc);
  alert("Record Deleated successfully !!");
};
