//import React from 'react';
import chemxpert from '../assets/image/chemxpert.jpg';
import chem from '../assets/image/chemxpert-imge.jpg';

const Chemxpert = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col px-4">
      {/* Logo at the Top Right */}
      <div className=" justify-start w-full mt-3">
        <img
          src={chemxpert}
          alt="Chemxpert Logo"
          className="w-auto h-[400px] object-contain"
        />
      </div>

      {/* Image and Text Section */}
      <div className="flex flex-col items-center lg:items-end pr-5 w-full mt-8 lg:mt-4">
        {/* Image on the Left */}
        <div className="w-full lg:w-[80%]">
          <img
            src={chem}
            alt="Chemxpert"
            className="w-full h-[700px] object-cover rounded-2xl mx-auto"
          />
        </div>
      </div>
       {/* Text Below the Image */}
       <div className="w-full lg:w-[70%] mt-24 pl-14">
          <h3 className="text- lg:text-[70px] font-normal font-serif mb-6 leading-none" >
            Drive impactful discoveries and partner with us on your research journey.
          </h3>
          <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-red-900 transition duration-300 text-lg lg:text-xl">
            Start a Project
          </button>
        </div>
    </div>
  );
};

export default Chemxpert;
