

import Lab1 from './labs1.jsx';
import Lab2 from './labs2'
import Lab3 from './lab3'
import Lab4 from './lab4'
import Lab5 from './lab5'

export default function About() {
  return (
    <div className="font-sans bg-black">
      {/* Hero Section */}
      <Lab1 />

      {/* Other Sections */}
      <div className="content-sections">
       <Lab2 />
       <Lab5 />
       <Lab4 />
       <Lab3 />
      </div>
    </div>
  );
}



