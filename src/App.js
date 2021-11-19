import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Aboutuspage from "./Pages/Aboutuspage";
import Mediapage from "./Pages/Mediapage";
import ActivityPage from "./Pages/ActivityPage";
import Contactuspage from "./Pages/Contactuspage";
import Loginpage from "./Pages/LoginPage";
import AdmissionPage from "./Pages/AdmissionPage";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Aboutus" exact component={Aboutuspage} />
          <Route path="/Media" component={Mediapage} />
          <Route path="/Activities" component={ActivityPage} />
          <Route path="/Contactus" component={Contactuspage} />
          <Route path="/Login" component={Loginpage} />
          <Route path="/Admission" component={AdmissionPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
