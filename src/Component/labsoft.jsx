import Wrapper from "../Component/wrapper";
import labsoft from "../assets/image/labsoft-image.jfif";

const Labsoft = () => {
  return (
    <div className="bg-black text-white py-20">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-20">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-start relative pt-14 md:pt-20">
            <img
              src={labsoft}
              alt="LabSoft Illustration"
              className="w-full max-w-md md:max-w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute inset-0 rounded-lg border-4 border-transparent hover:border-gray-500 transition duration-300"></div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col gap-8">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Lab Productivity Solutions with LabSoft
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              LabSoft is our proprietary laboratory productivity platform designed to revolutionize how labs manage reporting, workflow, and projects.
             
            </p>
            <div>
            <a
                href="https://labsoft-report-app.vercel.app/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className=" btn inline-block px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-600 hover:bg-neutral-900 text-white font-light text-sm rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                >
                Learn More
              </a>
            </div>
            <h6 className="text-xl font-semibold  text-white group-hover:text-purple-400 transition duration-300">
              With LabSoft, laboratories can:
            </h6>

            <ul className="space-y-8">
              <li className="group">
                <h5 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition duration-300">
                  Streamline Reporting
                </h5>
                <p className="text-gray-200 text-sm">
                  Automate data collection and report generation for quick, accurate dissemination of findings.
                </p>
              </li>
              <li className="group">
                <h5 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition duration-300">
                  Enhance Project Management
                </h5>
                <p className="text-gray-200 text-sm">
                  Track and manage multiple projects simultaneously, ensuring timely progress and compliance with research objectives.
                </p>
              </li>
              <li className="group">
                <h5 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition duration-300">
                  Boost Efficiency
                </h5>
                <p className="text-gray-200 text-sm">
                  Minimize manual tasks, reduce human error, and free up valuable time for analytical and creative work.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Labsoft;
