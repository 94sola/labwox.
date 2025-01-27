//import React from 'react';
import Hero from './Hero-pg';
import Chemx from './product';
import Labsoft from './labsoft';
import WhyPartner from './whypartner';
import Partner from './partners';
import Application from './application';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Other Sections */}
      <div className="content-sections">
        <Chemx />
        <WhyPartner />
        <Labsoft />
        <Application />
        <Partner />
      </div>
    </div>
  );
}
