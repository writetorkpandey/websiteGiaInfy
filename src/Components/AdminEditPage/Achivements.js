import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";

export default function Achivements() {
  const [achivementsData, setAchivementsData] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "achivements"), (snapshot) => {
        setAchivementsData(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        console.log(achivementsData);
      }),
    []
  );

  return (
    <div className="activity-div-container py-5">
      {achivementsData ? (
        achivementsData.map((item) => {
          return (
            <>
              <div className="m-5 ">
                <input className="form-control" value={item.achivementsName} />

                <textarea
                  className="form-control"
                  value={item.achivementsDescription}
                />

                <button type="button" class="btn btn-secondary">
                  Save
                </button>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </div>
            </>
          );
        })
      ) : (
        <div>Loading... please wait</div>
      )}
    </div>
  );
}
