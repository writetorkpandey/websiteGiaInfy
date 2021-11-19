import React, { useState, useEffect } from "react";
import Aboutus from "../Components/Aboutus";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header";

export default function Homepage() {
  const [count, setCount] = useState(1);
  if (count > 15) {
    setCount(1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <div class="container-fluid mt-5" >
        <br />
        <img
          src={`https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/${count}.jpeg`}
          className="head-1" style ={{width:"100%" , height:"80vh"}}
          alt="school"
        />
      </div>
      <Header />
      <Aboutus />
      <Footer />
    </>
  );
}
