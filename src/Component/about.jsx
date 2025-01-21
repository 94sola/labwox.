

import Ab2 from './ab2';
import Ab1 from './ab1'

export default function About() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Ab1 />

      {/* Other Sections */}
      <div className="content-sections">
       <Ab2 />
      </div>
    </div>
  );
}
