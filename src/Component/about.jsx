import about from "../assets/image/about.jpeg";

const AboutUs = () => {
  return (
    <div className="block block-cta-hero py-12 px-4 sm:px-8 lg:px-16 xl:px-28">
      {/* Top Horizontal Line */}
      <hr className="my-8 border-t-2 border-gray-300 w-full" />

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Hero Content */}
        <div className="hero-content text-center lg:text-left mb-8 lg:mb-0 lg:flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="subtitle text-base sm:text-lg lg:text-xl text-gray-700 max-w-full sm:max-w-[90%] lg:max-w-[80%] mx-auto lg:mx-0">
            Labwox provides cutting-edge solutions to support research and
            learning in the chemical sciences.
          </p>
        </div>

        {/* Hero Image */}
        <div className="hero-image lg:flex-1">
          <img
            src={about}
            alt="Diverse Cast of Employees"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Bottom Horizontal Line */}
      <hr className="mt-8 border-t-2 border-gray-300 w-full" />
    </div>
  );
};

export default AboutUs;
