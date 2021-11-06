
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import Aboutus from "./Components/Aboutus";
import Media from "./Components/Media";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Aboutuspage from "./Pages/Aboutuspage";
import Mediapage from "./Pages/Mediapage";


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Aboutuspage" exact component={Aboutuspage} />
          <Route path="/Mediapage" component={Mediapage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
