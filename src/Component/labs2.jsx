

const Lab2 = () => {
  return (
    
      <div className="block py-12 px-4 sm:px-8 lg:px-16 bg-black text-white">
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center lg:text-left">
              What is LabSoft?
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg">
            <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-center lg:text-left">
              LabSoft is designed for modern laboratories looking to optimize
              their operations. Whether you're managing client projects,
              generating reports, or tracking analytical processes, LabSoft
              provides the tools you need to boost your productivity.
            </p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="mt-12 border-t border-gray-700 w-full" />
      </div>
    
  );
};

export default Lab2;
