import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Achivements | Home | Gramarshi</title>
        <link rel="canonical" href="https://gramarshiacademy.in/" />
      </Helmet>

      {achivementsData ? (
        achivementsData.map((item) => {
          return (
            <>
              <h1 className="h5 text-primary">{item.achivementsName}</h1>
              <p className="text-secondary">{item.achivementsDescription}</p>
            </>
          );
        })
      ) : (
        <div>Loading... please wait</div>
      )}
    </div>
  );
}