import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { Helmet } from "react-helmet";
import { createRecord, updateRecord, deleteRecord } from "../../Helper";

export default function AdmissionEdit() {
  const [admissionData, setAdmissionData] = useState();


 useEffect(()=>{
  onSnapshot(collection(db, "admission"), (snapshot) => {
    setAdmissionData(
    snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    console.log(admissionData);
    })
 },[])

  return (
    <div className="activity-div-container py-5">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Admission | Home | Gramarshi</title>
                <link rel="canonical" href="https://gramarshiacademy.in/" />
              </Helmet>
      <h3 className="text-success display-6">
        Edit admission process.
      </h3>
      <br />
      <AdmissionEditUINewRecord/>
      {admissionData ? (
        admissionData.map((item) => {
          return (
            <>
              <AdmissionEditUI item={item} />
            </>
          );
        })
      ) : (
        <div>Loading... please wait</div>
      )}
    </div>
  );
}

const AdmissionEditUINewRecord = () => {
  const [idPayload, setidPayload] = useState({
    point: "",
    description: "",
  });
  console.log(idPayload);
  return (
    <>
      <div className="m-5 ">
        <input
          className="form-control"
          value={idPayload.point}
          onChange={(event) => {
            let tempdata = event.target.value;
            setidPayload({ ...idPayload, point: tempdata });
          }}
        />

        <textarea
          className="form-control"
          value={idPayload.description}
          onChange={(event) => {
            let tempdata = event.target.value;
            setidPayload({ ...idPayload, description: tempdata });
          }}
        />

        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            createRecord("admission", idPayload);
          }}
        >
          Save new Record
        </button>
      </div>
    </>
  );
};


const AdmissionEditUI = (props)=>{
  const [idPayload, setidPayload] = useState({
    point: props.item.point,
    description: props.item.description,
  });
  return(
    <div className="m-5 ">
              
              <input className="form-control" value = {idPayload.point} 
               onChange={(event) => {
                let tempdata = event.target.value;
                setidPayload({...idPayload, point: tempdata});
              }}
              />

              <textarea className="form-control" value = {idPayload.description}
              onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({...idPayload, description: tempdata});
              }}
              />

              <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            updateRecord("admission", props.item.id, idPayload);
          }}
        >
          Save
        </button>

        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            deleteRecord("admission", props.item.id);
          }}
        >
          Delete
        </button>
            </div>
  );
}
