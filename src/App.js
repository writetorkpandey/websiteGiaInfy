import './App.css';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import ContactUs from './Components/ContactUs';
import Activity from './Components/Activity';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <ContactUs/>
      <Activity/>
    </div>
  );
}

export default App;
