import { Link } from "react-router-dom";
import chem from "../assets/image/hero-imge.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white flex flex-col px-4">
      {/* Logo Section */}
      
        <Link to="/">
          <h1 className="text-[80px] sm:text-[120px] md:text-[200px] lg:text-[250px] xl:text-[350px] font-bold leading-none">
            labwox<span className="text-red-600">.</span>
          </h1>
        </Link>

      {/* Image Section */}
      <div className="w-full flex justify-end pr-6 sm:pr-8 lg:pr-12">
        <div className="w-full lg:w-[80%]">
          <img
            src={chem}
            alt="Chemxpert"
            className="w-full h-auto max-h-[200px] sm:max-h-[350px] md:max-h-[500px] lg:max-h-[700px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Text Below the Image */}
      <div className="w-full lg:w-[60%] mt-3 sm:mt-5 md:mt-10 pl-6 sm:pl-8 lg:pl-14 pb-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-normal font-serif mb-3 leading-relaxed">
          Partner with us on your research journey.
        </h3>

        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-black transition duration-300 text-base sm:text-lg lg:text-xl mt-3">
          Start a Project
        </button>
      </div>
    </div>
  );
};

export default Hero;
