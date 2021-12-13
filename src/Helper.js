import db, { storage } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const createRecordWithImageFile = async (
  tableDetails,
  idPayload,
  newFile
) => {
  try {
    uploadFiles(newFile, tableDetails, idPayload);
  } catch (error) {
    alert("Error " + error);
  }
};

export const updateRecordWithImageFile = async (
  tableDetails,
  id,
  idPayload,
  newFile
) => {
  try {
    newFile
      ? uploadFiles(newFile, tableDetails, idPayload, id)
      : updateRecord(tableDetails, id, idPayload);
  } catch (error) {
    alert("Error " + error);
  }
};

export const createRecord = async (tableDetails, idPayload) => {
  try {
    await addDoc(collection(db, tableDetails), idPayload);
    alert("Record Added successfully !!");
  } catch (error) {
    alert("Error " + error);
  }
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

const uploadFiles = async (file, tableDetails, idPayload, id) => {
  //
  if (!file) return;
  const sotrageRef = ref(storage, `${idPayload.cardHeader}/${file.name}`);
  const uploadTask = uploadBytesResumable(sotrageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      // setProgress(prog);
    },
    (error) => console.log(error),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        idPayload = { ...idPayload, cardImage: downloadURL };
        console.log("rahul", id);
        id
          ? updateRecord(tableDetails, id, idPayload)
          : createRecord(tableDetails, idPayload);
      });
    }
  );
};
