import arrow from "../assets/image/right-arrow1.png";
import { Link } from "react-router-dom";

function Labsoft() {
  return (
    <div className="chemxpert text-black elative bg-black overflow-hidden pt-12 pb-10 flex flex-col items-center">
      {/* Full-width Neutral Background */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between py-8 px-6 sm:pr-12 md:pr-24 lg:pr-32 sm:pl-8 md:pl-20 lg:pl-24 bg-white hover:bg-neutral-800 hover:text-black font-sans transition duration-300 shadow-lg rounded-none group">
        {/* Left side: Heading */}
        <div className="text-left group-hover:text-gray-200">
          <h1 className="text-[60px] sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-loose">
            LABSOFT
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mt-2">
          Lab Productivity Solution
          </h2>
        </div>

        {/* Right side: Button & Arrow */}
        <div className="flex items-center gap-8 mt-8 md:mt-0">
          <Link to="/lab">
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300 text-base sm:text-lg lg:text-xl shadow-md">
              Learn More
            </button>
          </Link>
          {/* Arrow - Changes Color on Hover */}
          <div className="transition duration-300 group-hover:filter group-hover:invert">
            <Link to="/lab">
              <img src={arrow} alt="right-arrow" />
            </Link>
          </div>
        </div>
      </div>

      {/* Section for H3 and Lists */}
      <div className="w-full my-20 px-6 text-white sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl hover:text-red-500 text-slate-200 sm:text-2xl font-normal mb-4">
              Project Management Made Easy
            </h3>
            <p className="text-sm font-light text-gray-400 sm:text-base lg:text-lg leading-relaxed">
              Organize your lab’s activities seamlessly with tools for task delegation, progress tracking, and deadline management.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl text-slate-200 hover:text-red-500 sm:text-2xl font-medium mb-4">
              Streamlined Reporting
            </h3>
            <p className="text-sm font-light text-gray-400 sm:text-base lg:text-lg leading-relaxed">
              Generate comprehensive reports with a few clicks, ensuring accuracy and professional presentation every time.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl text-slate-200 hover:text-red-500 sm:text-2xl font-medium mb-4">
              Data Security and Compliance
            </h3>
            <p className="text-sm font-light text-gray-400 sm:text-base lg:text-lg leading-relaxed">
              Labsoft ensures your data is secure and complies with industry standards for quality assurance and reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Labsoft;
