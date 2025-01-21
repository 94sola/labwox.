import lasepa from '../assets/image/LASEPA.jpg';
import son from '../assets/image/SON-logo.jpg';
import nirma from '../assets/image/nirma-logo.jpg';
import scientific from '../assets/image/ls-scientific.png';
import beau from '../assets/image/beau-logo.png';
import pawz from '../assets/image/pawz-logo.png';
import ctx from '../assets/image/ctx.png';
import { Link } from 'react-router-dom';

const Partner = () => {
  return (
    <div className="bg-black text-white py-16">

      <div className="text-center py-16 lg:py-20">
        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug px-6 sm:px-12 lg:px-20">
          Find out how partnering with Labwox can help you achieve tangible research and learning capabilities.
        </h3>
        <div className="mt-6 sm:mt-8">
          <Link to="/contact">
            <button className="bg-white hover:bg-cyan-400 text-black font-medium text-sm md:text-base lg:text-xl py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white py-14 drop-shadow-lg rounded-xl mx-4 lg:mx-0">
        
        <div className="text-center px-4">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-800 tracking-wide font-sans">
            These great companies have opted to trust us.
          </h2>
        </div>

        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 justify-center px-6">
          {[lasepa, son, nirma, scientific, beau, pawz, ctx].map((logo, index) => (
            <div
              key={index}
              className="bg-transparent rounded-lg shadow-lg p-4 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Company ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      
      
    </div>
  );
};

export default Partner;
