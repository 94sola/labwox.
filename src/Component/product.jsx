import React from 'react'; 
import chemxpert from '../assets/image/chemxpert.jpg';
import chem from '../assets/image/chemxpert-imge.jpg';

const Chemxpert = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col px-4">
      {/* Logo at the Top Right */}
      <div className="justify-start w-full mt-3 mb-4 sm:mb-8">
        <img
          src={chemxpert}
          alt="Chemxpert Logo"
          className="w-auto h-[200px] md:h-[300px] lg:h-[400px] object-contain"
        />
      </div>

      {/* Image and Text Section */}
      <div className="flex flex-col items-center lg:items-end pr-5 w-full mt-4 lg:mt-8">
        {/* Image on the Left */}
        <div className="w-full lg:w-[80%]">
          <img
            src={chem}
            alt="Chemxpert"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-2xl mx-auto"
          />
        </div>
      </div>

      {/* Text Below the Image */}
      <div className="w-full lg:w-[70%] mt-6 sm:mt-8 md:mt-16 pl-6 md:pl-14 pb-4 sm:pb-5">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-normal font-serif mb-3 leading-relaxed">
          Drive impactful discoveries and partner with us on your research journey.
        </h3>

        <button className="px-3 md:px-4 py-1.5 md:py-2 bg-black text-white font-semibold rounded-full hover:bg-red-900 transition duration-300 text-base md:text-lg lg:text-xl mt-3">
          Start a Project
        </button>
      </div>
    </div>
  );
};

export default Chemxpert;
