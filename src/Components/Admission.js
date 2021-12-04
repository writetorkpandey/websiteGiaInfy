import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { Helmet } from "react-helmet";

export default function Admission() {
  const [admissionData, setAdmissionData] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "admission"), (snapshot) => {
        setAdmissionData(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        console.log(admissionData);
      }),
    []
  );

  return (
    <div className="container my-5 py-5">
      <h3 className="text-success display-6">
        Please read below admission process in detail.
      </h3>
      <br />
      {admissionData ? (
        admissionData.map((item) => {
          return (
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Admission | Home | Gramarshi</title>
                <link rel="canonical" href="https://gramarshiacademy.in/" />
              </Helmet>

              <h5 className="h5 text-primary text-start">{item.point}</h5>
              <p className="text-secondary text-start">{item.description}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <div>Loading... please wait</div>
      )}
    </div>
  );
}
