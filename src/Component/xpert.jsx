
import Chemx from './chemx1';
import Chemx1 from './chem2';
import Chemx3 from './chem3';
import Chemx4 from './chem4'

export default function Xpert() {
  return (
    <div className="bg-black font-sans">
      {/* Hero Section */}
      <Chemx />

      {/* Other Sections */}
      <div className="content-sections">
        <Chemx4 />
        <Chemx1 />
        <Chemx3 />
      </div>
    </div>
  );
}