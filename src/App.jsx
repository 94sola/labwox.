import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/footer';

// Pages
import Home from './Component/home'; // Home Page (includes Chemxpert, Labsoft, etc.)
import Lab from './Component/Lab';
import Phyto from './Component/Phyto';
import Mdv from './Component/mdv';
import Xpert from './Component/xpert';
import Contact from './Component/contact';
import Contaminant from './Component/contaminant';
import About from './Component/about';
import Pollutant from './Component/pollutant';

function App() {
  return (
    <div className="max-w-full">
      <Router>
        {/* Navbar (Visible on all pages) */}
        <Navbar />

        {/* Routes to Navigate Between Pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page with included components */}
          <Route path="/lab" element={<Lab />} />
          <Route path="/phyto" element={<Phyto />} />
          <Route path="/pollutant" element={<Pollutant />} />
          <Route path="/xpert" element={<Xpert />} />
          <Route path="/mdv" element={<Mdv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/contaminant" element={<Contaminant />} />
        </Routes>

        {/* Footer (Visible on all pages) */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
