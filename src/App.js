
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Aboutuspage from "./Pages/Aboutuspage";
import Mediapage from "./Pages/Mediapage";
import ActivityPage from "./Pages/ActivityPage";
import Contactuspage from "./Pages/Contactuspage";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Aboutuspage" exact component={Aboutuspage} />
          <Route path="/Mediapage" component={Mediapage} />
          <Route path="/Activitypage" component={ActivityPage} />
          <Route path="/Contactuspage" component={Contactuspage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
