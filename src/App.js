import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Navigation from "./components/navigation/Navigation";
import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import MobileMenu from './components/navigation/MobileMenu';
import WaterWave from 'react-water-wave'; 


function App() {
  return (
    <>
      <Router>
        <Navigation />
        {['end'].map((placement, idx) => (
          <MobileMenu className="mobile" key={idx} placement={placement} name={placement} />
        ))}  
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
