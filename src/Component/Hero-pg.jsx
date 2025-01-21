import { Link } from "react-router-dom";
import chem from "../assets/image/chemxpert-imge.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white flex flex-col px-4">
      {/* Logo at the Top */}
      <div className="lab pl-6 sm:pl-8 lg:pl-12">
        <Link to="/">
          <h1 className="text-[80px] sm:text-[120px] md:text-[200px] lg:text-[250px] xl:text-[350px] font-bold leading-none">
            labwox<span className="text-red-600">.</span>
          </h1>
        </Link>
      </div>

      {/* Spacer to Push Image Down */}
      <div className="flex-grow"></div>

      {/* Image at the Bottom, aligned to the right */}
      <div className="w-full flex justify-end mt-auto pr-6 sm:pr-8 lg:pr-12">
        <div className="w-full lg:w-[80%]">
          <img
            src={chem}
            alt="Chemxpert"
            className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Text Below the Image */}
      <div className="w-full lg:w-[60%] mt-6 sm:mt-8 md:mt-16 pl-6 sm:pl-8 lg:pl-14 pb-4">
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
