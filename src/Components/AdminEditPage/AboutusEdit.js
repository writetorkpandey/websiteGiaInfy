import React, { useState } from "react";
import { useEffect } from "react";
import db from "../../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { createRecord, updateRecord, deleteRecord } from "../../Helper";


export default function AboutusEdit() {
  const [aboutUs, setAboutUs] = useState([]);
  const [schoolTeam, setSchoolteam] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "aboutUs"), (snapshot) => {
      setAboutUs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    // onSnapshot(collection(db, "schoolTeam"), (snapshot) => {
    //   setSchoolteam(
    //     snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //   );
    // });
  }, []);

  return (
    <div>
       <div class="container py-5 mt-5 bg-light ">
        <div class="card-body abtp">
        <AboutusEditNewRecord />
          {aboutUs.map((item) => {
            return (
              <>
                {/* <h3 className="h5 text-primary">{item.heading}</h3>
                <p className="text-secondary">{item.paragraph}</p> */}
                <AboutusUI item={item} />
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

                    {/* <AboutusUiStaff /> */}


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


const AboutusEditNewRecord = () => {
    const [idPayload, setidPayload] = useState({
        aboutusheading: "",
        aboutusparagraph: "",
    });
    console.log(idPayload);
    return (
      <>
        <div className="m-5 ">
          <input
            className="form-control"
            value={idPayload.aboutusheading}
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({ ...idPayload, aboutusheading: tempdata });
            }}
          />
  
          <textarea
            className="form-control"
            value={idPayload.aboutusparagraph}
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({ ...idPayload, aboutusparagraph: tempdata });
            }}
          />
  
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => {
              createRecord("achivements", idPayload);
            }}
          >
            Save new Record
          </button>
        </div>
      </>
    );
  };


  const AboutusUI = (props) => {
    const [idPayload, setidPayload] = useState({
        aboutusheading: props.item.heading,
        aboutusparagraph: props.item.paragraph,
    });
    console.log(idPayload);
    console.log(props.item.heading)
  
    return (
      <>
        <div className="m-5 ">
          <input
            className="form-control"
            value={idPayload.aboutusheading}
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({ ...idPayload, aboutusheading: tempdata });
            }}
          />
  
          <textarea
            className="form-control"
            value={idPayload.aboutusparagraph}
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({ ...idPayload, aboutusparagraph: tempdata });
            }}
          />
  
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => {
              updateRecord("aboutUs", props.item.id, idPayload);
            }}
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              deleteRecord("aboutUs", props.item.id);
            }}
          >
            Delete
          </button>
        </div>
      </>
    );
  };



  const AboutusUiStaff = (props) => {
    const [idPayload, setidPayload] = useState({
        aboutusname: props.item.name,
        aboutusdesignation: props.item.designation,
    });
    console.log(idPayload);
    
  
    return (
      <>
        <div className="m-5 ">
          <input
            className="form-control"
            value={idPayload.aboutusname}
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({ ...idPayload, aboutusname: tempdata });
            }}
          />
  
          <textarea
            className="form-control"
            value={idPayload.aboutusdesignation}
            onChange={(event) => {
              let tempdata = event.target.value;
              setidPayload({ ...idPayload, aboutusdesignation: tempdata });
            }}
          />
  
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => {
              updateRecord("schoolTeam", props.item.id, idPayload);
            }}
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              deleteRecord("schoolTeam", props.item.id);
            }}
          >
            Delete
          </button>
        </div>
      </>
    );
  };