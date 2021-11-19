import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header";

export default function NotFoundPage() {
  return (
    <>

     <Header />
     <div my-5 py-5> <br /><br /><br /><br />
      <p>Page not found !! </p>
      <Link to="/">Let's go Home Page </Link>
      </div>
      <Footer />
    </>
  );
}
