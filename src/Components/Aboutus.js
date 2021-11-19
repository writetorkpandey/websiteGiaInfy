import React, { useState } from "react";
import { useEffect } from "react";
import db from "../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";

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

  // const schoolTeam = [
  //   {
  //     imgSrc: "https://bootstrapious.com/i/snippets/sn-about/avatar-4.png",
  //     name: "Anju Pandey",
  //     designation: "Manager",
  //   },

  //   {
  //     imgSrc: "https://bootstrapious.com/i/snippets/sn-about/avatar-1.png",
  //     name: "R V Sharma",
  //     designation: "Principal",
  //   },
  //   {
  //     imgSrc: "https://bootstrapious.com/i/snippets/sn-about/avatar-2.png",
  //     name: "D N Dubey",
  //     designation: "Administrator",
  //   },
  // ];

  // const aboutUs = [
  //   {
  //     heading: "About Gramarshi",
  //     paragraph:"The school was established in 2008.Gramarshi Academy International is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).It is managed by Gramarshi Academy"
  //   },
  //   {
  //     heading: "Mission",
  //     paragraph: "To cultivate world-class thinkers.",
  //   },
  //   {
  //     heading: "Vision",
  //     paragraph:
  //       "Our students will be the leaders of tomorrow with the skills, knowledge, and confidence to realize their dreams in an ever-changing world.",
  //   },
  //   {
  //     heading: "Our Beliefs",
  //     paragraph:
  //       "Every member of our community plays a valuable role in the success of our students by supporting a positive, student-focused learning environment",
  //   },
  // ];

  return (
    <div>
      {/* Start of About Us content */}

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
              <div class="col-4 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={item.imgSrc}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">{item.name}</h5>
                  <span class="small text-uppercase text-muted">
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
