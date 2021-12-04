import React from "react";
import AchivementsEdit from "./AdminEditPage/AchivementsEdit";
import { Helmet } from "react-helmet";

function Admin() {
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
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Select Page</option>
            <option>Home Page</option>
            <option>About Us</option>
            <option>Activity</option>
            <option>Admission</option>
            <option>Achievement</option>
            <option>Media</option>
            <option>Contact Us</option>
          </select>
        </div>
      </form>

      <AchivementsEdit />
    </>
  );
}

export default Admin;
