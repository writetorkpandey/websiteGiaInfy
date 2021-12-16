import React, { useState, useEffect,useRef, useContext } from "react";
import db from "../../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { Helmet } from "react-helmet";
import { createRecord, updateRecord, deleteRecord } from "../../Helper";

export default function ActivityEdit() {
  const [activityData, setactivityData] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "activity"), (snapshot) => {
        setactivityData(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        console.log(activityData);
      }),
    []
  );

  return (
    <div className="activity-div-container py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Activities | Home | Gramarshi</title>
        <link rel="canonical" href="https://gramarshiacademy.in/" />
      </Helmet>
      <ActivityEditNewRecordUI/>
      {activityData ? (
        activityData.map((item) => {
          return (
            <>
              <ActivityEDitUI item={item}/>
            </>
          );
        })
      ) : (
        <div>Loading... please wait</div>
      )}
    </div>
  );
}

const ActivityEditNewRecordUI = () => {
      const inputActivityName = React.useRef();
      const inputActivityDescription = React.useRef();

    const [idPayload, setidPayload] = useState({
        activityName: "",
        activityDescription: ""
      });

    return(
    <div className="m-5 ">
    <input className="form-control" value= {idPayload.activityName} ref={inputActivityName}
        onChange={(event) => {
        let tempdata = event.target.value;
        setidPayload({...idPayload, activityName: tempdata});
      }}
    />
    <textarea className="form-control" value = {idPayload.activityDescription} ref={inputActivityDescription}
        onChange={(event) => {
        let tempdata = event.target.value;
        setidPayload({...idPayload, activityDescription: tempdata});
      }}
    />
     <button
          type="button"
          class="btn btn-secondary"
          onClick={(e) => {
            e.preventDefault();
            createRecord("activity", idPayload)
            .then(()=>{
              inputActivityName.current.value = "";
              inputActivityDescription.current.value ="";
            });
          }}
        >
          Save new Record
        </button>
    </div>
);
}


const ActivityEDitUI = (props) => {

    const [idPayload, setidPayload] = useState({
        activityName: props.item.activityName,
        activityDescription: props.item.activityDescription
      });

    return(
    <div className="m-5 ">
    <input className="form-control" value= {idPayload.activityName}
        onChange={(event) => {
        let tempdata = event.target.value;
        setidPayload({...idPayload, activityName: tempdata});
      }}
    />
    <textarea className="form-control" value = {idPayload.activityDescription}
        onChange={(event) => {
        let tempdata = event.target.value;
        setidPayload({...idPayload, activityDescription: tempdata});
      }}
    />
     <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            updateRecord("activity", props.item.id, idPayload);
          }}
        >
          Save
        </button>

        <button
          type="button"
          class="btn btn-danger"
          onClick={(e) => {
            e.preventDefault();
            deleteRecord("activity", props.item.id)
          }}
        >
          Delete
        </button>
    </div>
);
}
