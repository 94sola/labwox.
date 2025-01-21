//import React from 'react';
import Hero from './Hero-pg';
import Chemx from './product';
import Labsoft from './labsoft';
import Gallery from './gallery';
import Testimonial from './Testimony';
import Partner from './partners';
import Training from './training';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <div className="content-sections">
        <Chemx />
        <Labsoft />
        <Gallery />
        <Testimonial />
        <Training />
        <Partner />
      </div>
    </div>
  );
}
