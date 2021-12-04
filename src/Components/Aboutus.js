import React, { useState } from "react";
import { useEffect } from "react";
import db from "../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { Helmet } from "react-helmet";

export default function Aboutus() {
  const [aboutUs, setAboutUs] = useState([]);
  const [schoolTeam, setSchoolteam] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "aboutUs"), (snapshot) => {
      setAboutUs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    onSnapshot(collection(db, "schoolTeam"), (snapshot) => {
      setSchoolteam(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About US | Home | Gramarshi</title>
        <link rel="canonical" href="https://gramarshiacademy.in/" />
      </Helmet>

      <div class="container py-5 mt-5 bg-light ">
        <div class="card-body abtp">
          {aboutUs.map((item) => {
            return (
              <>
                <h3 className="h5 text-primary">{item.heading}</h3>

                <p className="text-secondary">{item.paragraph}</p>
              </>
            );
          })}
        </div>
      </div>

      {/* Start of team content */}

      <div class="container bg-light mb-5 pb-5">
        <div class="row">
          <h3 class="h5 text-primary">TEAM GRAMARSHI</h3> <br />
          <br />
          <br />
        </div>

        <div class="row text-center">
          {/* <!-- Team item--> */}

          {schoolTeam.map((item) => {
            return (
              <div class="col-md-4 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={item.imgSrc}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">{item.name}</h5>
                  <span class="small text-uppercase text-muted  ">
                    {item.designation}
                  </span>
                </div>
              </div>
            );
          })}

          {/* <!-- End--> */}
        </div>
      </div>
    </div>
  );
}
