import React from "react";
import { useState, useEffect } from "react";

import db from "../../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";

import {
  createRecordWithImageFile,
  updateRecordWithImageFile,
  deleteRecord,
} from "../../Helper";

export default function MediaEdit() {
  const [Mediadata, setMediadata] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Mediadata"), (snapshot) => {
        setMediadata(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  return (
    <div>
      <div class="container my-5 pt-4">
        <div className="row">
          <MediaEditUINewRecord />
        </div>

        <div class="row mt-5">
          {Mediadata ? (
            Mediadata.map((item) => {
              return <MediaEditUI item={item}></MediaEditUI>;
            })
          ) : (
            <div>Loading... please wait</div>
          )}
        </div>
      </div>
    </div>
  );
}

const MediaEditUINewRecord = (props) => {
  const [newFile, setnewFile] = useState("");
  const [idPayload, setidPayload] = useState({
    cardHeader: "",
    cardDescription: "",
    cardImage: "",
    cardButton: "",
  });

  return (
    <div class="col">
      <div class="card">
        <div class="card-body">
          <input
            className="form-control"
            value={idPayload?.cardHeader}
            placeholder="Enter the Event Name"
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({
                ...idPayload,
                cardHeader: tempdata,
                cardButton: `Show More for ${tempdata}`,
              });
            }}
          />
          <input
            type="file"
            className="input"
            onChange={(e) => {
              setnewFile(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
          />
          <textarea
            className="form-control"
            value={idPayload.cardDescription}
            placeholder="Enter the Event description"
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({ ...idPayload, cardDescription: tempdata });
            }}
          />
          {/* <a class="btn btn-primary">{idPayload.cardButton}</a> */}
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => {
              createRecordWithImageFile("Mediadata", idPayload, newFile);
            }}
          >
            Save new Record
          </button>
        </div>
      </div>
    </div>
  );
};

const MediaEditUI = (props) => {
  const [newFile, setnewFile] = useState("");
  const [idPayload, setidPayload] = useState({
    cardHeader: props.item.cardHeader,
    cardDescription: props.item.cardDescription,
    cardImage: props.item.cardImage,
    cardButton: props.item.cardButton,
  });

  return (
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <input
            className="form-control"
            value={idPayload?.cardHeader}
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({
                ...idPayload,
                cardHeader: tempdata,
                cardButton: `Show More for ${tempdata}`,
              });
            }}
          />
          <img
            className="d-block w-100"
            src={idPayload?.cardImage}
            alt="First slide"
          />
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              setnewFile(e.target.files[0]);
              // console.log(e.target.files[0]);
            }}
          />
          <textarea
            className="form-control"
            value={idPayload.cardDescription}
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({ ...idPayload, cardDescription: tempdata });
            }}
          />
          {/* <a class="btn btn-primary">{idPayload.cardButton}</a> */}
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => {
              updateRecordWithImageFile(
                "Mediadata",
                props.item.id,
                idPayload,
                newFile
              );
            }}
          >
            Save
          </button>

          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              deleteRecord("Mediadata", props.item.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
