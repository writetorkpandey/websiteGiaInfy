import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <ContactUs/>
    </div>
  );
}

export default App;
