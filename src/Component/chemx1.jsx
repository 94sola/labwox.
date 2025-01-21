import xpert from "../assets/image/xpert1.jpg";

const Chem = () => {
  return (

      <div className="bg-black px-2 w-full md:px-4  pt-20 pb-4">
        {/* ChemXpert Title */}
        <h1 className="text-slate-100 text-6xl md:text-8xl font-sans font-extrabold mb-10 text-center md:text-left leading-tight">
          ChemXpert
        </h1>
      
        <div className="flex flex-col lg:flex-row items-center rounded-lg justify-center pt-8 bg-gray-100 gap-8">

        <div className="w-full lg:w-1/2 text-center font-sans lg:text-left px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10">
          <h1 className=" chem1 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Bring your research <br />ideas to life.
          </h1>
          <div className="pr-0 sm:pr-4 md:pr-6">
            <p className="text-black text-base sm:text-lg md:text-xl font-medium">
            We believe that collaboration is the cornerstone of groundbreaking research. We provide the resources, expertise, and support to turn your ideas into impactful discoveries.
            </p>
          </div>
        </div>

      
          <div className="lg:w-1/2 relative pl-10 shadow-lg bg-white pt-6 rounded-lg">
            {/* Image */}
            <img
              src={xpert}
              alt="Design Preview"
              className="rounded-md shadow-lg w-full"
            />
          </div>
        </div>
        <hr className="mt-10 mb-6 border-t-gray-800 w-full" />
    </div>
  );
};

export default Chem;
