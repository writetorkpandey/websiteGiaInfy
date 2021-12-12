import React, { useState } from "react";
import AchivementsEdit from "./AdminEditPage/AchivementsEdit";
import { Helmet } from "react-helmet";
import AdmissionEdit from "./AdminEditPage/AdmissionEdit";
import AboutusEdit from "./AdminEditPage/AboutusEdit"

function Admin() {
  const [selectedOption, setselectedOption] = useState("0");

  const project = () => {
    switch (selectedOption) {
      case "Achievement":
        return <AchivementsEdit />;

      case "Admission":
        return <AdmissionEdit />;

        case "AboutUs":
          return <AboutusEdit />;

      default:
        return <></>;
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin | Home | Gramarshi</title>
        <link rel="canonical" href="https://gramarshiacademy.in/" />
      </Helmet>

      <form className="mt-5 p-5">
        <div class="form-group container col-6">
          <label for="exampleFormControlSelect1">
            Please select the Page for Modification
          </label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => {
              console.log(e.target.value);
              setselectedOption(e.target.value);
            }}
          >
            <option value="Select Page">Select Page</option>
            <option value="Home Page">Home Page</option>
            <option value="AboutUs">About Us</option>
            <option value="Activity">Activity</option>
            <option value="Admission">Admission</option>
            <option value="Achievement">Achievement</option>
            <option value="Media">Media</option>
            <option value="Contact Us">Contact Us</option>
          </select>
        </div>
      </form>

      <div>{project()}</div>
    </>
  );
}

export default Admin;
