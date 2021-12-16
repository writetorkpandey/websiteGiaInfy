import React, { useState } from "react";
import { useEffect } from "react";
import db from "../../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import ReactMapGL, { Marker } from "react-map-gl";
import { Helmet } from "react-helmet";
import {  updateRecord } from "../../Helper";

export default function ContactEdit() {
  const [contact, setContact] = useState([]);

  const [viewport, setViewport] = useState({
    width: 350,
    height: 350,
    latitude: 26.545278738379366,
    longitude: 82.3931122837089,
    zoom: 12,
  });

  useEffect(
    () =>
      onSnapshot(collection(db, "contactUs"), (snapshot) => {
        setContact(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(contact[0],"amit");
      }),
    []
  );

  const [idPayload, setidPayload] = useState({
    // address: contact[0]?.address,
    // phone: contact[0]?.phone,
    // email : contact[0]?.email
  });

  return (
    <div className="contactus-body py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact US | Home | Gramarshi</title>
        <link rel="canonical" href="https://gramarshiacademy.in/" />
      </Helmet>

      <div className="contactus-container row">
        <div className="contactus-content ">
          <div className="contactus-left-side col">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one"><input className="form-control" value = {contact[0]?.address} 
               onChange={(event) => {
                let tempdata = event.target.value;
                setContact({...contact[0], address: tempdata});
                {console.log(contact[0])}
              }}/></div>
              <div><button
          type="button"
          class="btn btn-secondary"
          onClick={(e) => {
            // e.preventDefault();
            console.log(contact[0]);
            // updateRecord("contactUs", contact[0]?.id, contact[0]);
          }}
        >
          Save
        </button></div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one"><input className="form-control" value = {contact[0]?.phone}/></div>
              <div className="text-two"></div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one"><input className="form-control" value ={contact[0]?.email}/></div>
              <div className="text-two"></div>
            </div>
          </div>
          <div className="contactus-right-side col">

            <ReactMapGL
              mapboxApiAccessToken={
                "pk.eyJ1IjoiYW1pdGJlY3MwOCIsImEiOiJja3drdmhxd2gxd3cyMnBub3hrNTc2a3JkIn0.IecVVTWBO_4o0tX1y-0v-A"
              }
              mapStyle={"mapbox://styles/mapbox/dark-v9"}
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
              <Marker
                latitude={26.545278738379366}
                longitude={82.3931122837089}
                offsetLeft={-20}
                offsetTop={-(viewport.zoom * 5) / 2}
              >
                <img
                  src="https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png"
                  width={viewport.zoom * 5}
                  height={viewport.zoom * 5}
                />
              </Marker>
            </ReactMapGL>
          </div>
        </div>
      </div>
    </div>
  );
}
