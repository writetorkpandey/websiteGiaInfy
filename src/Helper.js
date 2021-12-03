import db from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// export const createRecord = async () => {
//   await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
// };

export const updateRecord = async (tableDetails, id, idPayload) => {
  console.log(id, tableDetails, idPayload);
  const userDoc = doc(db, tableDetails, id);
  //   const newFields = { age: age + 1 };
  await updateDoc(userDoc, idPayload);
  alert("Recod updated successfully !!");
};

export const deleteRecord = async (tableDetails, id) => {
  const userDoc = doc(db, tableDetails, id);
  await deleteDoc(userDoc);
  alert("Recod Deleated successfully !!");
};
