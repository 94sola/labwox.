import about from "../assets/image/about.jpeg";
import Wrapper from "./wrapper";

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="font-serif block  py-12 px-2 sm:px-4 lg:px-8 xl:px-16 bg-black text-white">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-full sm:max-w-[90%] lg:max-w-[80%] mx-auto lg:mx-0">
              Labwox provides cutting-edge solutions to support research and
              learning in the chemical sciences.
            </p>
          </div>

        
          <div className="lg:flex-1">
            <img
              src={about}
              alt="Diverse Cast of Employees"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>

        <hr className="mt-8 border-t-gray-800 w-full" />
        <div className=" text-white flex flex-col lg:flex-row justify-between items-center gap-8 py-20">
          
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What <span className="italic text-red-600">We</span> Do
            </h1>
          
          </div>

          {/* Hero Image */}
          <div className="lg:flex-1">
              <p className="text-base sm:text-lg lg:text-xl text-white max-w-full sm:max-w-[90%] lg:max-w-[80%] mx-auto lg:mx-0">
              Labwox provides cutting-edge solutions to support research and learning in the physical sciences. We provide leading edge learning content targeted at professionals and scientists who need to upgrade their proficiency both in industry and academics.
              </p>
              </div>
        </div>


        <hr className="mt-8 border-t-gray-800 w-full" />
        </div>
    </Wrapper>
  );
};

export default AboutUs;
