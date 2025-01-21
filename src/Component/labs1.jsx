import labsoft from "../assets/image/labsoft.jpg";

const Lab1 = () => {
  return (
    <div className="block bg-black text-white py-8 px-6 sm:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-16">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:flex-1">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold mb-6">
            LabSoft
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6">
            Transforming Laboratory Productivity and Management.
          </p>
          <a
            href="https://labsoft-report-app.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300 text-base sm:text-lg lg:text-xl"
          >
            Try Labsoft Now
          </a>
        </div>
        
        {/* Image Section */}
        <div className="lg:flex-1 flex justify-center lg:justify-end">
          <img
            src={labsoft}
            alt="Labsoft Report"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="mt-12 border-t-gray-800 w-full" />
    </div>
  );
};

export default Lab1;
