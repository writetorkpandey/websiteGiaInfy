import React,{useState} from 'react';
import { useEffect } from 'react';
import db from "../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";

export default function ContactUs() {

  const [contact, setContact] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "contactUs"), (snapshot) =>
        {setContact(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(contact)}
      ),
    []
  );

    return (
      <div className="contactus-body">
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
            <div className="topic-text">Send us a message</div>
            <p>If you have any types of quries related to school, you can send us message from here. It's our pleasure to help you.</p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div className="input-box message-box">
              <input type="text" placeholder="Enter your message"/>
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
        </div>
      </div>
      </div>
    )
}
