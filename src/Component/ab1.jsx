import about from "../assets/image/about.jpeg";

const AboutUs = () => {
  return (
    <div className="font-sans py-12 px-4 sm:px-8 lg:px-16 bg-black text-white">
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left lg:flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-full sm:max-w-[70%] lg:max-w-[60%] mx-0 lg:mx-0">
            Labwox provides cutting-edge solutions to support research and
            learning in the chemical sciences.
          </p>
        </div>

        {/* Right: Image */}
        <div className="lg:flex-1">
          <img
            src={about}
            alt="Diverse Cast of Employees"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-8 border-t-gray-800 w-full" />

      {/* What We Do Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-20">
        {/* Left: Heading */}
        <div className="text-center lg:text-left lg:flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What <span className="italic text-red-600">We</span> Do
          </h1>
        </div>

        {/* Right: Description */}
        <div className="lg:flex-1">
          <p className="text-base sm:text-lg lg:text-xl max-w-full sm:max-w-[80%] lg:max-w-[80%] mx-0 lg:mx-0">
            Labwox provides cutting-edge solutions to support research and
            learning in the physical sciences. We provide leading-edge learning content targeted at professionals and scientists who need to upgrade their proficiency both in industry and academia.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-8 border-t-gray-800 w-full" />
    </div>
  );
};

export default AboutUs;
