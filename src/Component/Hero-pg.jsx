//import React from "react";
import { Link } from "react-router-dom";
import chem from "../assets/image/chemxpert-imge.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col px-4">
      {/* Logo at the Top */}
      <div className=" pl-6 mt-2 md:mt-4 lg:mt-6" >
        <Link to="/">
          <h1 className="lab text-[250px]">labwox<span className="text-red-600">.</span></h1>
        </Link>
      </div>

      {/* Content Container */}
      <div className="flex-grow"></div> {/* This creates space between logo and image */}

      {/* Image at the Bottom, aligned to the left */}
      <div className="w-full flex justify-end mt-auto pr-10"> {/* Add right padding here */}
        <div className="w-full lg:w-[80%]">
          <img
            src={chem}
            alt="Chemxpert"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover rounded-2xl"
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

export default Hero;
