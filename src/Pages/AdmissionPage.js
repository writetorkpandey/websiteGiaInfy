import React,{lazy,Suspense} from "react";
// import Admission from "../Components/Admission";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header";

const Admission = lazy(()=>import("../Components/Admission"))

export default function AdmissionPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Admission />
      </Suspense>
      <Footer />
    </>
  );
}
