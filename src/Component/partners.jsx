import Wrapper from "./wrapper";
import lasepa from '../assets/image/lasepa-logo.png';
import son from '../assets/image/SON-logo.png';
import nirma from '../assets/image/NIRMA.png';
import scientific from '../assets/image/ls-scientific.png';
import beau from '../assets/image/beau-logo.png';
import pawz from '../assets/image/pawz-logo.png';
import ctx from '../assets/image/ctx.png';
import { Link } from 'react-router-dom';

const Partner = () => {
  return (
    <div className="bg-black text-white py-16">
      <Wrapper>
        {/* Header Section */}
        <div className="bg-white py-14 drop-shadow-lg rounded-xl mx-4 lg:mx-0">
          <div className="text-center px-4">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-gray-800">
              These great companies have opted to trust us.
            </p>
          </div>

          {/* Sliding Logos Section */}
          <div className="mt-12 relative overflow-hidden">
            <div className="flex animate-slide items-center justify-start gap-8 md:gap-12">
              {[lasepa, son, nirma, scientific, beau, pawz, ctx].map((logo, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-lg shadow-lg w-16 sm:w-20 md:w-28 h-auto flex justify-center items-center p-2 md:p-4"
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

        {/* CTA Section */}
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
      </Wrapper>

      {/* Keyframes for Sliding Animation */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
          display: flex;
          width: calc(7 * 200px); /* Adjust width to fit all logos with gaps */
        }
      `}</style>
    </div>
  );
};

export default Partner;
