import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { updateRecord, deleteRecord } from "../../Helper";

export default function AchivementsEdit() {
  const [achivementsData, setAchivementsData] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "achivements"), (snapshot) => {
        setAchivementsData(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      }),
    []
  );

  return (
    <div className="activity-div-container py-5">
      {achivementsData ? (
        achivementsData.map((item) => {
          return (
            <>
              <AchievementUI item={item} />
            </>
          );
        })
      ) : (
        <div>Loading... please wait</div>
      )}
    </div>
  );
}

const AchievementUI = (props) => {
  const [idPayload, setidPayload] = useState({
    achivementsName: props.item.achivementsName,
    achivementsDescription: props.item.achivementsDescription,
  });
  console.log(idPayload);
  return (
    <>
      <div className="m-5 ">
        <input
          className="form-control"
          value={idPayload.achivementsName}
          onChange={(event) => {
            let tempdata = event.target.value;
            setidPayload({ ...idPayload, achivementsName: tempdata });
          }}
        />

        <textarea
          className="form-control"
          value={idPayload.achivementsDescription}
          onChange={(event) => {
            let tempdata = event.target.value;
            setidPayload({ ...idPayload, achivementsDescription: tempdata });
          }}
        />

        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            updateRecord("achivements", props.item.id, idPayload);
          }}
        >
          Save
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            deleteRecord("achivements", props.item.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
