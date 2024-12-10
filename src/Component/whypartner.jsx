import Wrapper from "../Component/wrapper";
import collaboration from "../assets/image/collaboration.png";
import network from "../assets/image/network.png";
import support from "../assets/image/support.png";

const WhyPartner = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-24 px-6 md:px-12">
      <Wrapper>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-700">
            Why Partner with Us?
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Discover how our expertise and resources can elevate your projects and ensure exceptional results.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-16 md:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-12 w-full md:w-1/2">
            {/* Technical Expertise */}
            <div className="flex flex-col items-center text-center space-y-6">
              <img
                src={support}
                alt="Technical Expertise"
                className="w-20 md:w-24 h-auto transform hover:scale-110 transition duration-300"
              />
              <h3 className="text-2xl font-bold text-white">
                Technical Expertise
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-lg">
                Our team brings deep knowledge and practical experience in analytical chemistry, environmental science, and laboratory operations.
              </p>
            </div>

            {/* Comprehensive Network */}
            <div className="flex flex-col items-center text-center space-y-6">
              <img
                src={network}
                alt="Comprehensive Network"
                className="w-20 md:w-24 h-auto transform hover:scale-110 transition duration-300"
              />
              <h3 className="text-2xl font-bold white">
                Comprehensive Network
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-lg">
                Leveraging our established network of state-of-the-art laboratory facilities, we deliver precise, reliable results.
              </p>
            </div>
          </div>

          {/* Vertical Line with Animated Dots */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative h-full w-2 bg-gray-700">
              {/* Top Dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white w-6 h-6 rounded-full animate-bounce"></div>
              {/* Middle Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-6 h-6 rounded-full animate-pulse"></div>
              {/* Bottom Dot */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-6 h-6 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12 w-full md:w-1/2">
            {/* Collaborative Approach */}
            <div className="flex flex-col items-center text-center space-y-6 pt-24">
              <img
                src={collaboration}
                alt="Collaborative Approach"
                className="w-20 md:w-24 h-auto transform hover:scale-110 transition duration-300"
              />
              <h3 className="text-2xl font-bold text-pwhite">
                Collaborative Approach
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-lg">
                We work alongside your team, fostering joint publications, grant applications, and impactful research outcomes.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WhyPartner;
