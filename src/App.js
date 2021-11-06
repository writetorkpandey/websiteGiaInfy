<<<<<<< HEAD
import './App.css';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import ContactUs from './Components/ContactUs';
import Activity from './Components/Activity';
=======

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

>>>>>>> 22f626157a047f27826f9be3b015a0c5baa54eb1

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <Footer />
      <ContactUs/>
      <Activity/>
=======

      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Aboutuspage" exact component={Aboutuspage} />
          <Route path="/Mediapage" component={Mediapage} />
        </Switch>
      </Router>

>>>>>>> 22f626157a047f27826f9be3b015a0c5baa54eb1
    </div>
  );
}

export default App;
