import React from "react";
import Achivements from "./AdminEditPage/Achivements";

function Admin() {
  return (
    <>
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

      <Achivements />
    </>
  );
}

export default Admin;

