
import Chemx from './chemx1';
import Chemx1 from './chem2';
import Chemx3 from './chem3';

export default function Xpert() {
  return (
    <div className="bg-black home-page">
      {/* Hero Section */}
      <Chemx />

      {/* Other Sections */}
      <div className="content-sections">
         <Chemx1 />
         <Chemx3 />
      </div>
    </div>
  );
}