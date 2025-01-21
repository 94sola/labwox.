import about from "../assets/image/about-chem.jpg";


const Chemx = () => {
  return (
      <div className="font-sans py-12 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-zinc-900 via-black to-neutral-900 text-white">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center bg-zinc-800 rounded-2xl shadow-xl p-8 lg:p-12 gap-12">
          {/* Image Section */}
          <div className="lg:flex-1">
            <img
              src={about}
              alt="Diverse Cast of Employees"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              About ChemXpert
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-full sm:max-w-[90%] lg:max-w-[85%] mx-auto lg:mx-0">
              ChemXpert is a flagship initiative by <span className="font-bold text-red-500">Labwox</span>, created to bridge the gap between academic ambition and practical execution. We collaborate with researchers to tackle complex scientific questions, offering access to advanced analytical laboratories, technical expertise, and funding for critical research milestones.
            </p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="mt-12 border-t-gray-700 w-full" />
      </div>

  );
};

export default Chemx;
