import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import db from "../firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";

export default function Media() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [count, setCount] = useState(1);

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

  // const Mediadata = [
  //   {
  //     cardHeader :'Diwali Pictures',
  //     cardImage : 'https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/1.jpeg' ,
  //     cardDescription : 'During Diwali, people wear their finest clothes, illuminate the interior and exterior of their homes with diyas and rangoli, perform worship ceremonies of Lakshmi, the goddess of prosperity and wealth, light fireworks, and partake in family',
  //     cardButton : 'Show More for Diwali Pictures'
  //   },
  //   {
  //     cardHeader :'New Year Pictures',
  //     cardImage : 'https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/2.jpeg' ,
  //     cardDescription : 'During Diwali, people wear their finest clothes, illuminate the interior and exterior of their homes with diyas and rangoli, perform worship ceremonies of Lakshmi, the goddess of prosperity and wealth, light fireworks, and partake in family',
  //     cardButton : 'Show More for New Year Pictures'
  //   },
  //   {
  //     cardHeader :'Diwali Pictures',
  //     cardImage : 'https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/3.jpeg' ,
  //     cardDescription : 'During Diwali, people wear their finest clothes, illuminate the interior and exterior of their homes with diyas and rangoli, perform worship ceremonies of Lakshmi, the goddess of prosperity and wealth, light fireworks, and partake in family',
  //     cardButton : 'Show More for Diwali Pictures'
  //   }

  // ]

  return (
    <div>
      {/* Start of First Card code here */}
      {/* start of Card code here */}

      <div class="container my-5 pt-4">
        <div class="row">
          {Mediadata.map((item) => {
            return (
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{item?.cardHeader}</h5>
                    <img
                      className="d-block w-100"
                      src={item?.cardImage}
                      alt="First slide"
                    />
                    <p class="card-text">
                      {item.cardDescription?.slice(0, 100)}
                    </p>
                    <a onClick={handleShow} class="btn btn-primary">
                      {item.cardButton}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* End of Card Code here */}

        {/* Start of Carousal Code here */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Diwali Pictures </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Carausel code starts */}
            <Carousel
              onClick={() => {
                count > 15 ? setCount(1) : setCount(count + 1);
              }}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/${count}.jpeg`}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            {/* Carousel code ends */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* End of Carousal code here */}

      {/* End of First Card code here  */}
    </div>
  );
}
