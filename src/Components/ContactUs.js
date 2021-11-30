import React, { useState } from "react";
import { useEffect } from "react";
import db from "../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore"; 
import ReactMapGL from 'react-map-gl';

export default function ContactUs() {
  const [contact, setContact] = useState([]);

  const [viewport, setViewport] = useState({
    width: 700,
    height: 400,
    latitude: 26.57061,
    longitude: 82.40345,
    zoom: 12
  });

  useEffect(
    () =>
      onSnapshot(collection(db, "contactUs"), (snapshot) => {
        setContact(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(contact);
      }),
    []
  );

  return (
    <div className="contactus-body py-5">
      <div className="contactus-container">
        <div className="contactus-content">
          <div className="contactus-left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">{contact[0]?.address}</div>
              {/* <div className="text-one">College Goddopur, near Mahila Pg</div>
              <div className="text-two">Goshainganj, Uttar Pradesh 224141</div> */}
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              {/* <div className="text-one">0522-250050</div> */}
              <div className="text-one">{contact[0]?.phone}</div>
              <div className="text-two"></div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              {/* <div className="text-one">ranvijay.takshsila@gmail.com</div> */}
              <div className="text-one">{contact[0]?.email}</div>
              <div className="text-two"></div>
            </div>
          </div>
          <div className="contactus-right-side">
            {/* <div id="map" className="maps"></div> */}
            
            <ReactMapGL
            mapboxApiAccessToken ={"pk.eyJ1IjoiYW1pdGJlY3MwOCIsImEiOiJja3drdmhxd2gxd3cyMnBub3hrNTc2a3JkIn0.IecVVTWBO_4o0tX1y-0v-A"}
            mapStyle={"mapbox://styles/mapbox/dark-v9"}
            {...viewport}
             onViewportChange={nextViewport => setViewport(nextViewport)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
