import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero-pg';
//import HeavyMetals from './Component/HeavyMetal';
import About from './Component/about';
import Application from './Component/application';
import Chemxpert from './Component/product';
import Environmental from './Component/Environmental';
import Phyto from './Component/Phyto';
import Mdv from './Component/mdv';
import Food from './Component/food';
import WhyPartner from './Component/whypartner';
import Labsoft from './Component/labsoft';
import Partner from './Component/partners';
import Footer from './Component/footer';
import Contact from './Component/contact';

function App() {
  return (
    <div className="max-w-full">
      <Router>
        {/* Static Components */}
        <Navbar />
        <div className="main-content">
          <Hero />
          <Chemxpert />
          <Labsoft />
          <WhyPartner />
          <Partner />
          <Application />
        </div>
        <Footer />

        {/* Routes for Navigable Pages */}
        <Routes>
          <Route path="/environmental" element={<Environmental />} />
          <Route path="/phyto" element={<Phyto />} />
          <Route path="/food" element={<Food />} />
          <Route path="/mdv" element={<Mdv />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
