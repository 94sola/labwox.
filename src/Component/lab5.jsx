import manager from "../assets/image/lab-manager.jpg";
import analyst from "../assets/image/analyst.jpg";
import client from "../assets/image/client.jpg";

const Lab1 = () => {
  return (
    <div className="block bg-black text-white py-8 px-6 sm:px-10 lg:px-16">
      {/* Main Container with Gradient Background */}
      <div
        className="px-6 sm:px-8 py-6 rounded-xl"
        style={{
          background: "linear-gradient(to bottom, black, #1a1a1a, black)",
        }}
      >
        {/* Section for Lab Managers */}
        <div className="flex px-6 sm:px-8 py-6 flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h5 className="text-gray-300  font-semibold text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-snug mb-4">
              For Lab Managers
            </h5>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Gain full visibility into project timelines and deliverables.
              Improve efficiency and reduce bottlenecks with real-time task
              tracking.
            </p>
          </div>
          {/* Image Content */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={manager}
              alt="Lab Manager"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Section for Analysts */}
        <div className="flex px-6 sm:px-8 py-6 flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-16">
          {/* Image Content */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={analyst}
              alt="Analyst"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg shadow-2xl"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h5 className="text-gray-300 font-semibold text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-snug mb-4">
              For Analysts
            </h5>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Easily manage tasks and access relevant project data in one
              place. Reduce manual workload with automated reporting tools.
            </p>
          </div>
        </div>

        {/* Section for Clients */}
        <div className="flex px-6 sm:px-8 py-6 flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h5 className="text-gray-300 font-semibold text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-snug mb-4">
              For Clients
            </h5>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Receive clear, professional, and timely reports that inspire
              confidence.
            </p>
          </div>
          {/* Image Content */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={client}
              alt="Client"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="mt-14 border-t-gray-800 w-full" />
    </div>
  );
};

export default Lab1;
